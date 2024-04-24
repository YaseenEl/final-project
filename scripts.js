"use strict";

function changeModes(){
    let body = document.body;

    body.classList.toggle("dark");
}

document.getElementById("changeModes").addEventListener("click", changeModes);

function dbDouble(){
    let dbDouble = document.getElementById("dbDouble");
    let chBurger = document.getElementById("chBurger");
    let hBurger = document.getElementById("hBurger");
    let fries = document.getElementById("fries");

    dbDouble.classList.add("currentItem");
    dbDouble.classList.remove("hidden");
    chBurger.classList.remove("currentItem");
    chBurger.classList.add("hidden");
    hBurger.classList.remove("currentItem");
    hBurger.classList.add("hidden");
    fries.classList.remove("currentItem");
    fries.classList.add("hidden");
}

document.getElementById("btn1").addEventListener("click", dbDouble);

function chBurger(){
    let dbDouble = document.getElementById("dbDouble");
    let chBurger = document.getElementById("chBurger");
    let hBurger = document.getElementById("hBurger");
    let fries = document.getElementById("fries");

    dbDouble.classList.remove("currentItem");
    dbDouble.classList.add("hidden");
    chBurger.classList.add("currentItem");
    chBurger.classList.remove("hidden");
    hBurger.classList.remove("currentItem");
    hBurger.classList.add("hidden");
    fries.classList.remove("currentItem");
    fries.classList.add("hidden");
}

document.getElementById("btn2").addEventListener("click", chBurger);

function hBurger(){
    let dbDouble = document.getElementById("dbDouble");
    let chBurger = document.getElementById("chBurger");
    let hBurger = document.getElementById("hBurger");
    let fries = document.getElementById("fries");

    dbDouble.classList.remove("currentItem");
    dbDouble.classList.add("hidden");
    chBurger.classList.remove("currentItem");
    chBurger.classList.add("hidden");
    hBurger.classList.add("currentItem");
    hBurger.classList.remove("hidden");
    fries.classList.remove("currentItem");
    fries.classList.add("hidden");
}

document.getElementById("btn3").addEventListener("click", hBurger);

function fries(){
    let dbDouble = document.getElementById("dbDouble");
    let chBurger = document.getElementById("chBurger");
    let hBurger = document.getElementById("hBurger");
    let fries = document.getElementById("fries");

    dbDouble.classList.remove("currentItem");
    dbDouble.classList.add("hidden");
    chBurger.classList.remove("currentItem");
    chBurger.classList.add("hidden");
    hBurger.classList.remove("currentItem");
    hBurger.classList.add("hidden");
    fries.classList.add("currentItem");
    fries.classList.remove("hidden");
}

document.getElementById("btn4").addEventListener("click", fries);

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function guessGame(event){
    event.preventDefault();
    let userGuess = parseInt(document.getElementById("userGuess").value);
    let luckyNum = document.getElementById("luckyNum");
    let randomNum = getRandomNumber(1, 10);
    let gameMessage = document.getElementById("guessMsg");
    let userNum = document.getElementById("userNum");

    userNum.innerHTML = userGuess;
    luckyNum.innerHTML = randomNum;

    console.log(userGuess == randomNum);
    if(userGuess == randomNum){
        gameMessage.innerHTML = "Congratulations! Looks like today's your lucky day!";
    }else{
        gameMessage.innerHTML = "Sorry. Try again.";
    }
}

document.getElementById("guessNow").addEventListener("click", guessGame);


function validateForm(event){
    event.preventDefault();

    let fName = document.getElementById("fullName");
    let phoneN = document.getElementById("phoneNum");
    let emailAddr = document.getElementById("emailAddr");
    let phone = document.getElementById("phone");
    let email = document.getElementById("email");
    let message = document.getElementById("message");

    let contactMethod = "";

    let errors = "<ul>";

    let preferredContact = document.getElementById("preferredContact");
    let confirm = document.getElementById("confirm");

    preferredContact.classList.add("hidden");
    confirm.classList.add("hidden");

    let fNameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    let phoneNRegex = /^(\([0-9]{3}\)\s*|[0-9]{3}\-)[0-9]{3}-[0-9]{4}$/;

    fName.classList.remove("error");
    phoneN.classList.remove("error");
    emailAddr.classList.remove("error");
    message.classList.remove("error");

    fName.nextElementSibling.classList.add("hidden");
    phoneN.nextElementSibling.classList.add("hidden");
    emailAddr.nextElementSibling.classList.add("hidden");
    message.nextElementSibling.classList.add("hidden");
    preferredContact.innerHTML = "";
    confirm.innerHTML = "";

    let isValid = true;

    if(!fNameRegex.test(fName.value)){
        isValid = false;
        fName.classList.add("error");
        fName.nextElementSibling.classList.remove("hidden");
    }

    if(!phoneNRegex.test(phoneN.value)){
        isValid = false;
        phoneN.classList.add("error");
        phoneN.nextElementSibling.classList.remove("hidden");
    }

    if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/.test(emailAddr.value)){
        isValid = false;
        emailAddr.classList.add("error");
        emailAddr.nextElementSibling.classList.remove("hidden");
    }

    if(phone.checked){
        contactMethod = "Phone";
        preferredContact.classList.remove("hidden");
        preferredContact.innerHTML = "Phones. Excellent cellular service!";
    }else if(email.checked){
        contactMethod = "Email";
        preferredContact.classList.remove("hidden");
        preferredContact.innerHTML = "Emails. Just like writing a message, only digital.";
    }

    if(!message.value){
        isValid = false;
        message.classList.add("error");
        message.nextElementSibling.classList.remove("hidden");
    }

    if(isValid){
        confirm.classList.remove("hidden");
        confirm.innerHTML = "<strong>You Entered:</strong><br>Full Name: " + fName.value + "<br>Phone Number: " + phoneN.value + "<br>Email Address: " + emailAddr.value + "<br>Contact Method: " + contactMethod;
        document.getElementById("accountInfo").submit();

        fName.value = "";
        phoneN.value = "";
        emailAddr.value = "";
        message.value = "";
        phone.checked = true;
        email.checked = false;

        fName.nextElementSibling.classList.add("hidden");
        phoneN.nextElementSibling.classList.add("hidden");
        emailAddr.nextElementSibling.classList.add("hidden");
        message.nextElementSibling.classList.add("hidden");
        preferredContact.innerHTML = "";
    }else{
        confirm.classList.add("hidden");
        confirm.innerHTML = errors = "</ul>";
    }
}

document.getElementById("mySubmit").addEventListener("click", validateForm);