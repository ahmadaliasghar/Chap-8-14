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
document.getElementById("comparisonOperators").onclick = function() 
{

    var num1 = 15;
    var num2 = 16;

    if (num1 > num2) {
        alert("Yes, Your Condition is True")
    }else{ 
        alert("No, Your Condition is not True") 
    }

    // // Greater than or Equal 
    // var num3 = 15;
    // var num4 = 15;

    // if (num3 >= num4) {
    //     alert("Yes, Your condition is true. The 15 = 15")
    // }
}

document.getElementById("ifElseIf").onclick = function() {

    var num1 = 10;
    var num2 = 15
    if (num1 >= num2) {
        alert("Yes, your condition id true")
    } else if (num1 == num2) {
        alert("Yes, your second condition is true.")
    } else if (num1 <= num2) {
        alert("Yes, your third condition is true.")
    }
    else {
        alert("No, your condition is false.")
    }
}

document.getElementById("testingSetsOfConditions").onclick = function() {

    var age = prompt("Your Age?");
    var weight = prompt("Your Weight?");

    if(age >= 18 && weight <= 70 ) {

        alert("You are a smart man.")

    } else if (age >= 18 && weight > 70) {

        alert("You are a fat man.")
    }
    else  {
        alert("You are a baby.")
    }
}


document.getElementById("ifStatementsNested").onclick = function() {


    var age = prompt("Your age?");

    if (age >= 18) {

        var weight = prompt("Your weight?");

        if (weight <= 70) {
            alert("You are a smart man.")
        } else {
            alert("You are a fat man.")
        }
    } else {
        alert("You are a baby.");
    }
}

document.getElementById("login").onclick = function() {

    var userName = prompt("Your Username");
    var password = prompt("Your Password"); 

    if (userName === "ahmad" && password === "123"){
        alert("You ar logged in")
    }
    else {
        alert("Username or Password Incorrect!")
    }
}


// Clear Statement 
function clrStatement() {
    document.getElementById("statement").innerHTML = " ";
}
// Clear Output / Result 
function clrOutput() {
    document.getElementById("result").innerHTML = " ";
}