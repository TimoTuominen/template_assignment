window.onload = (event) => {
  let painonappi = document.getElementById("painonappi"); // Haetaan elementit HTML documentista

  painonappi.addEventListener("click", () => {
    let name = document.getElementById("name").value; // Haetaan arvot kentistä

    let xmlhttp = new XMLHttpRequest(); // Luodaan ajax olio sekä lisätään tiedot taulukkoon

    xmlhttp.open("POST", "/", true); // Lähetetään ajax tiedot node palvelimelle
    xmlhttp.setRequestHeader(
      "Content-type",
      "application/x-www-form-urlencoded"
    );
    xmlhttp.send("name=" + name);
  });
};
