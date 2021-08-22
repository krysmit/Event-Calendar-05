var timeDisplay = $('#currentDay');
var colorCoded = $('#colorCoded');
var calendarTime = $('#time')

//function to make the date appear
function displayDate() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm a');
    timeDisplay.text(rightNow);
  }

function colorTimeBars() {
    var calTime = calendarTime
    if (displayDate > calTime) {
        console.log("past time");
} else if (displayDate < calTime) {
    console.log("future time");
} else (displayDate == calTime); {
    console.log("current time");
}
}

colorTimeBars();

  setInterval(displayDate, 1000);