//read inputs inside each function so the values stay up to date
function checkInputs() {
    let firstInput = document.getElementById("first-number").value;
    let secondInput = document.getElementById("second-number").value;
    document.getElementById("output").style.color = "black";

    if (firstInput === "" || secondInput === "") {
        document.getElementById("output").innerHTML = "Enter a number in both boxes.";
        return false;
    }
    return true;
}


function showResult(result) {
    document.getElementById("output").innerHTML = String(result);
    if (result < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "black";
    }
}

function addition() {
    if (checkInputs()) {
        let firstNumber = Number(document.getElementById("first-number").value);
        let secondNumber = Number(document.getElementById("second-number").value);
        let result = firstNumber + secondNumber;
        showResult(result);
    }
}

function subtraction() {
    if (checkInputs()) {
        let firstNumber = Number(document.getElementById("first-number").value);
        let secondNumber = Number(document.getElementById("second-number").value);
        let result = firstNumber - secondNumber;
        showResult(result);
    }
}

function multiplication() {
    if (checkInputs()) {
        let firstNumber = Number(document.getElementById("first-number").value);
        let secondNumber = Number(document.getElementById("second-number").value);
        let result = firstNumber * secondNumber;
        showResult(result);
    }
}

function division() {
    if (checkInputs()) {
        let firstNumber = Number(document.getElementById("first-number").value);
        let secondNumber = Number(document.getElementById("second-number").value);
        if (secondNumber === 0) {
            document.getElementById("output").innerHTML = "Cannot divide by zero.";
        } else {
            let result = firstNumber / secondNumber;
            showResult(result);
        }
    }
}

function power() {
    if (checkInputs()) {
        let firstNumber = Number(document.getElementById("first-number").value);
        let secondNumber = Number(document.getElementById("second-number").value);

        if (secondNumber % 1 !== 0) {
            document.getElementById("output").innerHTML = "Use a whole number for the exponent.";
            return;
        }

        if (secondNumber > 10000 || secondNumber < -10000) {
            document.getElementById("output").innerHTML = "Use an exponent from -10000 to 10000.";
            return;
        }

        if (firstNumber === 0 && secondNumber < 0) {
            document.getElementById("output").innerHTML = "Zero cannot have a negative exponent.";
            return;
        }

        let result = 1;
        if (secondNumber >= 0) {
            for (let i = 0; i < secondNumber; i++) {
                result = result * firstNumber;
            }
        } else {
            for (let i = 0; i > secondNumber; i--) {
                result = result / firstNumber;
            }
        }
        showResult(result);
    }
}

function clearCalculator() {
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "";
    document.getElementById("output").style.color = "black";
}
