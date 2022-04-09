function getCitiesCounter() {
    // Check Cities Counter in LocalStorage and update City Index Value
    if(localStorage.getItem('citiesCounter') == null) {
        return 0;       
    }
    else {
        return JSON.parse(localStorage.getItem('citiesCounter'));
    }
}

function getCitiesList() {
    let citiesArr = [];

    let citiesCounter = getCitiesCounter();

    // Get Cities Keys from the LocalStorage
    if(citiesCounter == 0) {
        console.log("Memory slill Empty");
        return false;
    }
    else {
        for(let i = 0;i <= citiesCounter; i++) {
            citiesArr[i] = localStorage.key(i);
        }
    }

    // Remove 'citiesCounter' value from the citiesArr
    let cityCounterIndex = citiesArr.indexOf('citiesCounter');
    citiesArr.splice(cityCounterIndex,1);

    return citiesArr;
}

function saveCityCounter(citiesCounter) {
    localStorage.setItem('citiesCounter',JSON.stringify(citiesCounter));
}

function saveCityData(city) {
    localStorage.setItem(city.cityName,JSON.stringify(city));
}

function deleteCityCounter() {
    localStorage.removeItem('citiesCounter');
}

function deleteCity(city) {
    let citiesCounter = getCitiesCounter();

    if(citiesCounter == 0) {
        deleteCityCounter();    
        return;
    }

    localStorage.removeItem(city.cityName);
    citiesCounter--;
    saveCityCounter(citiesCounter);
}

function getCityData(key) {
    return JSON.parse(localStorage.getItem(key));
}