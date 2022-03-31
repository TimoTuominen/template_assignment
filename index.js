const express = require("express");
const app = express();
const request = require("request");
const fetch = require("node-fetch");

app.set("view engine", "ejs");
const bodyParser = require("body-parser");
const { json } = require("express/lib/response");

app.use(bodyParser.urlencoded({ extended: true }));

/*let data1 = request(
  `https://www.omdbapi.com/?apikey=bf626253&t=matrix`,
  function (err, res, body) {
    if (err) {
      return console.log(err);
    }
    //let data = body.json;
    //return data;
    //console.log(data);
  }
);*/

/*let data;
fetch(`https://www.omdbapi.com/?apikey=bf626253&t=matrix`)
  .then((response) => response.json())
  .then((json) => {
    //console.log(json.Title);
    //let data = json;
    //console.log(data);
    //console.log(json);
    data = json;
  }); */

app.get("/", (req, res) => {
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
