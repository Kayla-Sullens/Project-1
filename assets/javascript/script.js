//Declaring variables
var input = document.getElementById("character-input");
var searchBtn = document.getElementById("searchBtn");
var trailersBtn = document.getElementById("trailersBtn");
var bioBtn = document.getElementById("bioBtn");
var apiKey = "62950945477f52a6587962327ba60ae0";
var privateKey = "376d22d9276bc21ecc8dea681b71371870cdfab2";
var character = document.querySelector("#character");

//Marvel API
//function to collect data ie timestamp, privatekey and Api to allow character data to be called from Marvel API
function getCharacter(character) {
    var ts = new Date().getTime();
    var hash = md5(ts + privateKey + apiKey);
    console.log(hash);
//fetches results of the Marvel API
    var url = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&name=${character}&apikey=${apiKey}&hash=${hash}`;
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            displayCharacter(data);
        }
        );
}
//displays the fetched results of the Marvel API into the HTML
function displayCharacter(data) {

    var characterData = data.data.results[0];
    character.innerHTML = `
<div class ="results-container">
    <div class ="character-name"> ${characterData.name} </div>
    <div class ="character-image">
        <img src ="${characterData.thumbnail.path}.${characterData.thumbnail.extension}" alt="Marvel Character">
    </div>
    <div class ="character-bio"> ${characterData.description} </div>
</div>`;
}

//Marvel-Heroic API
// function to collect dat for the Heroic API
function getPowers(character) {

    var url = `https://marvel-heroic-api-unlock-the-mcu-legendary-characters.p.rapidapi.com/name?q=${character}`;
    fetch(url, {
        headers: {
            'X-RapidAPI-Key': 'f6ec1e9b0fmsha845a9bc3b0f598p1a34b7jsne08e0558741b',
            'X-RapidAPI-Host': 'marvel-heroic-api-unlock-the-mcu-legendary-characters.p.rapidapi.com'
        }
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            displayPowers(data);

        }
        );
}
//displays the fetched results of the Marvel Heroic API into the HTML
function displayPowers(data) {
    powers.innerHTML = "";
    var characterPowers = data[0].powers;
    var ul = document.createElement("ul");
    ul.classList.add("powers-list");
    for (var i = 0; i < characterPowers.length; i++) {
        var power = characterPowers[i];
        var li = document.createElement("li");
        li.textContent = power;
        ul.append(li);
    }
    powers.append(ul)
}

//Adds the event listener to the search button that will add both Marvel and Marvel Heroic API's
searchBtn.addEventListener("click", function () {
    if (input.value.length < 1) {
        alert("Input value cannot be left blank");
    } else {
        getCharacter(input.value);
        getPowers(input.value);
    }

});