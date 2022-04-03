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
    // Get Cities Keys from the LocalStorage
    if(citiesCounter == 0) {
        console.log("Memory slill Empty");
        return;
    }
    else {
        for(let i = 0;i <= citiesCounter; i++) {
            citiesArr[i] = localStorage.key(i);
        }
    }

    citiesArr.pop('citiesCounter');

    return citiesArr;
}

function saveCityCounter(citiesCounter) {
    localStorage.setItem('citiesCounter',JSON.stringify(citiesCounter));
}

function saveCity(city) {
    localStorage.setItem(city.cityName,JSON.stringify(city));
}

function loadCity() {

}