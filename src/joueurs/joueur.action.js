/**
 * ------------------------------------------------
 * | ACTION : Endroit où seront receptionné les datas venant du front
 * | Les test de base se feront ici
 * ------------------------------------------------
 */
const joueurProcessFile = require("./joueur.process");

module.exports = {
  /**_____________________
   * | route: /joueur en GET
   * | res:
   * | req: req.query.email
   */
  getParIdentifiants: (req, res) => {
    if (!req.query.pseudo || !req.query.mdp) {
      res.status(400);
    } else {
      joueurProcessFile
        .getParIdentifiants(req.query.pseudo, req.query.mdp)
        .then(joueur => {
          res.status(200).send(joueur);
        })
        .catch(err => res.status(500).send(err));
    }
  },

  /**________________
   * |
   * |
   * |
   */
  creationDeCompte: (req, res) => {
    console.log(req.body);
    if (!req.body.email || !req.body.username || !req.body.password) {
      res.status(400);
    }
    joueurProcessFile
      .creationDeCompte(req.body.username, req.body.password, req.body.email)
      .then(ret => {
        res.status(200).json(ret);
      })
      .catch(ret => {
        res.status(500).json(ret);
      });
  },

  getParId: (req, res) => {
    if (!req.params.id) {
      res.status(400);
    } else {
      joueurProcessFile
        .rechercherParId(req.params.id)
        .then(joueur => {
          res.status(200).send(joueur);
        })
        .catch(err => {
          res.status(500).send(err);
        });
    }
  },

  supprimerCompte: (req, res) => {
    if (!req.params.id) {
      res.status(400);
    } else {
      joueurProcessFile
        .supprimerCompte(req.params.id)
        .then((res) => res.status(200).send({res:"ok"}))
        .catch((err) => res.status(500).send(err));
    }
  }
};
