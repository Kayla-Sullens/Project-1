var input = document.getElementById("input-box");
var button = document.getElementById("submit-button");
var displayContainer = document.getElementById("display-container");
var resultsContainer = document.querySelector(".list");
var apiKey = "62950945477f52a6587962327ba60ae0"

button.addEventListener("click", function() {
    if (input.value.length < 1) {
        alert("Input value cannot be left blank");
    }
    displayContainer.innerHTML = "";
        var url = 
})