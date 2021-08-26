var timeDisplay = $('#currentDay');
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


console.log("calendar times var: ", calendarTimes);

var currentTime = moment().hours();
console.log("current time: ", currentTime);
for (let i = 10; i <= 17; i++) {
    $(`#${i}-plan`).val(localStorage.getItem(i));
    if (currentTime > i) {
      $(`#${i}-plan`).addClass("past");
    } else if (currentTime == i) {
      $(`#${i}-plan`).addClass("present");
    } else {
      $(`#${i}-plan`).addClass("future");
    }
  }




//running the clock
setInterval(displayDate, 1000);
