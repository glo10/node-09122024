import { get  } from 'node:https'
import { createWriteStream } from 'node:fs'
/**
 * 1. Créer un client HTTP pour récupérer des données distants depuis un serveur
 * 2. Ecrire dans un fichier en local ses données
 *  sous forme de flux de données 
 * (paquet ou bout d'information récupéré et écrit progressivement)
 * On va utiliser les fonctions stream (avec le suffixe Stream) depuis fs
 * 3. Observer les événements
 *  - lecture de la donnée reçu (ici c'est l'événement data)
 *  - une erreur (événement error)
 *  - Fin de la lecture et écriture (événement end)
 */

const URL = 'https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/refs/heads/master/json/cities.json'
get(URL, (res) => {
  // res est un flux de lecture
  if(res.statusCode === 200) {
    // myWriteStream flux d'écriture
    // Bannir le chemin relatif, bonne pratique construire un chemin absolue cf. demo du dossier /url-path
    const myWriteStream = createWriteStream('./cities.json')
    // pipe permet de synchroniser un flux ecriture/lecture avec un flux lecture/ecriture
    res.pipe(myWriteStream)
    // A la réception des données (paquet)
    res.on('data', (chunk) => {
      console.log('donnée en cours', chunk.toString())
    })
    // En cas d'erreur survenue durant le traitement
    res.on('error', (error) => {
      console.error('erreur', error.message)
    })
    // A la fin
    res.on('end', () => {
      console.info('Fin des opérations')
    })

  } else {
    console.error ('Erreur côté serveur distant')
  } 
})