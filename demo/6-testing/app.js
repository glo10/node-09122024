import { createServer } from 'node:http'

// Définition du serveur (mise en place du serveur)
export const app = createServer(function(req, res){
  // req = requête du client
  // res = réponse du serveur
  if(req.url === '/') {// route / = page d'accueil
    /**
     * Ecriture au niveau du headers
     * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type
     * @see https://en.wikipedia.org/wiki/List_of_HTTP_header_fields 
    */ 
    res.writeHead(200, { 'content-type': 'application/json'})
    // Ecriture au niveau du body (corps de la réponse retourné au client)
    res.write('{ "message": "OK" }')
  } else {
    res.writeHead(404, { 'content-type': 'application/json'})
    res.write('{ "message": "KO" }')
  }
  /**
   * Sans res.end() le client reste en attente de la réponse
   * jusqu'à ce qu'il interrompt la communication (timeout)
   */ 
  res.end()
})