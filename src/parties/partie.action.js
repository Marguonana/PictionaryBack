/**
 * ------------------------------------------------
 * | ACTION : Endroit où seront receptionné les datas venant du front
 * | Les test de base se feront ici
 * ------------------------------------------------
 */
// const colImages  = require('./modelsImages');
const partieProcessFile = require("./partie.process");

module.exports = {
  /**
   * | route: /theme/words
   * | res: retourne la liste des mots dans data
   * | req: req.param.theme contient le theme choisi
   */
  getParties: (req, res) => {
    let targetPartie = req.query.partie;
    if (!targetPartie) {
      return res.status(400);
    } else {
      partieProcessFile
        .partieProcess(targetPartie)
        .then(parties => {
          res.status(200).send({ data: parties });
        })
        .catch(err => {
          res.status(500).send({ msg: "Error on db research", details: err });
        });
    }
  },

  getNbJoueurs: (req, res) => {
    partieProcessFile
      .getNbJoueursDesThemes()
      .then(NbJoueursDansThemes => {
        res.status(200).send({ nbJoueurs: NbJoueursDansThemes });
      })
      .catch(err => {
        res.status(500).send({ msg: "Error on db research", details: err });
      });
  },

  rejoindrePartie: (req, res) => {
    if (
      !req.params.id ||
      !req.body.infosJoueur.id ||
      !req.body.infosJoueur.pseudo
    ) {
      return res.status(400);
    } else {
      let data = {
        infosJoueur: {
          id: req.body.infosJoueur.id,
          username: req.body.infosJoueur.pseudo
        },
        idPartie: req.params.id
      };
      partieProcessFile
        .rejoindrePartie(data)
        .then(() => {
          res.status(200).send({
            retour:
              "Le joueur " +
              data.infosJoueur.username +
              " a été ajouté à la partie " +
              data.idPartie
          });
        })
        .catch(err => {
          res
            .status(500)
            .send({ msg: "Erreur maj partie", details: err.details });
        });
    }
  },
  getCanvas: (req, res) => {
    let targetCanvas = req.query.theme;
    if (!targetCanvas) {
      res.status(400).send({ error: "Requête null" });
    }
    partieProcessFile
      .getCanvasProcess(targetCanvas)
      .then(canvas => {
        res.status(200).send({ data: canvas });
      })
      .catch(err => {
        res.status(500).send({ error: "Aucun canvas trouvé", details: err });
      });
  },
  postCanvas: (req, res) => {
    if (!req.body.canvas || !req.body.theme) {
      res.status(400).send({ error: "Requête null" });
    }
    partieProcessFile
      .postCanvasProcess(req.body.theme, req.body.canvas)
      .then(() => {
        res.status(200);
      })
      .catch(err => {
        res.status(500).send({ error: "Echec de la sauvegarde", details: err });
      });
  },
  mettreAJourCanvas: (req, res) => {
    if (!req.body.canvas || !req.params.id) {
      res.status(400).send("Paramètre manquant");
    } else {
      partieProcessFile
        .mettreAJourCanvas(req.body.canvas, req.params.id)
        .then(() => {
          res.status(200).send("Canvas mis à jour");
        })
        .catch(err => {
          res
            .status(500)
            .send({ msg: "Echec maj canvas", details: err.details });
        });
    }
  },

  getMotATrouver: (req, res) => {
    if (!req.params.id) {
      res.status(400).send("Erreur ID");
    } else {
      partieProcessFile
        .getMotATrouver(req.params.id)
        .then(motATrouver => {
          res.status(200).send(motATrouver);
        })
        .catch(err => {
          res.status(500).send({ erreur: err });
        });
    }
  }
};
