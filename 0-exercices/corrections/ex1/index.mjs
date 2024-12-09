import { stdin as input, stdout as output } from 'process'
import { createInterface } from 'readline/promises'

const app = createInterface({ input, output })
/**
 * Alternatif pour la ligne 4
 * 1. Supprimez la ligne 1 d'import depuis 'process'
 * 2. Remplacez la ligne 4 par le code ci-dessous dans les commentaires
 * 
 * const app = createInterface({ input: process.stdin, output: process.stdout })
 */
console.log('Début')
const lastName = await app.question('Quel est votre nom ? ') // await rend la promesse bloquante autrement dit
const firstName = await app.question('Quel est votre prénom ? ')
console.log(`Bonjour ${lastName} ${firstName} !`)
app.close()
console.log('fin')