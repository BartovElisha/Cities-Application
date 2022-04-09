function generateAllCitiesCards(citiesArr) {
    if(citiesArr == false) {
        return;
    }

    let city = new City();

    removeSearchDataList();

    // Display New List of Cities
    for(let i = 0;i < citiesArr.length;i++) {
        city = getCityData(citiesArr[i]);
        generateCityCard(city,i);
    }

    generateSearchDataList(citiesArr);
}

function showAllCities(citiesArr) {
    if(citiesArr == false) {
        return;
    }

    for(let i = 0;i < citiesArr.length;i++) {
        showCityCard(i);
    }
}

function hideAllCities(citiesArr) {
    if(citiesArr == false) {
        return;
    }

    let cityCardElement;

    for(let i = 0;i < citiesArr.length;i++) {
        let city = getCityData(citiesArr[i]);

        cityCardElement = document.getElementById(`col-card-${i}`);
        cityCardElement.classList.add("hide-city-card");            
    }
}

function sortCitiesAz(citiesArr) {
    if(citiesArr == false) {
        return;
    }

    let tempArr = [...citiesArr];
    tempArr.sort();

    removeAllCitieasCardsElements();
    generateAllCitiesCards(tempArr);
    showAllCities(tempArr);
}

function sortCitiesZa(citiesArr) {
    if(citiesArr == false) {
        return;
    }

    let tempArr = [...citiesArr];
    tempArr.sort(function(a, b){return b-a});    

    removeAllCitieasCardsElements();
    generateAllCitiesCards(tempArr);
    showAllCities(tempArr);
}

// Callback functions for filter
function filterVisitedCities(city) {
    if(city.visitStatus === "Visited") {
       return true; 
    }
    return false;
}

function filterWantToVisitCities(city) {
    if(city.visitStatus === "Want to Visit") {
       return true; 
    }
    return false;
}

function filterDoNotVisitCities(city) {
    if(city.visitStatus === "Do Not Visit") {
       return true; 
    }
    return false;
}

function filterCities(citiesArr,filter) {
    if(citiesArr == false) {
        return;
    }

    let fullCitiesArr = [];
    let filteredArray = [];

    for(let i = 0;i < citiesArr.length;i++) {
        let city = new City();
        city = getCityData(citiesArr[i]);
        fullCitiesArr[i] = city;
    }    

    switch(filter) {
        case 'Visited':
            filteredArray = fullCitiesArr.filter(filterVisitedCities);
            break;
        
        case 'Want to Visit':
            filteredArray = fullCitiesArr.filter(filterWantToVisitCities);
            break;
        
        case 'Do Not Visit':
            filteredArray = fullCitiesArr.filter(filterDoNotVisitCities);
            break;

        default:
            break;
    }
    
    removeAllCitieasCardsElements();
    
    // Generate All filtered Cities
    for(let i = 0;i < filteredArray.length;i++) {
        generateCityCard(filteredArray[i],i)
        showCityCard(i);
    }
}

function deleteAllCities(citiesArr) {
    if(citiesArr == false) {
        alert("No Cities to Remove");
        return;
    }
 
    if(confirm("Are you Shure ?")) {
        let cityToDelete = new City(); 

        removeAllCitieasCardsElements();
        removeSearchDataList();

        for(let i = 0;i <= citiesArr.length;i++) {
            cityToDelete = getCityData(citiesArr[i]);
            deleteCity(cityToDelete);
        }
    }
    else {
        alert("Cities Not Deleted");
        return;
    }
}

function searchCity(citiesArr) {
    if(citiesArr == false) {
        return;
    }

    let searchCityElement = document.getElementById("search-city");
    let serchedCity = searchCityElement.value;

    if(citiesArr.indexOf(serchedCity) == -1) {
        alert("Sorry City Not Found");
        return;
    }

    removeAllCitieasCardsElements();

    let city = getCityData(serchedCity);
    generateCityCard(city,0);

    showCityCard(0);
}

function updateCityColor(cityIndex) {
    let updatedCity = new City();
    let cityName = document.getElementById(`city-${cityIndex}`).textContent;

    updatedCity = getCityData(cityName);

    updatedCity.cityColor = document.getElementById(`city-color-${cityIndex}`).value;

    saveCityData(updatedCity);
    alert(`City Color of ${cityName} was Updated`);
}

// Init
generateAllCitiesCards(getCitiesList());
sortCitiesAz(getCitiesList());