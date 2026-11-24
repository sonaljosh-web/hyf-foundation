const hogwartsHouse = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
const houseColors = {
  Gryffindor: "#740001",
  Hufflepuff: "#FFD800",
  Ravenclaw: "#0E1A40",
  Slytherin: "#1A472A",
};

const input = document.getElementById("the-input");
const div = document.getElementById("the-div");
const h_button = document.getElementById("h-house");

h_button.addEventListener("click", (event) => {
  let personName = "";
  const newHouse =
    hogwartsHouse[Math.floor(Math.random() * hogwartsHouse.length)];
  personName = input.value.trim();
  if (personName == "") {
    personName = "No one";
  }
  div.textContent = personName + " belongs in House " + newHouse;
  //div.style.backgroundColor = houseColors[newHouse];
  console.log(houseColors[newHouse]);
  div.style.backgroundColor = houseColors[newHouse];
  div.style.color = "white";
});
