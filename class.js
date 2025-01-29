// console.log('connected');

// const btn = document.querySelector('#btn');

// const dBtn = document.querySelector('#dBtn');

// btn.addEventListener('click', clickCountHandler);

// dBtn.addEventListener('click', clickDecrementHandler);

// const countInsert = document.querySelector('#insert-count');

// let count = 0;

// function clickCountHandler() {
//     // console.log("clicked");
//     count++
//     console.log(count);
//     countInsert.textContent = count;
    
// }

// function clickDecrementHandler() {
//     // console.log("clicked");
//     count--
//     console.log(count);
//     countInsert.textContent = count;
    
// }

// let quotes = [
//     " aldjflakdjfa",
//     "ladskfjlskdf",
//     "lasdjflakjdflkd",
//     "lsjdflkdsjl"
// ];

// const btn = document.querySelector('#btn');
// const quotePlace = document.querySelector('#quoteGoesHere')

// btn.addEventListener('click', clickHandler);

// function clickHandler() {
//     let randomNumber = Math.floor(Math.random() * quotes.length); 

//     console.log(quotes[randomNumber]);

//     quotePlace.textContent = quotes[randomNumber];
    
// }

// // Exercise 1: Create a Welcome Alert Build a webpage that shows an alert with the message "Welcome to My Website!" when the page is loaded.
// alert("welcome to my website!");



// Exercise 2: Change Text Content Add a paragraph with some placeholder text. Create a button that, when clicked, changes the paragraph text to "You clicked the button!"
const paragraph = document.querySelector('#ex2');
const button = document.querySelector('#changeButton');

button.addEventListener('click', changeParagraph);

function changeParagraph() {
   paragraph.textContent = "you clicked the button!";
}

// Exercise 3: Dynamic Image Switcher Create two buttons labeled "Image 1" and "Image 2." When either button is clicked, display a different image below the buttons.
const imageOne = document.querySelector('#image1');
const imageOnePlace = document.querySelector('#imageOneGoesHere');
const imageTwo = document.querySelector('#image2');
const imageTwoPlace = document.querySelector('#imageTwoGoesHere');

let images = ["images/chunsik.jpg",
    "images/jordy.jpg",
    "images/ryan.png"
];
// let image1 = new Image();
// image1.src = "images/chunsik.jpg";

// let image2 = new Image();
// image2.src = "images/jordy.jpg";

// let image3 = new Image();
// image3.src = "images/ryan.png";

imageOne.addEventListener('click', clickHandler1);
imageTwo.addEventListener('click', clickHandler2);

function clickHandler1() {
    let randomIndex = Math.floor(Math.random() * images.length);
    imageOnePlace.src = images[randomIndex];
}

function clickHandler2() {
    let randomIndex = Math.floor(Math.random() * images.length);

    imageTwoPlace.src = images[randomIndex];
}


// Exercise 4: Simple Input Logger Add an input box and a button. When the button is clicked, display the text the user entered in a <p> tag below the input box.
// let ex4Array = [];
const ex4UserInput = document.getElementById('ex4Input');
const ex4Button = document.getElementById('add');
const ex4Paragraph = document.getElementById('ex4Paragraph');

ex4Button.addEventListener('click', addToParagraph);

function addToParagraph() {
    console.log(ex4UserInput.value);
    ex4Paragraph.textContent = ex4UserInput.value;
}


// JS code:
// const submitButton = document.getElementById('submit-button');
// const inputText = document.getElementById('input-text');
// const paraText = document.getElementById('para-text');

// submitButton.addEventListener('click', showParagraph);

// function showParagraph() {
//     console.log(inputText.value);
//     paraText.textContent = inputText.value;
// }

// Exercise 5: Create a Countdown Timer Create a countdown timer that starts at 10 seconds and counts down to zero. Allow the user to start and stop the timer. Display the timer value on the page.
const timer = document.querySelector('#time');
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');

startButton.addEventListener('click', startHandler);
stopButton.addEventListener('click', stopHandler);


let time = 10;
let timerId; //stores id of running timer

function startHandler() {
    if (!timerId) {
        timerId = setInterval(() => { //setInterval repeartedly runs the function at specified interval, ( () => {}) defines logic
            if (time <= 0) {
                clearInterval(timerId); //timerId stores intervals id so it can be stopped by using clearInterval(timerId)
                timer.textContent = "done!"; 
            } else {
                time.textContent = time;
                time--;
        }
    }, 1000);
}
}

function stopHandler() {
    clearInterval(timerId);
    timerId = null;
}



//count down seems to be running correctly but not displaying the actual numbers counting down

// Exercise 6: Create a Simple Calculator Build a simple calculator that can add, subtract, multiply, and divide two numbers. Display the result on the page.


const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
     } 
     catch(error) {
        display.value = "Error";
     }
    
}