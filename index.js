
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
dateandTimeUpdate()
setInterval(dateandTimeUpdate,100);