var timeDisplay = $('#currentDay');
var colorCoded = $('.colorCoded');
var calendarTimes = ["10:00 am", "11:00 am", "12:00 pm", "01:00 pm", "02:00 pm", "03:00 pm", "04:00 pm", "05:00 pm"];
console.log("length of calendar Times: ", calendarTimes.length)
displayDate();

//function to make the date appear
function displayDate() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm a');
    timeDisplay.text(rightNow);
  }


$('.saveuserentry').on("click",function(event){
  event.preventDefault();
  var timeblock = $(this).attr('id').split('-')[0]
  var userplan = $(`#${timeblock}-plan`).val()
  console.log(timeblock,userplan);
  localStorage.setItem(timeblock, userplan);
})


// function currentTime() {
//     moment().format('hh:mm a');
// }
//trying out a var instead of the function for the current time
//when .format('hh:mm a') is present, everything is green (future).
//when it is gone, everything is red (current)
//.toString makes everything gray (past)
var currentTime = moment().format('hh:mm a'); //.toString; 
console.log("current time: ", currentTime);
console.log("calendar times var: ", calendarTimes);
//console.log("getHours: ", currentTime.getHours());

//function to check the current time against the calendar time so I can color code the bars
function colorTimeBars() {
    if (currentTime > calendarTimes) {
        console.log("past time");
        $('.colorCoded').css("background-color", "gray");
    } else if (currentTime < calendarTimes) {
    console.log("future time");
    $('.colorCoded').css("background-color", "green");
    } else {
    console.log("current time");
    $('.colorCoded').css("background-color", "red");
}
}



for (let i = 10; i <= 17; i++) {
    //colorTimeBars();
    $(`#${i}-plan`).val(localStorage.getItem(i))
  }


//colorTimeBars(); //running the time check code to color the bars (now running in for loop)


  setInterval(displayDate, 1000); //running the clock
