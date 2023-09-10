// Get the display element
const display = document.getElementById("display");

// Get all the buttons
const buttons = document.querySelectorAll("input[type='button']");

// Add click event listeners to the buttons
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.value;

    if (value === "=") {
      display.value = eval(display.value);
    } else if (value === "AC") {
      display.value = "";
    } else if (value === "DE") {
      display.value = display.value.slice(0, -1);
    } else {
      display.value += value;
    }
  });
});