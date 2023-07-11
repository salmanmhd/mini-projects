var sw = document.querySelector(".switch");
var text = document.querySelector(".text");
var toggle = document.querySelector(".toggle");
var body = document.querySelector("body");

function changeColor() {
  var currentColor = body.style.backgroundColor;
  if (currentColor === "white") {
    body.style.backgroundColor = "black";
    sw.style.backgroundColor = "white";
    toggle.style.justifyContent = "flex-end";
    text.style.setProperty("color", "white", "important");
    toggle.style.border = "2px solid white";
  } else {
    body.style.backgroundColor = "white";
    sw.style.backgroundColor = "black";
    toggle.style.justifyContent = "flex-start";
    text.style.setProperty("color", "black", "important");
    toggle.style.border = "2px solid black";
  }
}

toggle.addEventListener("click", changeColor);
