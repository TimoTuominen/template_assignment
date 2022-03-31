const express = require("express");
const app = express();
const fetch = require("node-fetch");
app.use("/static", express.static("static")); //polku staattisille tiedostoille.

app.set("view engine", "ejs"); // Otetaan EJS käyttöön
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true })); // Bodyparser POST tietojen käsittelyyn

app.get("/", (req, res) => {
  // Oletussivun lataus, joka myös lataa matrix leffan tiedot suoraan taulukkoon.
  async function Haetiedot() {
    let response = await fetch(
      `https://www.omdbapi.com/?apikey=bf626253&t=matrix`
    );
    let data = await response.json();
    //console.log(data);
    res.render("index", data); // Näytetään sivu EJS:ää käyttäen
  }
  Haetiedot();
});

app.post("/", (req, res) => {
  // Formilla postattujen pyyntöjen haku OMDB:stä
  let nimi = req.body.name;
  async function Haetiedot2() {
    let response = await fetch(
      `https://www.omdbapi.com/?apikey=bf626253&t=${nimi}`
    );

    let data = await response.json();
    console.log(data);
    if (data.Response == "True") {
      // Tarkastetaan löytyikö elokuva
      res.render("index", data);
    } else {
      res.render("vaarahaku");
    }
  }
  Haetiedot2();
});

// Lopuksi käsitellään muut pyynnöt
app.get("*", (req, res) => {
  res.send("Nothing to see here...");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("server is running!");
});
