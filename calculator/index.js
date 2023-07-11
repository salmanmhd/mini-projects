var string = "";
var buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = evaluateExpression(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "%") {
      string = calculatePercentage(string);
      document.querySelector("input").value = string;
    } else {
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});

function calculatePercentage(value) {
  try {
    string = eval(value);
    return string * 100;
  } catch (error) {
    return "Invalid Value";
  }
}

function evaluateExpression(expression) {
  try {
    return eval(expression);
  } catch (error) {
    return "Invalid!";
  }
}

var del = document.querySelector(".del");
del.addEventListener("click", Delete);
function Delete(e) {
  var parentButton = e.target.parentElement;
  string = string.slice(0, -1);
  document.querySelector("input").value = string;
}
