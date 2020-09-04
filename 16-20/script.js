//Task 16
function GenerateRandomHex() {
    let letters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

    let hexadecimalNumber = "#";

    for (var i = 0; i < 6; i++) {
        hexadecimalNumber += letters[Math.floor(Math.random() * 16)];
    }

    document.getElementById('randomResult').innerText = hexadecimalNumber;
}

//Task 17
function FilterNumber() {
    let filterInput = document.getElementById('filterInput').value;
    const filterNumbers = filterInput.split(" ").map(function(item) {
        return parseInt(item);
    });
    let array = [];

    array = filterNumbers.filter(i => filterNumbers.indexOf(i) === filterNumbers.lastIndexOf(i));

    document.getElementById('filterResult').innerText = array;
}

//Task 18
function GenerateId() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let characters = letters.split('');

    const numbers = Math.floor(Math.random() * 20);
    let id = "";

    for (let i = 0; i < numbers; i++) {
        id += characters[Math.floor(Math.random() * 61)]
    }

    document.getElementById('idResult').innerText = id;
}

//Task 19
function ComputeSum() {
    const sum = [1,2,3,4,5,6];

    let result = 0;

    for (let i = 0; i < sum.length; i++) {
        result += sum[i];
    }

    document.getElementById('sumResult').innerText = result;
}

//Task 20
function FibonaciNumber() {
    var fibInput = document.getElementById("fibInput").value;

    if (fibInput == 0) {
        return;
    }
    let numbers = FibonaciAlgorithm(fibInput);

    document.getElementById('fibResult').innerText = numbers;
}

function FibonaciAlgorithm(x) {
    let numbers = [0, 1];
    
    if (x === 1) {
        return numbers;
    }
    else {
        for (var i = numbers.length; i < x; i++) {
            numbers[i] = numbers[i - 2] + numbers[i - 1];
        }
        return numbers;
    }
}