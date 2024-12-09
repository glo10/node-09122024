import { stdin as input, stdout as output } from 'process'
import { all } from './math.mjs'
import { createInterface } from 'readline/promises'

const app = createInterface({ input, output })
app.addListener('app:computed', (n1, n2) => {
    all(n1, n2)
})
const nb1 = await app.question('Nombre 1 : ')
const nb2 = await app.question('Nombre 2 : ')
app.emit('app:computed', parseInt(nb1), parseInt(nb2))
app.close()
