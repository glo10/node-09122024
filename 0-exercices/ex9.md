# Exercice 9 : authentification bcrypt et jsonwebtoken

## Modalités

- Vous pouvez partir de l'exercice 8 ou créez un nouveau projet
- Utilisez le client ***ThunderClient Visual Studio Code*** pour effectuer vos 2 requêtes vers votre serveur ***Express*** avec la méthode POST pour envoyer et récupérer des informations au format JSON.

## Enoncé

1. Traitez l'inscription d'un nouvel utilisateur à partir d'une requête du client avec la méthode **POST** et des données envoyées au format.
- Les nouvelles inscriptions sont stockées dans un fichier JSON ***users.json*** à créer et positionner librement dans votre projet
- **email et mot de passe sont obligatoires**
- Les autres informations tels que le *nom, prénom, âge, etc.* sont facultatives
- Le mot de passe est **haché**
- Exemple des données envoyés : route  `/users/sign-up` avec la méthode `POST` et les données au format JSON `{ "email": "john@doe.com", "password": "admin", "name": "john", "age": 45}`
- Lorsque tout s'est bien déroulé, votre serveur répond au format JSON `{"message":"success"}` avec le code ***HTTP 201***
- Lorsqu'il y a eu un souci, votre serveur répond avec le code ***HTTP 404*** et le message associée toujours en JSON, par exemple, `{"message":"password required"}`
2. Traitez la connexion d'un utilisateur depuis la route `/users/sign-in` en ***POST*** avec son **email** et **mot de passe** envoyés au format en JSON.
- Si le mot de passe envoyé en clair et le mot de passe stocké dans le fichier JSON pour cet utilisateur correspondent, le serveur répond avec le code HTTP ***200*** et le message JSON `{"message":"success", "token":"generate_token_here"}` avec le  ***token*** généré à partir de ***jsonwebtoken*** dans votre réponse.