# Exercice 8 : middleware

- [cf. corrections ex7](../ex7/) au niveau de l'application (***app.js***) et des routers pour voir les middlewares.
Ci-dessous, les extraits de code des parties concernées.

```js
const checkID = (req, res, next) => {
  const id = req.params.id
  // test si id est numérique
  if (req.params.id && !/\d+/.test(req.params.id)) {
    res.status(404)
    res.render('error', {
      message: `${id} doit être numérique`
    })
  }
  next()
}
```

```js
const express = require('express')
const router = express.Router()

const { checkID, findOne, findAll } = require('../controllers/news')
// middleware sur tous les paramètres nommées id
router.param('id', checkID)
router.get('/:id', findOne)
router.get('/', findAll)

module.exports = router
```