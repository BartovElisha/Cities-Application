const citiesContainerElement = document.getElementById("cities-container");

// Global Variable citiesCouter, stored in localStorage
let citiesCounter = getCitiesCounter();
let citiesMap = new Map();

function initCitiesMap() {
    let citiesArr = [];

    // Get Cities Keys from the LocalStorage
    if(citiesCounter == 0) {
        console.log("Memory slill Empty");
        return;
    }
    else {
        for(let i = 1;i <= citiesCounter; i++) {
            citiesArr[i-1] = localStorage.key(i);
        }
    }

    // Init citiesMap
    for(let i = 0;i < citiesArr.length;i++) {
        citiesMap.set(citiesArr[i],JSON.parse(localStorage.getItem(citiesArr[i])));
    }
}

function getCitiesCounter() {
    // Check Cities Counter in LocalStorage and update City Index Value
    if(localStorage.getItem('citiesCounter') == null) {
        return 0;       
    }
    else {
        return JSON.parse(localStorage.getItem('citiesCounter'));
    }
}

function generateNewCity() {
    let newCity = new City();

    // Update City Index Value
    newCity.cityIndex = citiesCounter;    
    citiesCounter++;
    localStorage.setItem('citiesCounter',JSON.stringify(citiesCounter));

    // Get new City Data from input
    newCity.cityImage = "https://media.istockphoto.com/photos/seascape-near-the-marina-in-israel-ashdod-picture-id471772741?s=612x612";
    newCity.cityName = document.getElementById('city-name').value;
    newCity.cityCountry = document.getElementById('city-country').value;
    newCity.cityLanguage = document.getElementById('city-language').value;
    newCity.cityPopulation = document.getElementById('city-population').value;
    newCity.cityColor = document.getElementById('city-color').value;
    newCity.visitStatus = document.querySelector('input[name = visitStatus]:checked').value;

    // Save New City to Local Storage
    localStorage.setItem(newCity.cityName,JSON.stringify(newCity));
}

function displayCityCard(cityIndex) {
    citiesContainerElement.innerHTML += 
                `<div id="col-card-${index}" class="col" onclick="removeRichCard('col-card-${index}')">`+
                    `<div class="card rich-person-card" style="width: 15rem;">`+
                        `<img src="${json_ar[index].image}" class="card-img-top img-thumbnail" alt="${json_ar[index].name}">`+
                        `<div class="card-body">`+
                            `<div class="row">`+
                                `<div class="col">`+
                                    `<h6 class="card-title">Name:</h6>`+
                                `</div>`+
                                `<div class="col">`+
                                    `<span>${json_ar[index].name}</span>`+
                                `</div>`+
                            `</div>`+
                            `<div class="row">`+
                                `<div class="col">`+
                                    `<h6 class="card-title">Worth:</h6>`+
                                `</div>`+
                                `<div class="col">`+
                                    `<span>${json_ar[index].worth}</span>`+
                                `</div>`+
                            `</div>`+
                            `<div class="row">`+
                                `<div class="col">`+
                                    `<h6 class="card-title">Birth Year:</h6>`+
                                `</div>`+
                                `<div class="col">`+
                                    `<span>${json_ar[index].birth_year}</span>`+
                                `</div>`+
                            `</div>`+
                            `<div class="row">`+
                                `<div class="col">`+
                                    `<h6 class="card-title">Source:</h6>`+
                                `</div>`+
                                `<div class="col">`+
                                    `<span>${json_ar[index].source}</span>`+
                                `</div>`+
                            `</div>`+
                            `<div class="row">`+
                                `<div class="col">`+
                                    `<h6 class="card-title">Country:</h6>`+
                                `</div>`+
                                `<div class="col">`+
                                    `<span>${json_ar[index].country}</span>`+
                                `</div>`+
                            `</div>`+
                        `</div>`+
                    `</div>`+
                `</div>`;
}

function showAllCities() {
    debugger;
    let citiesArr = [];

    // Fill Cities Array from citiesMap
    let i = 0;
    for(let [key,value] of citiesMap) {
        console.log(key);
        citiesArr[i] = value.cityName;
        i++;
    }
    // Clear Previous List of Cities
    //clearAllCards();

    // Display New List of Cities
    cont from Here
    for(let [key,value] of citiesMap) {
        console.log(key);
        console.log('City Index: ' + value.cityIndex);
        console.log('City Image: ' + value.cityImage);
        console.log('City Name: ' + value.cityName);
        console.log('City Country: ' + value.cityCountry);
        console.log('City Language: ' + value.cityLanguage);
        console.log('City Color: ' + value.cityColor);
        console.log('City Visit Status: ' + value.visitStatus);
        console.log('City Population: ' + value.cityPopulationValue);
        
        displayCityCard(key,value);
    }
}

function showAllCitiesRandomaly() {

}

function sortCitiesAz() {

}

function showVisitedCities() {

}

function showNotVisitedCities() {

}

function showCitiesToVisit() {

}

function showCitiesToNotVisit() {

}

function clearAllCities() {

}

function togleDisplayDarkLightMode() {
    let bodyElement = document.body;
    let headerElement = document.getElementById('header-dark-mode');
    let DarkSvgiconElement = document.getElementById('icon-dark-mode');
    let inputSectionElement = document.getElementById('input-section-dark-mode');  
    
    // Body Element update Dark/Light mode
    bodyElement.classList.toggle("bg-dark");

    // Header Element update Dark/Light mode
    headerElement.classList.toggle("bg-dark");
    headerElement.classList.toggle("text-white");
    
    // Display mode icon Element update Dark/Light mode
    DarkSvgiconElement.classList.toggle("icon-dark");

    // Input Section Element update Dark/Light mode
    inputSectionElement.classList.toggle("text-white");
}

// Init Page
initCitiesMap();
showAllCities();
