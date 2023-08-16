var input = document.getElementById("character-input");
var searchBtn = document.getElementById("searchBtn");
var trailersBtn = document.getElementById("trailersBtn");
var bioBtn = document.getElementById("bioBtn");
var apiKey = "62950945477f52a6587962327ba60ae0";
var privateKey = "376d22d9276bc21ecc8dea681b71371870cdfab2";
var character = document.querySelector("#character");


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
            displayCharacter(data);
        }
        );
}

function displayCharacter(data) {

    var characterData = data.data.results[0];
    character.innerHTML = `
<div class ="results-container">
    <div class ="character-name"> ${characterData.name} </div>
    <div class ="character-image">
        <img src ="${characterData.thumbnail.path}.${characterData.thumbnail.extension}">
    </div>
    <div class ="character-bio"> ${characterData.description} </div>
</div>`;
}

function getPowers(powers) {

    var url = `https://marvel-heroic-api-unlock-the-mcu-legendary-characters.p.rapidapi.com/name?`;
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            displayPowers(data);
        }
        );
}

function displayPowers(powers) {

    var characterPowers = powers[0];
    console.log(powers);
    powers.innerHTML = `
<div class ="results-container">
    <div class ="powers"> ${characterPowers} </div>
</div>`;
}

// const url = 'https://marvel-heroic-api-unlock-the-mcu-legendary-characters.p.rapidapi.com/name?q=Iron';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'ed72ac1853mshb4ac53e793c6448p1df269jsn33bde7147831',
// 		'X-RapidAPI-Host': 'marvel-heroic-api-unlock-the-mcu-legendary-characters.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

searchBtn.addEventListener("click", function () {
    if (input.value.length < 1) {
        alert("Input value cannot be left blank");
    } else {
        getCharacter(input.value);
        getCharacter.innerHTML = "";

    }

});