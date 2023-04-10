//variable from Element HTML
let body = document.body;
let container = document.querySelector(".container");

//Get Element by ID HTML
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

//Style For Button 1
let defaultText = "Button";
btn1.textContent = defaultText;
btn1.style.backgroundColor = "mediumslateblue";
btn1.style.fontSize = "24px";

//Style For Button 2
btn2.textContent = defaultText;
btn2.style.backgroundColor = "gold";
btn2.style.fontSize = "24px";

//function create element HTML
let text = document.createElement("h1");
text.textContent = "Checking...";

//Button Press
function onClick() {
  container.append(text);
}

//Mouse hover the Button
function hover() {
  btn1.style.backgroundColor = "hotpink";
}

//Mouse hover out of Button
function outHover() {
  btn1.style.backgroundColor = "mediumslateblue";
}

//Button 2 Function
function changeColor() {
  text.style.color = "gold";
}
