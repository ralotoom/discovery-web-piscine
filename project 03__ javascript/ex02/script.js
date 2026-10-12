
let title = document.getElementById("main-title");
let paragraph = document.querySelector(".description");
let button = document.querySelector("#btn-change");
button.addEventListener("click", function() {
    title.textContent = "welcome to My page";
    paragraph.textContent = "The content was updated successfully.";
    title.style.color = "#3498db";
    paragraph.classList.add("active");
});
