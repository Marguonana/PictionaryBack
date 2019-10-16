const mongoose = require("mongoose");
const express = require("express");
const { createServer } = require("http");
const app = express();
const port = 3000;

mongoose
  .connect(
    "mongodb+srv://alex:alex@cluster0-gqsnd.mongodb.net/test?retryWrites=true&w=majority",
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

const server = createServer(app);
server.listen(port, () => console.log("serveur up port 3000"));
