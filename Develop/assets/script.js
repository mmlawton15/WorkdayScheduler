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
//window.localStorage.setItem('task');
function saveTasksToLocalStorage() {
    for (var i = 9; i<18; i++) {
        var currentTaskElementValue = document.getElementById("textArea" + i).textContent; //similar code to the colorChangeBasedOnTime to get the text content of each task div
    }
    //when the save button is clicked, take the text from the div and save it to local storage
        document.getElementById("saveButton").addEventListener("click", function() {
            console.log("save button was clicked"); //check the button works
            if (currentTaskElementValue !== null) { //if the text in the div element has substance
                localStorage.task = currentTaskElementValue; //set local storage.task key to be the value of the div element
            }
        
        })
    
}

getCurrentTime();
colorChangeBasedOnTime();
saveTasksToLocalStorage();
