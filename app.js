console.log("Im linked to html, says app.js!");


const buttonClicked = document.getElementById('getNewCatFact');

buttonClicked.addEventListener('click', function (event) {
//Här skriver vi vad som ska hända när vi klickar på knappen.
    //Vi anropar funktionen för att hämta kattfakta
    getRandomCatFacts();
    //Vi anropar funktionen för att hämta hundfakta
    getRandomDogFacts();
    //Här kallar vi på funktionen som räknar vår knapptryckningar
    increment();
    //Här kallar vi på funktionen getKanyneQuotes
    getKanyeQuotes();
    //Här kallar vi på vår knappanimering
    buttonAnimation();

});



//New cat fact function
function getRandomCatFacts() {

    fetch("https://catfact.ninja/fact")
        .then(function (response) {
            return response.json();
        })
        .then((response) => {
            let cat = response;
            console.log(cat);
            document.querySelector('.catFact').innerHTML = "😸 + 🐭 = 🍲 " + cat.fact + " 😸 + 🐭 = 🍲";
        })
        .catch(function (err) {
            console.log('Error: ' + err);
            document.querySelector(".catFact").innerHTML =
                "😿 " + "Sorry, vi kan inte hämta data just nu. Försök senare!" + " 😿";
     
        });
}//End function getRandomCatFacts();

//New dog fact function
function getRandomDogFacts() {

    fetch("https://dogapi.dog/api/v2/facts")
        .then(function (response) {
            return response.json();
        })
        .then((response) => {
            let dog = response;
            console.log(dog);
            document.querySelector('.dogFact').innerHTML = "🐺 + 🦴 = 💩 " + dog.data[0].attributes.body + " 🐺 + 🦴 = 💩";
        })
        .catch(function (err) {
            console.log('Error: ' + err);
            document.querySelector(".dogFact").innerHTML =
                "🐺 " + "Sorry, vi kan inte hämta data just nu. Försök senare!" + " 🐺";
     
        });
}//End function getRandomDogFacts();

/**
 * Håller reda på antaler knapptryckningar
 */
let count = 2;
function increment() {
    document.querySelector(".counting").innerHTML =
        "You have read " + count + " dog and cat facts today!<br />" + "And also " + count/2 + " silly Kanye qoutes.";
    count += 2;
}//End increment();

/**
 * Här är funktionen getKanyneQuotes
 */
function getKanyeQuotes() {
    fetch("https://api.kanye.rest")
        .then(function (response) {
            return response.json();
        })
        .then((response) => {
            let dataK = response;
            console.log(dataK);
            document.querySelector(".kayneQoutes").innerHTML =
                'Kanye says: "' + dataK.quote + '" 🙄';
        })
        .catch(function (err) {
            console.log("Error: " + err);
            document.querySelector(".kayneQoutes").innerHTML =
                '😵 Kayne is out! Try later... 😵';
        });
}

/**
 * Här är funktionen för knappanimation
 * Vi återanvänder vår buttonAnimation-function fråm projektet DrumKit
 * Kräver css-klassen
 *   .pressed {
    box-shadow: 0 3px 4px 0 #dbedf3;
    opacity: 0.5;
  }
 * DRY = Don´t Repeat Yourself
 */
function buttonAnimation() {
    let activeButton = document.querySelector("#getNewCatFact");
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}