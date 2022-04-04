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
        
    newCity.cityImage = "https://media.istockphoto.com/photos/seascape-near-the-marina-in-israel-ashdod-picture-id471772741?s=612x612";
    newCity.cityCountry = document.getElementById('city-country').value;
    newCity.cityLanguage = document.getElementById('city-language').value;
    newCity.cityPopulation = document.getElementById('city-population').value;
    newCity.cityColor = document.getElementById('city-color').value;
    newCity.visitStatus = document.querySelector('input[name = visitStatus]:checked').value;
    newCity.cityRating = '10';

    // Update City Index Value
    newCity.cityIndex = citiesCounter;    

    // Save New City to Local Storage
    saveCityData(newCity);
}

function generateCityCard(city) {
    let template =
                `<div id="col-card-${city.cityIndex}" class="col hide-city-card">`+
                    `<div class="card city-card" style="width: 15rem;">`+
                        //`<img src="..." class="card-img-top img-thumbnail" alt="...">`+
                        `<div class="card-body">`+
                            `<div class="row">`+
                                `<div class="col">`+
                                    `<h6 class="card-title">City:</h6>`+
                                `</div>`+
                                `<div class="col">`+
                                    `<span>${city.cityName}</span>`+
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
                                    `<h6 class="card-title">Rating:</h6>`+
                                `</div>`+
                                `<div class="col">`+
                                    `<span>${city.cityRating}</span>`+
                                `</div>`+
                            `</div>`+
                            `<div class="row">`+
                                `<div class="col">`+
                                    `<button type="button" class="btn btn-secondary">Update</button>`+
                                `</div>`+
                                `<div class="col">`+
                                    `<input type="color" class="form-control form-control-color" id="city-color"
                                        value="${city.cityColor}" title="Choose your color">`+
                                `</div>`+
                            `</div>`+
                        `</div>`+
                    `</div>`+
                `</div>`;

    citiesContainerElement.innerHTML += template;
}
