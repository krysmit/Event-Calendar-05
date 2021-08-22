var timeDisplay = $('#currentDay');
var colorCoded = $('#colorCoded');
var calendarTime = $('#time')

//function to make the date appear
function displayDate() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm a');
    timeDisplay.text(rightNow);
  }

//function to check the current time against the calendar time so I can color code the bars
//seems to only be running the code against actual current time console.logging 'past' and 'current' only
function colorTimeBars() {
    //var calTime = calendarTime.text();
    if (displayDate > calendarTime) {
        console.log("past time");
        console.log(calendarTime);
} else if (displayDate < calendarTime) {
    console.log("future time");
    console.log(calendarTime);
} else (displayDate == calendarTime); {
    console.log("current time");
    console.log(calendarTime);
}
}
//if applicable... these classes color the cells. possibly use in the loop?
//<tr class="table-success">...</tr>
//<tr class="table-danger">...</tr>
//<tr class="table-dark">...</tr>


colorTimeBars(); //running the time check code to color the bars

  setInterval(displayDate, 1000); //running the clock