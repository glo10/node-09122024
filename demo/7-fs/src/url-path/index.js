import { readFile } from 'node:fs'
import { createServer } from 'node:http'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

// Transformation de l'URL courant en chemin
const currentPath = fileURLToPath(import.meta.url)
// Récupération du dossier courant
const currentPathFolder = dirname(currentPath)

// Construction du chemin absolue vers le fichier public/index.html
const htmlFilename = resolve(
  currentPathFolder,
  '..',// retour d'un niveau dans l'arborescence
  '..',
  'public',
  'index.html'
)
console.log('html folder', htmlFilename)
const PORT = 8084
const app = createServer((req, res) => {
  try {
    readFile(htmlFilename, { encoding: 'utf-8'}, (error, content) => {
      if(!error) {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.end(content)
      } else {
        console.error('erreur ', error)
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