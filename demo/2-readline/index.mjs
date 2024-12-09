// on importe uniquement la fonction createInterface depuis le module interne readline
import { createInterface } from 'node:readline/promises'

// utilisation de la fonction avec les bons paramètres ici les interfaces pour la communication avec l'utilisateur
// ici le terminal
const ui = createInterface({ input: process.stdin, output: process.stdout})
/**
* question() est asynchrone donc le programme n'attend le résultat avant d'exécuter
  la ligne suivante autrement la ligne d'après s'exécute immédiatement si l'instruction est synchrone
*/
const response = ui.question('Quel est votre langage préferée ?')
response.then((data) => {
  console.log('La réponse du user est ', data)
})
ui.close()
// console.log('FIN')
