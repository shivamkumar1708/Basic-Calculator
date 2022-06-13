let screen = document.getElementById("screen");
let str = "";
buttons = document.querySelectorAll("button");

for (b of buttons) {
  b.addEventListener("click", (e) => {
    let buttonText = e.target.innerText;
    console.log(buttonText);
    if (buttonText == "x") {
      buttonText = "*";
      str += buttonText;
      screen.value = str;
    } else if (buttonText == "=") {
      screen.value = eval(str);
      str = screen.value;
    } else if (buttonText == "AC") {
      screen.value = "";
      str = "";
    } else {
      str += buttonText;
      screen.value = str;
    }
  });
}
