var today = moment().format("dddd, MMMM Do YYYY");
$('#currentDay').append(today)


function whatTime() {
var currentHour = moment().hour();
 console.log(currentHour)
var taskHour = $(".time-block");
// How do you get hours and minutes without date?
// Compare current hour to taskTime


taskHour.each(function(){
    var taskTime = parseInt($(this).attr('id'))
    // console.log(taskTime)

    

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

}
// runs time check originally
whatTime()
// Check Time every 10 minutes
 setInterval(whatTime, 600000)

$(".btn").on("click", function (){

    var whichBox = $(this)
   .closest(".time-block")
   .attr("id");

   var taskText = $(this)
   .siblings(".description")
   .val();

  localStorage.setItem(whichBox, taskText)

   // console.log(taskText)


})

