import { readFile } from 'node:fs'
import { createServer } from 'node:http'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

// transformation de l'URL courant en chemin
const currentPath = fileURLToPath(import.meta.dirname)
const currentPathFolder = dirname(currentPath)

const htmlFilename = resolve(
  currentPathFolder,
  '..',
  'public',
  'index.html'
)
console.log('html folder', htmlFilename)
const PORT = 8083
const app = createServer((req, res) => {
  try {
    readFile(htmlFilename, { encoding: 'utf-8'}, (error, content) => {
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