# Modules

## Préambule

module = package = libraire = paquet

## Plusieurs standards avec JS

1. CommonJS
- Import des modules : *require()*
- Export des modules : *module.exports = { name : 'Glodie'}*
- En plus de l'extension standard .js, on peut écrire les fichiers avec l'extension .cjs (c pour CommonJS)
2. ECMASCRIPT
- Import des modules : *import*
- Export des modules : *export const glodie = { name : 'Glodie'}*
- En plus de l'extension standard .js, on peut écrire les fichiers avec l'extension .mjs (m pour ECMASCRIPT)


## 3 façons d'utiliser les fonctions de NODE

1. "standard" : importer les fonctions à partir de leur nom
- Des fonctions de callback = des fonctions de retour qui seront exécuter lorsque l'événement aura lieu
- Rajouter le prefixe *node:*, on obligatoire mais recommandé pour la lisible
- Le prefixe *node:* permet de distinguer les modules internes propre à Node des modules externes installés par le développeur

```js
import { createInterface } from 'node:readline'
```

```js
import { createInterface } from 'readline'
```
2. Sous forme de promesse : importer les fonctions avec le suffixe */promises* 
- Les fonctions seront des promesses donc les résultats accessibles à partir des fonctions *.then()* en cas succès et *.catch()* en cas d'échec

```js
import { createInterface } from 'node:readline/promises'
```

```js
import { createInterface } from 'readline/promises'
```
3. Déconseillé mais accessible : importer avec le la fonction avec le suffixe *Sync*
- Ne pas disponibles pour toutes les fonctions = uniquement certaines fonctions peuvent s'importer de manière synchrone
- *SYNC* = utilisation de la fonction de manière synchrone

```js
import { copyFileSync } from 'node:fs'
```

## Décomposition

- Importer uniquement les fonctions qu'on va utiliser (plus optimisé, évite d'importer la libraire dans son intégralité)

Module intégral *demo.js*

```js
function a () {}
function b () {}
function c () {}
```
Utilisation uniquement de la fonction *a()* dans notre programme

```js
import { a } from 'demo.js' 
```