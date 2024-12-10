var express = require("express");
var router = express.Router();

// On imagine ce sont des données fournies par la BDD
const usersFromModel = [
  { name: "Glodie", id: 1 },
  { name: "Marie", id: 2 },
  { name: "Gladys", id: 3 },
  { name: "Marc", id: 4 },
];
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("Tous les utilisateurs");
});

// exemple route qui match /users/3
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = usersFromModel.find((u) => u.id === id);
  const data = user??{ message: 'not found'}
  res.status(user?200:404).json(data);
});

// exemple de route qui match /users/10/glodie/33
router.get("/:id/:name/:age", (req, res) => {
  // Attention, il faut toujours vérifier les données envoyées par les utilisateurs
  const id = req.params.id;
  const name = req.params.name;
  const age = req.params.age;
  res.json({
    name,
    id,
    age,
  });
});
module.exports = router;
