//Task 6
//Write a program to get the website URL (loading page)
function GetWebsiteURL() {
    document.getElementById('url').innerText = window.location.href;
}

//Task 7
//Write a program to create a new string from a given string changing the position of first and last characters.
//The string length must be greater than or equal to 1
function SwapSides() {
    const stringinput = document.getElementById('swapInput').value;

    if (stringinput.length >= 2) {
        var swapSides = stringinput.substr(1, stringinput.length - 1);
        document.getElementById('swapResult').innerText = stringinput.charAt(stringinput.length - 1) + swapSides + stringinput.charAt(0);
    }
    else {
        alert('this string must be more characters');
    }
}

//Task 8
//Write a program to create a new string from a given string with the first character of 
//the given string added at the front and back.
function AddFirstToBothSides() {
    const stringInput = document.getElementById('duplicateInput').value;

    if (stringInput.length >= 1) {
        document.getElementById('duplicateResult').innerText = stringInput.charAt(0) + stringInput + stringInput.charAt(0);
    }
    else {
        alert('this string must be more characters');
    }
}

//Task 9
//Write a program to create a new string from a given string taking the last 3 characters and added at both the front and back.
//The string length must be 3 or more.
function IncreaseString() {
    const stringInput = document.getElementById('stringInput').value;

    if (stringInput.length >= 3) {
        var stringOutput = stringInput.substr(stringInput.length - 3);
        document.getElementById('increaseResult').innerText = stringOutput + stringInput + stringOutput;
    }
    else {
        alert('this string must be more characters');
    }
}


//Task 10
//Write a program to check if three given integer values are in the range 50..99 (inclusive).
// Return true if one or more of them are in the said range.
function InRange() {
    const rangeInput = document.getElementById('rangeInput').value;
    var rangeList = rangeInput.split(" ");
    var isInRange = [];
    
    for (var x = 0; x < rangeList.length; x++) {
        if (rangeList[x] >= 50 && rangeList[x] < 100) {
            isInRange.push(true);
        }
        else {
            isInRange.push(false);
        }
    }

    document.getElementById('rangeResult').innerText = isInRange;
}

GetWebsiteURL();