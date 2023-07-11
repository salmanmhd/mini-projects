var box = document.querySelector(".box");
var text = document.querySelector(".text");
var c = 0;
function count() {
  c++;
  text.textContent = "Box clicked " + c + " times";
}

box.addEventListener("click", count);
