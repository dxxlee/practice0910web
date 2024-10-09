// Task 1
function multiplyAndDivide(event) {
    event.preventDefault();
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let multiplication = num1 * num2;
    let division = num1 / num2;
    document.getElementById("task1").innerHTML = `Multiplication: ${multiplication}, Division: ${division}`;
}

// Task 2
function findLargest(event) {
    event.preventDefault();
    let num3 = parseFloat(document.getElementById("num3").value);
    let num4 = parseFloat(document.getElementById("num4").value);
    let num5 = parseFloat(document.getElementById("num5").value);
    let largest = Math.max(num3, num4, num5);
    document.getElementById("task2").innerHTML = `Largest: ${largest}`;
}

// Task 3
function sumTriple(event) {
    event.preventDefault();
    let num6 = parseFloat(document.getElementById("num6").value);
    let num7 = parseFloat(document.getElementById("num7").value);
    let result = (num6 === num7) ? 3 * (num6 + num7) : num6 + num7;
    document.getElementById("task3").innerHTML = `Result: ${result}`;
}

// Task 4
function closestTo100(event) {
    event.preventDefault();
    let num8 = parseFloat(document.getElementById("num8").value);
    let num9 = parseFloat(document.getElementById("num9").value);
    let diff1 = Math.abs(100 - num8);
    let diff2 = Math.abs(100 - num9);
    let closest;

    if (diff1 < diff2) {
        closest = num8;
    } else if (diff2 < diff1) {
        closest = num9;
    } else {
        closest = false;  // if both are equally close to 100
    }

    document.getElementById("task4").innerHTML = `Closest: ${closest}`;
}


// Task 5
function getFirstHalf(event) {
    event.preventDefault();
    let str = document.getElementById("textInput").value;
    if (str.length % 2 === 0) {
        document.getElementById("task5").innerHTML = `First half: ${str.slice(0, str.length / 2)}`;
    } else {
        document.getElementById("task5").innerHTML = "String length is not even.";
    }
}