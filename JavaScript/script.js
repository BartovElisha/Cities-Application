const citiesContainerElement = document.getElementById("cities-container");

function generateAllCitiesCards(citiesArr) {
    let city = new City();

    // Display New List of Cities
    for(let i = 0;i < citiesArr.length;i++) {
        city = getCityData(citiesArr[i]);
        generateCityCard(city);
    }
}

function showAllCities(citiesArr) {
    let cityCardElement;

    for(let i = 0;i < citiesArr.length;i++) {
        let city = getCityData(citiesArr[i]);

        cityCardElement = document.getElementById(`col-card-${city.cityIndex}`);
        cityCardElement.classList.remove("hide-city-card");            
    }
}

function hideAllCities(citiesArr) {
    let cityCardElement;

    for(let i = 0;i < citiesArr.length;i++) {
        let city = getCityData(citiesArr[i]);

        cityCardElement = document.getElementById(`col-card-${city.cityIndex}`);
        cityCardElement.classList.add("hide-city-card");            
    }
}

function removeAllCitieasCardsElements(citiesArr) {
    for(let i = 0;i < citiesArr.length;i++) {
        let city = getCityData(citiesArr[i]);
        cityCardElement = document.getElementById(`col-card-${city.cityIndex}`);
        cityCardElement.remove();           
    }
}

function sortCitiesAz(citiesArr) {
    debugger;
    let tempArr = [...citiesArr];
    tempArr.sort();

    removeAllCitieasCardsElements(citiesArr);
    generateAllCitiesCards(tempArr);
    showAllCities(tempArr);
}

function sortCitiesZa(citiesArr) {
    debugger;
    let tempArr = [...citiesArr];
    tempArr.sort(function(a, b){return b-a});    

    removeAllCitieasCardsElements(citiesArr);
    generateAllCitiesCards(tempArr);
    showAllCities(tempArr);
}

function showVisitedCities() {

}

function showNotVisitedCities() {

}

function showCitiesToVisit() {

}

function showCitiesToNotVisit() {

}

function removeAllCities() {
    if(confirm("Are you Shure ?")) {
        alert("Yes");
    }
    else {
        alert("Not");
    }
}

function searchCity() {
    // TBD
}

// Init
generateAllCitiesCards(getCitiesList());