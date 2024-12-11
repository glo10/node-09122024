# Demo tests fonctionnels (e2e)

## Recommandations avec cypress

- Un fichier de config cypress.config.js
- Une application qui tourne
- Le dossier cypress et ces sous dossiers (normalement tout est généré automatiquement sauf la config)
- Vos tests doivent finir par *.cy.js*
- *describe(), it(), cy* sont globales

## Lancement

1. `npm install`
2. Lancez l'application écrite dans l'exercice 7 avec une commande *npm* ou *node*
3. Dans le fichier [cypress.config.js](./cypress.config.js), assurez-vous que le port indiqué dans *baseUrl* correspond au port d'écoute de l'exercice 7
4. Lancez vos tests e2e avec la commande `npm run e2e` et laissez-vous guider depuis l'UI pour les exécuter