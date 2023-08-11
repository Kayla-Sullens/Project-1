var input = document.getElementById("character-input");
var searchBtn = document.getElementById("searchBtn");
var trailersBtn = document.getElementById("trailersBtn");
var bioBtn = document.getElementById("bioBtn");
var apiKey = "62950945477f52a6587962327ba60ae0";
var privateKey = "376d22d9276bc21ecc8dea681b71371870cdfab2"



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
            console.log(data);
        })
}

//var date = new Date();
//console.log(date.getTime());

//const [timeStamp, apiKey, hashVal] = [ts, apiKey, hashVal];

searchBtn.addEventListener("click", function () {
    if (input.value.length < 1) {
        alert("Input value cannot be left blank");
    } else  {
        getCharacter(input.value);
    }

});





