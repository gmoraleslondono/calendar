const lang = navigator.language;
let date = new Date();

let dayNumber = date.getDate();
let month = date.getMonth();
let dayName = date.toLocaleString(lang, { weekday: "long" });
let monthName = date.toLocaleString(lang, { month: "long" });
let year = date.getFullYear();

Date.prototype.getWeek = function() {
    var onejan = new Date(this.getFullYear(),0,1); //January first
    var today = new Date(this.getFullYear(),this.getMonth(),this.getDate());
    var day_miliseconds = 86400000;
    var dayOfYear = ((today - onejan + day_miliseconds)/day_miliseconds);
    return Math.ceil(dayOfYear/7)
};

let weekNumber = date.getWeek();

document.getElementById("monthName").innerHTML = monthName;
document.getElementById("dayNumber").innerHTML = dayNumber;
document.getElementById("monthName").innerHTML = monthName;
document.getElementById("dayName").innerHTML = dayName;
document.getElementById("year").innerHTML = year;
document.getElementById("week").innerHTML = weekNumber;
