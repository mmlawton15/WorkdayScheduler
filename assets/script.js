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

//FOR LOOP TO FILTER THROUGH ALL THE HTML BUTTONS AND ADD EVENT LISTENERS
var arrayOfButtons = document.getElementsByClassName("saveBtn");
for (var i = 0; i<arrayOfButtons.length; i++){
    arrayOfButtons[i].addEventListener('click', saveTasksToLocalStorage);
}

//SAVE BUTTON TO LS CODE
function saveTasksToLocalStorage(event) {
    
    //var stringValue = JSON.stringify(currentTaskElementValue);
    console.log(event);
    console.log(event.target.id); //slice substring or replace
    let text = event.target.id;
    let numberID = text.replace("saveButton-", "");
    //once i get that number, use that number in a selector to target corresponding text area
    var currentTaskElementValue = document.getElementsByClassName(`noteDescription-${numberID}`).value; //
    let textArea = document.querySelector(`textArea-${numberID}`)//template literals
    console.log(textArea);
    console.log(currentTaskElementValue);
}




//get that target and save to local storage
//get the event target, do a console log for the event target and get the data from it to save to local storage
//event target . something with a value and then get the value thats in there

getCurrentTime();
colorChangeBasedOnTime();
//saveTasksToLocalStorage();







// //SAVE THE DATA ENTERED INTO LOCAL STORAGE
// //when the save button is clicked, it sends the value in the div to local storage
// function saveTasksToLocalStorage(event) {

//     //for (var i = 9; i<18; i++) {
//         // use the event to find out which button was clicked

//         // reach into the html to grab that button corresponding text area
//         var currentTaskElementValue = document.getElementById("textArea-"); //get the text content of each task div
//         console.log(currentTaskElementValue) // sanity check
//         if (currentTaskElementValue !== null) { //if the text in the div element has substance
//             localStorage.setItem('task', JSON.stringify(currentTaskElementValue)); //convert that input into a string and save it as a task in local storage
//             currentTaskElementValue.textContent = JSON.parse(localStorage.getItem('task')); //turn that item back into an object and make it appear on the screen by turning it into the text content of the div
//             console.log(currentTaskElementValue);
//             //localStorage.task = currentTaskElementValue.textContent; //set local storage.task key to be the value of the div element
//         }
//     //}
// }