let mainTitle = document.getElementById("mainTitle");
mainTitle.innerHTML = "Welcome to the DOM laboratory";

let section1 = document.getElementById("section1");
section1.style.background = "yellow";

let cards = document.getElementsByClassName("card");
for (let card of cards) {
  card.style.background = "cyan";
}

let section3 = document.getElementById("section3");
let items = section3.getElementsByTagName("li");
for (let item of items) {
  item.style.color = "red";
}

pragraph = document.querySelector("#section1").querySelector("p");
pragraph.style.fontweight = "bold";

let myList = document.querySelector("#myList").querySelectorAll("li");
for (let li of myList) {
  li.style.border = "5px solid black;";
}

let divs = document.getElementsByTagName("div");
for (let div of divs) {
  div.classList.add("highlight");
}

let output = Document.getElementById("output").getElementsByTagName("h2");
output.innerHTML = "DOM Output area";

//section B:Changing attributes
document.getElementById("p1").textContent =
  "This text was updated using textContent()";

document.getElementById("myLink").innerHTML =
  '<a href="#">New dynamic Link</a>';

href = document.getElementById("myLink").getAttribute("href");
console.log(href);
document.getElementById("myList").setAttribute("href", "https://example.com");

section1.style.background = "green";
section3.style.color = "blue";
section1.classList.add("highlight");
section1.classList.remove("highlight");

//section C:creating and inserting elements
p = document.createElement("p");
p.textContent = "New paragraph created!";
document.getElementById("output").appendChild(p);

const li = document.createElement("li");
li.textContent = "item D";
document.getElementById("myList").appendChild(li);

card = document.createElement("div");
card.classList.add("card");
card.textContent = "Dynamically added Box";
document.body.appendChild;

const listBefore = document.insertBefore("li");
listBefore.innerHTML = "itemX";
