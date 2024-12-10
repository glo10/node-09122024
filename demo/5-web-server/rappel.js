import { createServer } from 'node:http'

const PORT = 8082
// Définition du serveur (mise en place du serveur)
const app = createServer(function(req, res){
  // req = requête du client
  // res = réponse du serveur
  if(req.url === '/') {
    // Ecriture au niveau du headers
    res.writeHead(200, { 'content-type': 'application/json'})
    // Ecriture au niveau du body (corps de la réponse)
    res.write('{ "message": "OK" }')
  } else {
    res.writeHead(404, { 'content-type': 'application/json'})
    res.write('{ "message": "KO" }')
  }
  /**
   * Sans res.end() le client reste en attente de la réponse
   * jusqu'à ce qu'il interrompt la communication
   */ 
  res.end()
})

// Mettre le serveur en écoute
app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`)
})