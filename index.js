const express = require("express");
const app = express();
const fetch = require("node-fetch");

app.set("view engine", "ejs");
const bodyParser = require("body-parser");
//const { json } = require("express/lib/response");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  async function Haetiedot() {
    let response = await fetch(
      `https://www.omdbapi.com/?apikey=bf626253&t=matrix`
    );
    let data = await response.json();
    console.log(data);
    res.render("index", data);
  }
  Haetiedot();
});

app.post("/", (req, res) => {
  async function githubUsers() {
    let response = await fetch(
      `https://www.omdbapi.com/?apikey=bf626253&t=matrix`
    );
    let data = await response.json();
    console.log(data);
    res.render("index", data);
  }
  githubUsers();
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("server is running!");
});
