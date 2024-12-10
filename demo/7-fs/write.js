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
writeFile("./users.json", JSON.stringify(users), function (err) {
  if (!err) console.log("écriture OK");
  else console.log("écriture KO");
});
