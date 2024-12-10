import { createServer } from 'node:http'

// Définition du serveur (mise en place du serveur)
export const app = createServer(function(req, res){
  const headers = { 'content-type': 'application/json'}
  const status = req.url === '/' ? 200 : 404
  const response = status === 200 ? '{ "message": "OK" }':'{ "message": "KO" }'
  res.writeHead(status, headers)
  res.end(response)
})