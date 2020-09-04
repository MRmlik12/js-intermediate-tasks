//Task 1
//Write a function to check whether a number is even or not.
function TypeOf() {
    var tempInput = document.getElementById("inputType");
    
    if (parseInt(tempInput.value)) {
        document.getElementById('result').innerText = "is a number";
    }
    else {
        document.getElementById('result').innerText = "isn't a number";
    }
}

//Task 2
//Write a function to get the current date
function getDate() {
    var d = new Date();
    document.getElementById("date").innerHTML = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
}

//Task 3
//Write a sort function in JavaScript. (U can use any sorting alghoritm)
function sortData() {
    var arrayToSort = [34,7,23,32,5,62];
    var i = 0;

    //sort type: bubble
    while (i < arrayToSort.length) {
        for (var x = 0; x < arrayToSort.length; x++) {
            if (arrayToSort[x] > arrayToSort[x + 1]) {
                var numberToSwap = arrayToSort[x];
                var move = arrayToSort[x + 1];
                arrayToSort[x + 1] =  numberToSwap;
                arrayToSort[x] = move;
            }
        }
        i++;
    }
    document.getElementById('sorting').innerText = arrayToSort;
}

//Task 4
//Write a function to calculate days left until next Christmas.
function timerToChristmas() {
    var timeToChristmas = new Date(2020, 12, 12, 0, 0, 0).getTime();
    const nowDate = new Date().getTime();
    const timeLeft = timeToChristmas - nowDate;

    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    document.getElementById('timer').innerText = days + " days";
}

//Task 5
//Write a program to calculate multiplication and division of two numbers (input from user).
function calculate() {
    var firstNumber = document.getElementById("oneNumber");
    var secondNumber = document.getElementById("secondNumber");
    var option = document.getElementById("options");

    if (option.value == "/") {
        document.getElementById("calcResult").innerText = firstNumber.value / secondNumber.value;
    }
    else if (option.value == "*") {
        document.getElementById("calcResult").innerText = firstNumber.value * secondNumber.value;
    }
}

//Init
getDate();
sortData();
timerToChristmas();
