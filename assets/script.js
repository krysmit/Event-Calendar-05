var timeDisplay = $('#currentDay');
var colorCoded = $('#colorCoded');
var calendarTimes = $('#time');

//function to make the date appear
function displayDate() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm a');
    timeDisplay.text(rightNow);
  }

function currentTime() {
    moment().format('hh:mm a');
}

//function to check the current time against the calendar time so I can color code the bars
//seems to only be running the code against actual current time console.logging 'past' and 'current' only
function colorTimeBars() {
    //var calTime = calendarTimes.text();
    if (currentTime > calendarTimes) {
        console.log("past time");
        $('#colorCoded').css("background-color", "gray");
    } else if (currentTime < calendarTimes) {
    console.log("future time");
    $('#colorCoded').css("background-color", "green");
    } else {
    console.log("current time");
    $('#colorCoded').css("background-color", "red");
}
}

for (let i = 0; i < calendarTimes.length; i++) {
    colorTimeBars();
  }


//colorTimeBars(); //running the time check code to color the bars (now running in for loop)

  setInterval(displayDate, 1000); //running the clock