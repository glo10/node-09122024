import { EventEmitter } from 'node:events'
import { all, randomNumber } from './math.mjs'
const app = new EventEmitter()

// on() est l'alias de addListener()
app.on('app:computed', (nb1, nb2) => {
  all(nb1, nb2)
})
setTimeout(() => {
  app.emit('app:computed', randomNumber(50), randomNumber(500))
}, 5000)