/*eslint-env browser*/

//STEP 1
function daysInThisMonth() {
    "use strict";
    var now = new Date();
    return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
}

window.console.log(daysInThisMonth());

//STEP 2
var nameOfMonth = function (dt) {
    "use strict";
    var mlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return mlist[dt.getMonth()];
};

window.console.log(nameOfMonth(new Date("05/06/1993")));
window.console.log(nameOfMonth(new Date("06/25/2020")));

//STEP 3
var today = new Date();
if (today.getDay() === 6 || today.getDay() === 0) {
    window.console.log("Weekend!");
}

window.console.log(today.getDate());

//STEP 4
var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

d.setDate(d.getDate() - 1);
window.console.log("Yesterday was " + weekday[d.getDay()]);


//STEP 5

var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];
window.console.log(n.charAt(0));
