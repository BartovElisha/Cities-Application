class City {
    cityPopulationValue = 0;

    // City Population
    set cityPopulation(value) {
        if(isNaN(value) || value < 0) {  // Return true if value is not a number
            alert('Invalid Value');
            return;
        }
        this.cityPopulationValue = value;
    }
    get cityPopulation() {
        return this.cityPopulationValue;
    }

    // Constructor for City Name, City Country and City Language
    constructor(cityIndex,cityImage,cityName,cityCountry,cityLanguage,cityColor,visitStatus,cityRating) {
        this.cityIndex = cityIndex;
        this.cityImage = cityImage;
        this.cityName = cityName;
        this.cityCountry = cityCountry;
        this.cityLanguage = cityLanguage;
        this.cityColor = cityColor;
        this.visitStatus = visitStatus;
        this.cityRating = cityRating;
    }
}