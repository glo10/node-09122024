import { readFile } from 'node:fs'
import { createServer } from 'node:http'

const PORT = 8083
const app = createServer((req, res) => {
  // A bannir de mettre les chemins en relatif
  // Bonne pratique : toujours les chémins en absolue avec une résolution du path
  try {
    readFile('../public/index.html', { encoding: 'utf-8'}, (error, content) => {
      if(!error) {
        console.error('erreur ', error)
        res.writeHead(200, { 'content-type': 'text/html' })
        res.end(content)
      } else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.end('<h1>Page 404</h1>')
      }
    })
  } catch(error) {
    console.error('error dans le catch', error)
  }
})

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`)
})