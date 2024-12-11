const Mongo = require('../classes/mongo.js')
const UserModel = require('../models/schemas/user.js')

exports.add = function (req, res) {
  const errorMessage = 'Impossible to create new user for the moment'
  const connectPromise = (new Mongo()).connect()
  // Attention très dangereux d'insérer directement les données sans le controler
  // Si vous mettez un middleware qui intercepte avant la requête et qui laisse passer alors le danger sera écarté arrivée ici
  const saveUserPromise = (new UserModel({...req.body})).save()
  Promise.all([connectPromise, saveUserPromise])
    .then((results) => {
      const user = results[1]
      if(user) {
        res.status(201)
        res.json({ message: "success" })
        return
      }
      throw new Error('Impossible to create new user')
    })
    .catch(error => {
      console.error('error save user', error.message)
      res.status(404).json({ message: errorMessage })
    })
}