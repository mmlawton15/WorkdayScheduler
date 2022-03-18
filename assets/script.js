// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

var date = new Date();
var currentHour = date.getHours();
var timeRightNow;
var localStorageArray = [];

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
function saveTasksToLocalStorage(event) {
    for (var i = 9; i<18; i++) {
        var currentTaskElementValue = document.getElementById("textArea-"+i).textContent;
        console.log(currentTaskElementValue)
        if (currentTaskElementValue !== null) {
            localStorage.task = currentTaskElementValue.textContent;
            localStorage.setItem("tasks"+i, currentTaskElementValue);
        }
    }
}

//FOR LOOP TO FILTER THROUGH ALL THE HTML BUTTONS AND ADD EVENT LISTENERS
var arrayOfButtons = document.getElementsByClassName("saveBtn");
for (var i = 0; i<arrayOfButtons.length; i++){
    arrayOfButtons[i].addEventListener('click', saveTasksToLocalStorage);
}

getCurrentTime();
colorChangeBasedOnTime();
saveTasksToLocalStorage();