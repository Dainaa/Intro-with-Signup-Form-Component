//JavaScript for Intro-Component-with-Signup-Form

function validateEmail(elementValue) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue);
}

function validateForm() {
    var firstNameAlert = document.getElementById("fname-alert");

    var error1=document.getElementById("error-1");
    var error2=document.getElementById("error-2");
    var error3=document.getElementById("error-3");
    var error4=document.getElementById("error-4");

    var inputBox = document.getElementById("fname");
    var inputCheck = document.forms["signupform"]["fname"].value;
    if (inputCheck == "") {
        firstNameAlert.innerHTML = "First Name cannot be empty";
        firstNameAlert.style.visibility = "visible";
        inputBox.style.border="2px solid hsl(0, 100%, 74%)";
        inputBox.classList.add('error-text');
        error1.style.visibility="visible";
    }

    else{
        firstNameAlert.style.visibility="hidden";
    }
    var lastNameAlert = document.getElementById("lname-alert");
    var inputCheck = document.forms["signupform"]["lname"].value;
    var inputBox = document.getElementById("lname");
    if (inputCheck == "") {
        lastNameAlert.innerHTML = "Last Name cannot be empty";
        lastNameAlert.style.visibility = "visible";
        inputBox.style.border="2px solid hsl(0, 100%, 74%)";
        inputBox.classList.add('error-text');
        error2.style.visibility="visible";
    }
    else{
        lastNameAlert.style.visibility="hidden";
    }
    var emailAlert = document.getElementById("email-alert");
    var inputCheck = document.forms["signupform"]["email"].value;
    var inputBox = document.getElementById("email");
    if (inputCheck == "") {
        emailAlert.innerHTML = "Email cannot be empty";
        emailAlert.style.visibility = "visible";
        inputBox.style.border="2px solid hsl(0, 100%, 74%)";
        inputBox.classList.add('error-text');
        error3.style.visibility="visible";
    }
    if (!validateEmail(inputCheck)) {
        emailAlert.innerHTML = "Looks like this is not an email";
        emailAlert.style.visibility = "visible";        
        inputBox.style.border="2px solid hsl(0, 100%, 74%)";
        inputBox.classList.add('error-text');
        error3.style.visibility="visible";

    }
    else{
        emailAlert.style.visibility="hidden";
    }
    var passwordAlert = document.getElementById("password-alert");
    var inputCheck = document.forms["signupform"]["password"].value;
    var inputBox = document.getElementById("password");
    if(inputCheck==""){
        passwordAlert.innerHTML="Password cannot be empty";
        passwordAlert.style.visibility="visible";
        inputBox.style.border="2px solid hsl(0, 100%, 74%)";
        inputBox.classList.add('error-text');
        error4.style.visibility="visible";

    }
    else{
        passwordAlert.style.visibility="hidden";
    }
    return false;


}