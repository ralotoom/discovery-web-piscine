let count = 0;
const counterDisplay = document.getElementById("counter-value");
const btnIncrement = document.getElementById("btn-increment");
const btnDecrement = document.getElementById("btn-decrement");
const btnReset = document.getElementById("btn-reset");
function updateDisplay() {
    counterDisplay.textContent = count;
    if (count > 0) {
        counterDisplay.style.color = "green";
    } else if (count < 0) {
        counterDisplay.style.color = "red";
    } else {
        counterDisplay.style.color = "black";
    }
}
btnIncrement.addEventListener("click", function() {
    count++;
    updateDisplay();
});
btnDecrement.addEventListener("click", function() {
    count--;
    updateDisplay();
});
btnReset.addEventListener("click", function() {
    count = 0;
    updateDisplay();
});
