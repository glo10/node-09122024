import { app } from './app.mjs'
import { Server } from 'socket.io'

const PORT = 8000

app.listen(PORT, () => {
  console.info(`Listen on http://localhost:${PORT}`)
})

let users = 0
const io = new Server(app)
io.on('connection', (socket) => {
  users++
  io.emit('app:count', `${users} utilisateur(s) connecté(s)`)
  socket.emit('app:logged', 'Bienvenue')
  socket.on('app:new-message', (message) => {
    io.emit('app:new-message', message)
  })
  socket.on('disconnect', (reason) => {
    console.log('deconnexion', reason)
    users--
    io.emit('app:new-message', 'Un utilisateur nous a quitté ou à rechargé sa page')
  })
})