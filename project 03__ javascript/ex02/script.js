const title = document.getElementById("main-title");
const paragraph = document.querySelector(".description");
const button = document.querySelector("#btn-change");
title.textContent = "welcom to My page";
paragraph.textContent = "The content was updated successfully.";
title.style.color = "#3498db";
paragraph.classList.add("active");
