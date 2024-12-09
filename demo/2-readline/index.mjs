/**
 * on importe uniquement la fonction createInterface depuis le module interne readline
 * Ce module est constitué de plusieurs fonctions
 * Ici on a juste besoin de createInterface donc on utilise la décomposation
 * @see https://www.honeybadger.io/blog/javascript-destructuring/
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
*/

import { createInterface } from 'node:readline/promises'

/**
 * utilisation de la fonction avec les bons paramètres ici les interfaces pour la communication avec l'utilisateur
 * ici le terminal
 */ 
const ui = createInterface({ input: process.stdin, output: process.stdout})
/**
* question() est asynchrone donc le programme n'attend le résultat avant d'exécuter
  la ligne suivante autrement la ligne d'après s'exécute immédiatement si l'instruction est synchrone
*/
const response = ui.question('Quel est votre langage préferée ?')
response.then((data) => {
  console.log('La réponse du user est ', data)
  ui.close()
})

/**
 * Attention si on avait écrit ui.close() en dehors de then
 *  le programme ferme l'interface d'entrée immédiatement
 *  juste après avoir posé la question
 *  donc le programme ne donne pas la possibilité à l'utilisateur de faire la saisie
 */
// ui.close()
 