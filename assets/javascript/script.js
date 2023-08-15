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
    var response = fetch(url);
    var jsonData = response.json();
    jsonData.data["results"].forEach(element)() 
        character.innerHTML = `
        <div class ="results-container">
            <div class ="character-name"> ${element.name} </div>
            <div class ="character-image">
                <img src ="${element.thumbnail["path"] + "." + element.thumbnail["extension"]}">
            </div>
            <div class ="character-bio"> ${element.description} </div>
        </div>`;
}

//var date = new Date();
//console.log(date.getTime());

//const [timeStamp, apiKey, hashVal] = [ts, apiKey, hashVal];

searchBtn.addEventListener("click", function () {
    if (input.value.length < 1) {
        alert("Input value cannot be left blank");
     } else  {
         getCharacter(input.value);
         getCharacter.innerHTML = "";
   
     }

});







