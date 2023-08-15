var input = document.getElementById("character-input");
var searchBtn = document.getElementById("searchBtn");
var trailersBtn = document.getElementById("trailersBtn");
var bioBtn = document.getElementById("bioBtn");
var apiKey = "62950945477f52a6587962327ba60ae0";
var privateKey = "376d22d9276bc21ecc8dea681b71371870cdfab2";
var character = document.getElementsByClassName("character");


function getCharacter(character) {
    var ts = new Date().getTime();
    var hash = md5(ts + privateKey + apiKey);
    console.log(hash);

    var url = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&name=${character}&apikey=${apiKey}&hash=${hash}`;
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            displayCharacter(data);}
            );
}

function displayCharacter(element) { 

    character.textContent= `
<div class ="results-container">
    <div class ="character-name"> ${element.name} </div>
    <div class ="character-image">
        <img src ="${element.thumbnail}">
    </div>
    <div class ="character-bio"> ${element.description} </div>
</div>`;
}

searchBtn.addEventListener("click", function () {
    if (input.value.length < 1) {
        alert("Input value cannot be left blank");
    } else {
        getCharacter(input.value);
        getCharacter.innerHTML = "";

    }

});