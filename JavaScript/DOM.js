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

function generateNewCity() {
    let newCity = new City();

    // Get citiesCounter from localStorage
    let citiesCounter = getCitiesCounter();

    // Get new City Data from input
    // Check if requered City name is valid
    newCity.cityName = document.getElementById('city-name').value;
    if(newCity.cityName == "") {
        return;
    }

    // Check if New City is not exist, increase and save citiesCounter
    if(getCityData(newCity.cityName) == null) {
        citiesCounter++;
        saveCityCounter(citiesCounter);
    }
        
    newCity.cityImage = "...";
    newCity.cityCountry = document.getElementById('city-country').value;
    newCity.cityLanguage = document.getElementById('city-language').value;
    newCity.cityPopulation = document.getElementById('city-population').value;
    newCity.cityColor = document.getElementById('city-color').value;
    newCity.visitStatus = document.querySelector('input[name = visitStatus]:checked').value;

    // Save New City to Local Storage
    saveCityData(newCity);
}

function generateCityCard(city,cityIndex) {
    let citiesContainerElement = document.getElementById("cities-container");

    let template =
                `<div id="col-card-${cityIndex}" class="col my-2 hide-city-card">`+
                    `<div class="card city-card shadow-lg" style="width: 18rem;">`+
                        `<img src="./Images/lotte-world-tower-1791802_640.jpg" class="card-img-top img-thumbnail" alt="...">`+
                        `<div class="card-body">`+
                            `<div class="row">`+
                                `<div class="col">`+
                                    `<h6 class="card-title">City:</h6>`+
                                `</div>`+
                                `<div class="col">`+
                                    `<span id="city-${cityIndex}">${city.cityName}</span>`+
                                `</div>`+
                            `</div>`+
                            `<div class="row">`+
                                `<div class="col">`+
                                    `<h6 class="card-title">Country:</h6>`+
                                `</div>`+
                                `<div class="col">`+
                                    `<span>${city.cityCountry}</span>`+
                                `</div>`+
                            `</div>`+
                            `<div class="row">`+
                                `<div class="col">`+
                                    `<h6 class="card-title">Language:</h6>`+
                                `</div>`+
                                `<div class="col">`+
                                    `<span>${city.cityLanguage}</span>`+
                                `</div>`+
                            `</div>`+
                            `<div class="row">`+
                                `<div class="col">`+
                                    `<h6 class="card-title">Population:</h6>`+
                                `</div>`+
                                `<div class="col">`+
                                    `<span>${city.cityPopulationValue}</span>`+
                                `</div>`+
                            `</div>`+
                            `<div class="row">`+
                                `<div class="col">`+
                                    `<h6 class="card-title">Priority:</h6>`+
                                `</div>`+
                                `<div class="col">`+
                                    `<span>${city.visitStatus}</span>`+
                                `</div>`+
                            `</div>`+
                            `<div class="row">`+
                                `<div class="col">`+
                                    `<button type="button" class="btn btn-secondary" onclick="updateCityColor(${cityIndex})">Update</button>`+
                                `</div>`+
                                `<div class="col">`+
                                    `<input type="color" class="form-control form-control-color" id="city-color-${cityIndex}"
                                        value="${city.cityColor}" title="Choose your color">`+
                                `</div>`+
                            `</div>`+
                        `</div>`+
                    `</div>`+
                `</div>`;

    citiesContainerElement.innerHTML += template;
}

function showCityCard(cityIndex) {
    if(document.getElementById(`col-card-${cityIndex}`)) {
        let cityCardElement = document.getElementById(`col-card-${cityIndex}`);
        cityCardElement.classList.remove("hide-city-card");
    }
}

function removeAllCitieasCardsElements() {
    // Get citiesCounter from localStorage
    let citiesCounter = getCitiesCounter();
    
    for(let i = 0;i <= citiesCounter;i++) {
        if(document.getElementById(`col-card-${i}`)) {
            let cityCardElement = document.getElementById(`col-card-${i}`);
            cityCardElement.remove();    
        }
    }
}

function generateSearchDataList(citiesArr) {
    if(citiesArr == false) {
        return;
    }
    
    let dataListElement = document.getElementById("datalistOptions");
    
    for(let i = 0;i < citiesArr.length;i++) {
        dataListElement.innerHTML += `<option id="city-name-${i}" value="${citiesArr[i]}">`;        
    }
}

function removeSearchDataList() {
    // Removing all 'datalistOptions' elements if exist
    let i = 0;
    while(document.getElementById(`city-name-${i}`)) {
        let cityNameElement = document.getElementById(`city-name-${i}`);
        cityNameElement.remove();
        i++;
    }
}
