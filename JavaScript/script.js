function generateAllCitiesCards(citiesArr) {
    let city = new City();

    removeSearchDataList();

    // Display New List of Cities
    for(let i = 0;i < citiesArr.length;i++) {
        city = getCityData(citiesArr[i]);
        generateCityCard(city);
    }

    generateSearchDataList(citiesArr);
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

function sortCitiesAz(citiesArr) {
    let tempArr = [...citiesArr];
    tempArr.sort();

    removeAllCitieasCardsElements();
    generateAllCitiesCards(tempArr);
    showAllCities(tempArr);
}

function sortCitiesZa(citiesArr) {
    let tempArr = [...citiesArr];
    tempArr.sort(function(a, b){return b-a});    

    removeAllCitieasCardsElements();
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

function showSerchedCityCards(serchedCity) {
    let cityCardElement;
    let city = new City();

    city = getCityData(serchedCity);
    generateCityCard(city);

    cityCardElement = document.getElementById(`col-card-${city.cityIndex}`);
    cityCardElement.classList.remove("hide-city-card");
}

function searchCity(citiesArr) {
    let searchCityElement = document.getElementById("search-city");
    let serchedCity = searchCityElement.value;

    if(citiesArr.indexOf(serchedCity) == -1) {
        alert("Sorry City Not Found");
        return;
    }

    removeAllCitieasCardsElements();
    showSerchedCityCards(serchedCity);
}

// Init
generateAllCitiesCards(getCitiesList());
sortCitiesAz(getCitiesList());