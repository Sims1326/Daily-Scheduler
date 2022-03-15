var today = moment().format("dddd, MMMM Do YYYY");
$('#currentDay').append(today)

var currentHour = moment().hour();
 console.log(currentHour)
var taskHour = $(".time-block");

taskHour.each(function(){
    var taskTime = parseInt($(this).attr('id'))
     console.log(taskTime)
    if(taskTime === currentHour){
        $(this).addClass("present")
    }
    else if(taskTime < currentHour){
        $(this).addClass("past")
    }
    else {
        $(this).addClass("future")
    };


 });


// How do you get hours and minutes without date?
// Compare current hour to taskTime
