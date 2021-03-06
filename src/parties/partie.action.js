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
  // getCanvas: (req, res) => {
  //   let targetCanvas = req.query.theme;
  //   if (!targetCanvas) {
  //     res.status(400).send({ error: "Requête null" });
  //   }
  //   partieProcessFile
  //     .getCanvasProcess(targetCanvas)
  //     .then(canvas => {
  //       res.status(200).send({ data: canvas });
  //     })
  //     .catch(err => {
  //       res.status(500).send({ error: "Aucun canvas trouvé", details: err });
  //     });
  // },
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
          res.status(200).send({motATrouver});
        })
        .catch(err => {
          res.status(500).send({ erreur: err });
        });
    }
  },

  /**
   * | route: /theme/words
   * | res: retourne la liste des mots dans data & connecte le joueur
   * | req: req.query.theme contient le theme choisi
   */
  getWords: (req, res) => {
    let targetTheme = req.query.theme;
    if (!targetTheme) {
      return res.status(400);
    } else {
      res.type("json");
      partieProcessFile
        .themeProcess(targetTheme, req.query.id, req.query.pseudo)
        .then(resultat => {
          res.status(200).send(resultat);
        })
        .catch(err => {
          res.status(500).send({ error: "Error on db research", details: err });
        });
    }
  },

  getAllThemes: (req, res) => {
    partieProcessFile
      .getAllThemes()
      .then(themes => {
        res.status(200).send(themes);
      })
      .catch(err => {
        res
          .status(500)
          .send({ msg: "Erreur process tous themes", details: err });
      });
  },

  getCanvas: (req, res) => {
    partieProcessFile
      .getCanvas(req.params.id)
      .then(canvas => {
        res.status(200).send({canvas});
      })
      .catch(err => {
        res
          .status(500)
          .send({ msg: "Erreur process tous themes", details: err });
      });
  },

  joueurEnLigne: (req, res) => {
    if(!req.params.id){ return res.status(400).send('Error request')}
    partieProcessFile.joueurEnLigne(req.params.id)
    .then(joueurs => res.status(200).send(joueurs))
    .catch(err => res.status(500).send("Erreur liste joueur"))
  },

  deconnexion: (req, res) => {
    partieProcessFile.deconnexion(req.body.idPartie, req.body.idJoueur)
    .then(log => {
      res.status(200).send(log);
    })
    .catch(err => {
      res.status(500).send({msg:'Echec de la deconnexion', details: err});
    })
  },

  getMessages: (req, res) => {
    partieProcessFile
      .getMessages(req.params.id)
      .then(messages => {
        res.status(200).send(messages);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  },

  postMessage: (req, res) => {
    if(!req.params.id || !req.body.message){
      res.status(400).send('Requête invalide');
    }
    partieProcessFile
    .postMessage(req.params.id, req.body.message)
    .then(res => {
      res.status(200);
    })
    .catch(err => {
      res.status(500).send(err);
    });
  }
};
