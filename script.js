// alert("Hello")
// prompt("Hello")
document.getElementById("contenateSomeStrings").onclick = function() {

    var message = "Good Day ";
    var name = "Ahmad";
    var banger = "!"

    alert(message + name + banger); 
    // alert(message + name +  "!");
}

document.getElementById("askNameFromUser").onclick = function() {

    var firstName = prompt("Your Name?")

    // alert("Good Evening! " + firstName); 
    // document.getElementById("result").innerHTML = "Good Evening! " + firstName

    // Chapter 10 
    if (firstName == "Ahmad") {

        document.getElementById("result").innerHTML= "Good Morning " + firstName
        // alert("Good Morning " + firstName); 
    }
}

// Chapter 11 Comparison Operators 
document.getElementById("comparisonOperators").onclick = function() {

    var num1 = 16;
    var num2 = 15;

    if (num1 > num2) {
        alert("Yes, Your Condition is True")
    }
}