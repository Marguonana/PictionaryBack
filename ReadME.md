



# MASTER INFORMATIQUE MIAGE 

# ARCHITECTURE ORIENTÉ SERVICES
# ENSEIGNANT : FRANCK LEDOUX


RAPPORT DE PROJET: PICTIONARY 
API REST DOCUMENTATION



Alexandre ROMÉO
Marguerite NANA
Hajar BENADDI




API REST PICTIONARY




# JOUEUR:

POST 
- Route: /joueur/
- Paramètres: req.body.email req.body.username req.body.password
- Code retour:
- 200 Compte à été créé


POST
- Route: /joueur/user
- Paramètre : req.body.pseudo req.body.mdp
- Code retour:
- 200 Le joueur est connecté à son compte
- 400 Le joueur n'a pas pu se connecter
- 500 Pas de contenus


DELETE
- Route: /joueur/:id
- Paramètres : req.param.id
- Code retour: 200 un joueur est supprimé grâce à son l'id
- 500 Pas de contenus




# PARTIE:

GET
- Route: /partie/
- Paramètres: req.query.partie
- Code retour: 
- 200 retourne la partie (id)  
- 500 Erreur on db research


GET
- Route: partie/nbJoueurs
- Paramètres: 
- Code retour:
- 200 Retourne le nombre de joueurs
- 500 Erreur on db research


GET 
- Route: partie/:id/motAtrouver
- Paramètres : req.params.id
- Code retour:
- 200 Renvoie le mot
- 400 Erreur ID
- 500 Retourne l'erreur mongoose


PUT
- Route: partie/:id/joueurs
- Paramètres: req.params.id req.body.infosJoueurs.pseudo req.body.infosJoueurs.id
- Code retour:
- 200 Le joueur à été ajouté à la partie
- 500 Erreur maj partie


PUT
- Route: partie/:id/canvas
- Paramètres: req.body.canvas req.param.id
- Code retour:
- 200 Canvas mis à jour
- 400 Paramétre manquant
- 500 Echec maj canvas



GET
- Route: partie/:id/canvas
- Paramètres : req.params.id req.query.theme
- Code retour
- 200 renvoie le canvas
- 400 Requête null
- 500 Aucun canvas trouver 


GET
- Route: partie/words
- Paramètres: req.query.theme
- Code retour:
- 200 retourne la liste des mots dans la bdd pour un theme
- 500 Erreur on db research


GET
- Route : /partie/:id/messages
- Paramètres: req.param.id
- Code retour: 
- 200 Retourne la liste des messages
- 500 retourne err mongoose


GET
- Route: partie/themes
- Paramètres : 
- Code retour: 
- 200 Retourne la liste de tous les thèmes
- 500 Erreur process tous les thèmes


GET
- Route: /partie/:id/actifs
- Paramètres : req.params.id
- Code retour : 
- 200 + Liste joueurs en ligne
- 400 “Error request”
- 500 “Erreur liste joueur”



POST
- Route: /partie/deconnexion
- Paramètres: req.body.idJoueur req.body.idPartie
- Code retour: 
- 200 “déconnexion…”
- 500 “Échec de la déconnexion"


POST 
- Route: /partie/:id/messages
- Paramètres : req.body.message req.params.id
- Code retour : 
- 200
- 400 “Requête invalide"
- 500 Err mongoose
