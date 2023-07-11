var color = document.querySelector(".circle");
var shape = document.querySelector(".shape");
var resetBtn = document.querySelector("#reset");
var btnColor = document.querySelector("#btn-color");
var btnShape = document.querySelector("#btn-shape");

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColor() {
  var randomColor = getRandomColor();
  color.style.backgroundColor = randomColor;
}

function changeShape() {
  var functions = [one, two, three];
  var randomIndex = Math.floor(Math.random() * functions.length);
  var selectedFunction = functions[randomIndex];
  selectedFunction();
}

function setDefault() {
  shape.style.height = "10px";
  shape.style.width = "10px";
}

function one() {
  //   setDefault();
  shape.style.borderRadius = "50%";
}

function two() {
  shape.style.borderRadius = "";
}

function three() {
  //   setDefault();
  shape.style.borderRadius = "1px";
  //   shape.style.border = "2px solid black";
}

function reset() {
  color.style.backgroundColor = "";
  shape.style.borderRadius = "";
}

btnColor.addEventListener("click", changeColor);
btnShape.addEventListener("click", changeShape);
resetBtn.addEventListener("click", reset);
