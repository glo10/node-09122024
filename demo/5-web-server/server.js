import { app } from './app.js'
const PORT = 8082
/**
 * Mettre le serveur en écoute pour des connexions clientes
 *  sur un port d'écoute
 * Attention le port doit être libre = non utilisé par une autre application
 */ 
app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`)
})