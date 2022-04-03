const citiesContainerElement = document.getElementById("cities-container");

// Global Variable citiesCouter, stored in localStorage
let citiesListArr = getCitiesList(); 

function showAllCities() {
    // Clear Previous List of Cities
    //clearAllCards();

    let citiesArr = getCitiesList();
    if(!citiesArr) {
        alert("Cities List Still Empty !!!");
        return; 
    }
    let city = new City();

    // Display New List of Cities
    for(let i = 0;i < citiesArr.length;i++) {
        city = getCityData(citiesArr[i]);

        console.log('City Index: ' + city.cityIndex);
        console.log('City Image: ' + city.cityImage);
        console.log('City Name: ' + city.cityName);
        console.log('City Country: ' + city.cityCountry);
        console.log('City Language: ' + city.cityLanguage);
        console.log('City Color: ' + city.cityColor);
        console.log('City Visit Status: ' + city.visitStatus);
        console.log('City Population: ' + city.cityPopulationValue);
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

// Init Page
showAllCities();
