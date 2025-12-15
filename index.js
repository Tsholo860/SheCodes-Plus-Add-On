
///Los Angeles
function dateandTimeUpdate(){
let losAngelesCity = document.querySelector("#los-angeles");
let losAngelesDate = losAngelesCity.querySelector(".date");
let losAngelesTime = losAngelesCity.querySelector(".time");

let currentTime = moment().tz('America/Los_Angeles');

losAngelesDate.innerHTML = currentTime.format("MMMM,Do,YYYY ");
losAngelesTime.innerHTML = currentTime.format("h:mm:ss [<small>]A[</small>]");

//Turkey
let turkeyCity = document.querySelector("#turkey");
let turkeyDate = turkeyCity.querySelector(".date");
let turkeyTime = turkeyCity.querySelector(".time");

let turkeyTimezone = moment().tz("Europe/Istanbul");
turkeyDate.innerHTML = turkeyTimezone.format("MMMM,Do,YYYY ");
turkeyTime.innerHTML = turkeyTimezone.format("h:mm:ss [<small>]A[</small>]");
}

function updateCity(event){
    
    let citiesTimeZone = event.target.value;
    if(citiesTimeZone === "current"){
        citiesTimeZone = moment.tz.guess();

    }
    let cityName = citiesTimeZone.replace("_"," ").split("/")[1];
    let time =moment().tz(citiesTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML =`
            <div class="city">
            <div>
                <h2>${cityName}</h2>
                <div class="date">${time.format("MMMM Do YYYY")}</div>
            </div>
            
            
            <div class="time">${time.format('h:mm:ss')} <small>${time.format('A')}</small></div>
        </div>
        <a href="index.html">Back to all cities</a>`;



}
dateandTimeUpdate();
setInterval(dateandTimeUpdate,100);  

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change",updateCity);