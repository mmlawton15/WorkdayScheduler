var date = new Date();
var currentHour = date.getHours();
var timeRightNow;
var localStorageArray = [];
var timeBlocks = document.getElementsByClassName("time-block");
var noteBlocks = document.getElementsByClassName("noteDescription");
var saveButtonElements = document.getElementsByClassName("saveBtn");
//var emptyObject = {};

//LEFT OFF HERE
for (let i=0; i<saveButtonElements.length; i++) {
    let button = saveButtonElements[i];
    button.addEventListener("click", function(e) {
        var clickTextContent = button.parentElement.previousElementSibling.closest(".noteDescription").textContent;
        var timeBlockId = button.parentElement.parentElement.firstElementChild.getAttribute("id").split("-")[1];
        //emptyObject.id= timeBlockId;
        localStorage.setItem(timeBlockId, clickTextContent);
    });
}

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
    timeRightNow = currentTime;
}

//SAVE THE DATA ENTERED INTO LOCAL STORAGE
function saveTasksToLocalStorage() {
    for (var i=0; i<=noteBlocks.length; i++) {
        if (noteBlocks[i] !== null) {
        }
    }
}


//CODE TO SET THE DIV ELEMENT TO THE LOCAL STORAGE
let timeBlockNine = document.getElementById('textArea-9');
timeBlockNine.textContent = localStorage.getItem("9");

let timeBlockTen = document.getElementById('textArea-10');
timeBlockTen.textContent = localStorage.getItem("10");

let timeBlockEleven = document.getElementById('textArea-11');
timeBlockEleven.textContent = localStorage.getItem("11");

let timeBlockTwelve = document.getElementById('textArea-12');
timeBlockTwelve.textContent = localStorage.getItem("12");

let timeBlockThirteen = document.getElementById('textArea-13');
timeBlockThirteen.textContent = localStorage.getItem("13");

let timeBlockFourteen = document.getElementById('textArea-14');
timeBlockFourteen.textContent = localStorage.getItem("14");

let timeBlockFifteen = document.getElementById('textArea-15');
timeBlockFifteen.textContent = localStorage.getItem("15");

let timeBlockSixteen = document.getElementById('textArea-16');
timeBlockSixteen.textContent = localStorage.getItem("16");

let timeBlockSeventeen = document.getElementById('textArea-17');
timeBlockSeventeen.textContent = localStorage.getItem("17");

getCurrentTime();
colorChangeBasedOnTime();
saveTasksToLocalStorage();