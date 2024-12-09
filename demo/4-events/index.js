import { EventEmitter } from 'node:events'
const app = new EventEmitter()
app.addListener('app:end', (firstname, lastname, age) => {
  console.log('hello', firstname, lastname, age)
})
// on() alias de addListener
app.on('app:start', (user) => {
  console.log('hello', user.name, user.lastname, user.age)
})
// emissions des événements personnalisés, convention personnel je préfixe avec app: mes customs events
app.emit('app:end', 'Glodie', 'Tshimini', 33) // avec des arguments séparés par des virgules
app.emit('app:start', { name: 'Marie', lastname: 'Georges', age: 43 }) // un seul arg sous forme d'objet

// Tant qu'il n'y a pas d'émission de l'évément, la callback dans addListener() ou on() ne sera pas exécutée