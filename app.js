const mongoose = require("mongoose");
const express = require("express");
const { createServer } = require("http");
const app = express();
const port = 3000;

const themeSchema = require ('ThemeSchema');
const Theme = mongoose.model('theme', themeSchema, 'theme');

mongoose
  .connect(
    "mongodb+srv://alex:alex@cluster0-gqsnd.mongodb.net/pictionary?retryWrites=true",
    {
      useNewUrlParser: true
    }
  )
  .then(() => console.log("connecté"))
  .catch(err =>
    console.log(
      err
    )
  );

  async function findTheme(libelle) {
    return await Theme.findOne({ libelle })
  }

  ;(async () => {
    const connector = mongoose.connect(connectionString)
    const libelle = process.argv[2].split('=')[1]
  
    let theme = await connector.then(async () => {
      return findTheme(libelle)
    })
  
    if (!theme) {
      console.log("foén");
    }
  
    console.log(user)
    process.exit(0)
  })()

const server = createServer(app);
server.listen(port, () => console.log("serveur up port 3000"));
