import { createServer } from 'node:http'

const PORT = 8081
let counter = 0
const app = createServer((req, res) => {
  /**
   * A partir req un objet qui contient les infos de la Requête côté client
   * Exemples d'infos
   *  - Méthode (GET, POST, PUT, DELETE, etc)
   *  - Des paramètres transmis par le client au niveau de l'URL
   *  - URL
   *  - Le body (le corps de requête)
   *  - etc.
   */
  console.log('infos request', req.method, req.url)
  if(req.url === '/') {
    counter++
    app.emit('app:connexion', counter)
  }
  /**
   * res un objet pour caractériser la réponse
   * Des méthodes pour concevoir et renvoyer la réponse au client
   * - headers (en-tête) : type de contenu, status (1xx, 2xx, 3xx, 4xx, 5xx)
   * - le body (HTML, texte brut, JSON, fichier, etc.)
   */
  const html = `
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bienvenue</title>
      </head>
      <body>
        <h1>Bienvenue</h1>
      </body>
      </html>
  `
  const json = '{ "message": "success"}'
  res.writeHead(200, { 'content-type': 'application/json'})
  res.end(json)
})

app.on('app:connexion', (data) => {
  console.log('Nb utilisateurs ', data)
})

app.listen(PORT, () => {
  console.log(`Application tourne sur http://localhost:${PORT}`)
})

