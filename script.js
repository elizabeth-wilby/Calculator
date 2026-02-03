const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearBtn = document.getElementById("clear");
const equalsBtn = document.getElementById("equals");
let currentInput = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.getAttribute("data-value");
      currentInput += value;
      display.value = currentInput;
    });
  });

  clearBtn.addEventListener("click", () => {
    currentInput = "";
    display.value = "";
  });
  equalsBtn.addEventListener("click", () => {
    try {
      const result = eval(currentInput);
      display.value = result;
      currentInput = result.toString();
    } catch (error) {
      display.value = "Error";
      currentInput = "";
    }
  });