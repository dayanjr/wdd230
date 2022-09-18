
let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "wednesday",
    "thursday",
    "Friday",
    "Saturday",
];

let months = [
    "January",
    "February",
    "March",
    "April",
    "may",
    "june",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
let todaysdate = new Date();
let dayName = daynames[todaysdate.getDay()];
let monthName = months[todaysdate.getMonth()];
let oLastModif = new Date(document.lastModified);
document.write("This document is lastly modified on" + " " +document.lastModified);
try {
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };
    document.getElementById("currentdate2").textContent = new Date().toLocaleDateString("en-US", options);
 } catch (e) {
    alert("Error with code or your browser does not support Locale")
 }
