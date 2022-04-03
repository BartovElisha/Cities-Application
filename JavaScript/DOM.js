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

    // Update City Index Value
    newCity.cityIndex = citiesCounter;    

    citiesCounter++;
    saveCityCounter(citiesCounter);
    
    // Get new City Data from input
    newCity.cityImage = "https://media.istockphoto.com/photos/seascape-near-the-marina-in-israel-ashdod-picture-id471772741?s=612x612";
    newCity.cityName = document.getElementById('city-name').value;
    newCity.cityCountry = document.getElementById('city-country').value;
    newCity.cityLanguage = document.getElementById('city-language').value;
    newCity.cityPopulation = document.getElementById('city-population').value;
    newCity.cityColor = document.getElementById('city-color').value;
    newCity.visitStatus = document.querySelector('input[name = visitStatus]:checked').value;
    newCity.cityRating = '10';

    // Save New City to Local Storage
    saveCityData(newCity);
}

function generateCityCard(cityIndex) {
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
