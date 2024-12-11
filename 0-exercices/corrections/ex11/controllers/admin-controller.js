const UserModel = require('../models/schemas/user')
const DB = require('../classes/mongo')

exports.show = function(req, res) {
  Promise.all([
    (new DB()).connect(),
    UserModel.find()
  ])
  .then(results => {
    res.render('admin/users', 
      { 
        title: 'Liste des utilisateurs',
        users: results[1] 
      }
    );
  })
  .catch(error => {
    res.status(500)
    console.error('Error get admin/users', error.message)
  })
}