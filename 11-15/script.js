//Task 11
//Write a program to find the largest of three given integers
function FindLargestNumber() {
    const largeInput = document.getElementById('largestInput').value;
    var numbers = largeInput.split(",").map(function(item) {
        return parseInt(item);
    });

    if (numbers.length > 3) {
        alert("the maximum of numbers are 3!");
    }
    else {
        var i = 0;
        //sort type: bubble
        while (i < numbers.length) {
            for (var x = 0; x < numbers.length; x++) {
                if (numbers[x] > numbers[x + 1]) {
                    var numberToSwap = numbers[x];
                    var move = numbers[x + 1];
                    numbers[x + 1] =  numberToSwap;
                    numbers[x] = move;
                }
            }
            i++;
        }
        document.getElementById('largestResult').innerText = numbers[2];
    }
}

//Task 12
//Write a program to find a value which is nearest to 100 from two different given integer values.
function NearHundret() {
    const nearInput = document.getElementById('nearInput').value;
    const numbers = nearInput.split(" ").map(function(item) {
        return parseInt(item);
    });

    const nearOne = Math.abs(numbers[0] - 100)
    const nearTwo = Math.abs(numbers[1] - 100);

    if (nearOne > nearTwo) {
        document.getElementById('nearResult').innerText = numbers[1] + " is the nearest to 100";
    }
    else {
        document.getElementById('nearResult').innerText = numbers[0] + " is the nearest to 100";
    }
}

//Task 13
//Write a program to replace every character in a given string with the character following it in the alphabet.
function ReplaceStrings() {
    var word = document.getElementById('chainInput').value;
    var chars = word.split('');

    for (var x = 0; x < chars.length; x++){
        const charToSwap = Math.floor(Math.random() * chars.length);
        chars[x] = chars[charToSwap];
    }

    document.getElementById('chainResult').innerText = chars.join('');
}


//Task 14  
//Write a program to capitalize the first letter of each word of a given string
function CapitalizeChars() {
    const captInput = document.getElementById('captInput').value;
    var words = captInput.split(' ');

    for (var x = 0; x < words.length; x++) {
        words[x] = words[x][0].toUpperCase() + words[x].substr(1);
    }

    document.getElementById('captResult').innerText = words.join(" ");
}

//Task 15
function ReplaseNumbers() {
    var input = document.getElementById('replInput').value;
    var numbers = input.split(',');
    const len = numbers.length;

    if (len == 1)  return;

    for (var x = 0; x <= len; x++) {
        if (x == 0 || len == 3) {
            var i = numbers[len - 1];
            numbers[numbers.length - 1] = numbers[x];
            numbers[x] = i;
            break;
        }
        else if (x == len - 1) {
            console.log("tad " + numbers);
            break;
        }
        else {
            numbers[x] = numbers[x + 1];
        }
    }

    console.log(numbers);
}