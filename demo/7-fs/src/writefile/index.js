import { writeFile } from "node:fs";

const users = [
  {
    name: "Glodie",
  },
  {
    name: "Marie",
  },
  { name: "sarah" },
];
// JSON.stringify() permet de sérialiser (transformer un objet en string)
// A bannir chémin en relatif (l'emplacement du fichier dépend du lieu d'exécution de votre programme Node)
writeFile("./users.json", JSON.stringify(users), function (err) {
  if (!err) console.log("écriture OK");
  else console.log("écriture KO");
});
