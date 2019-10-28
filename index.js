// Write your code here!
const main = document.getElementById("main");
main.remove();
const newHeader = document.createElement("h1");
newHeader.innerHTML = "Steven is the champion";
newHeader.setAttribute("id", "victory");
document.body.appendChild(newHeader);