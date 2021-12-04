// DONE - GIVEN I am using a daily planner to create a schedule
// DONE - WHEN I open the planner
// DONE - THEN the current day is displayed at the top of the calendar
// DONE - WHEN I scroll down
// DONE - THEN I am presented with time blocks for standard business hours
// DONE - WHEN I view the time blocks for that day
// DONE - THEN each time block is color-coded to indicate whether it is in the past, present, or future
// DONE - WHEN I click into a time block
// DONE - THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

var date = new Date();
var currentHour = date.getHours();
var timeRightNow;


function colorChangeBasedOnTime() {
    for (var i = 9; i< 18; i++) {
        var currentElementValue = document.getElementById("textArea-" + i);
        if (i < currentHour) {
            currentElementValue.classList.add("past");
        } else if (i == currentHour) {
            currentElementValue.classList.add("present");
        } else {
            currentElementValue.classList.add("future");
        }
    }
}

//CURRENT TIME
document.getElementById("currentDay").textContent += moment().format('dddd, MMMM Do YYYY');

//RETRIEVE THE CURRENT TIME IN PREPARATION FOR THE COLORS
function getCurrentTime() {
    currentTime = parseInt(currentHour);
    console.log(currentTime);
    timeRightNow = currentTime;
}

//SAVE THE DATA ENTERED INTO LOCAL STORAGE
//add an event listener to the save button so when the save button is clicked, it sends the value in the div to local storage


function saveTasksToLocalStorage(event) {
    //when the save button is clicked, take the text from the div and save it to local storage
    console.log("save button was clicked"); //check the button works
    for (var i = 9; i<18; i++) {
        var currentTaskElementValue = document.getElementById("textArea" + i); //similar code to the colorChangeBasedOnTime to get the text content of each task div
        if (currentTaskElementValue !== null) { //if the text in the div element has substance
            localStorage.setItem('task', JSON.stringify(currentTaskElementValue)); //convert that input into a string and save it as a task in local storage
            currentTaskElementValue.textContent = JSON.parse(localStorage.getItem('task')); //turn that item back into an object and make it appear on the screen by turning it into the text content of the div
            console.log(currentTaskElementValue);
            //localStorage.task = currentTaskElementValue.textContent; //set local storage.task key to be the value of the div element
        }
    }
}


document.querySelector(".saveButton").addEventListener("click", saveTasksToLocalStorage); //select any element that has the save button class. inside this funciton, get the event target
//get that target and save to local storage
//get the event target, do a console log for the event target and get the data from it to save to local storage
//event target . something with a value and then get the value thats in there


getCurrentTime();
colorChangeBasedOnTime();
saveTasksToLocalStorage();