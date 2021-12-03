// DONE - GIVEN I am using a daily planner to create a schedule
// DONE - WHEN I open the planner
// DONE - THEN the current day is displayed at the top of the calendar
// DONE - WHEN I scroll down
// DONE - THEN I am presented with time blocks for standard business hours
// DONE - WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// DONE - WHEN I click into a time block
// DONE - THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist


var date = new Date();
var currentHour = date.getHours();
var timeRightNow;


//var timeInHTML = document.getElementById("timeRow").innerHTML; //get the value of time in from the HTML
//var numericValueOfTime = parseInt(timeInHTML); //convert it to a numeric value

for (var i = 9; i< 18; i++) {
    console.log(currentHour);
    var currentElementValue = document.getElementById("textArea-" + i);
    console.log(currentElementValue);
    if (i < currentHour) {
        currentElementValue.classList.add("past");
    } else if (i == currentHour) {
        currentElementValue.classList.add("present");
    } else {
        currentElementValue.classList.add("future");
    }

    // console.log(document.getElementById("timeRow-" + i).value);
}







//CURRENT TIME
document.getElementById("currentDay").textContent += moment().format('dddd, MMMM Do YYYY');

//RETRIEVE THE CURRENT TIME IN PREPARATION FOR THE COLORS
function getCurrentTime() {
    currentTime = parseInt(currentHour);
    console.log(currentTime);
    timeRightNow = currentTime;
}
console.log(numericValueOfTime); //check what the value from the html is reading as




//CHANGE THE COLORS BASED ON THE TIME
//if the div element's value is less than the current time, make it grey. if it is equal to the current hour, make it red. if it is greater thant he current hour, make it green
function colorChangeBasedOnTime() {
    if (timeRightNow < numericValueOfTime) { //if the crrent time is less than the html element value of time, make the text box class "future"
        var rowOfTasks = document.getElementById("textArea");
        rowOfTasks.classList.add("future");
    } else if (timeRightNow > numericValueOfTime) { //if the current time is greater than the time value in html, make the text box class "past"
        var rowOfTasks = document.getElementById("textArea");
        rowOfTasks.classList.add("past");
    } else if (timeRightNow = numericValueOfTime) { //if the current time matches the html element, make the text box class "present"
        var rowOfTasks = document.getElementById("textArea");
        rowOfTasks.classList.add("present");
    }
}



getCurrentTime();
colorChangeBasedOnTime();

