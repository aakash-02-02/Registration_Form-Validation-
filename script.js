function validate() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let state = document.getElementById("state").value;
    let zipCode = document.getElementById("zipCode").value;
    let tNCCheckBox = document.getElementById("tNCCheckBox").checked;




    // valid or invalid for firstName.

    let firstNameInvalid = document.getElementById("firstNameInvalid");
    let firstNameValid = document.getElementById("firstNameValid");

    if (firstName === "") {
        firstNameInvalid.style.display = 'block';
        firstNameValid.style.display = 'none';
    }
    else {
        firstNameValid.style.display = 'block';
        firstNameInvalid.style.display = 'none';
    }



    // valid or invalid for lastName

    let lastNameInvalid = document.getElementById("lastNameInvalid");
    let lastNameValid = document.getElementById("lastNameValid");

    if (lastName === "") {
        lastNameInvalid.style.display = 'block';
        lastNameValid.style.display = 'none';
    }
    else {
        lastNameValid.style.display = 'block';
        lastNameInvalid.style.display = 'none';
    }


    // valid or invalid email

    let emailInvalid = document.getElementById("emailInvalid");
    let emailValid = document.getElementById("emailValid");

    if (email === "" || !email.includes("@") || !email.includes(".") || email.startsWith("@") || email.slice(email.lastIndexOf('.')).length < 3) {
        emailInvalid.style.display = 'block';
        emailValid.style.display = 'none';
    }
    else {
        emailValid.style.display = 'block';
        emailInvalid.style.display = 'none';
    }


    // valid or invalid phone number

    let phoneInvalid = document.getElementById("phoneInvalid");
    let phoneValid = document.getElementById("phoneValid");


    if (phoneNumber === "" || phoneNumber.length !== 10 || Number(phoneNumber[0]) < 6) {
        phoneInvalid.style.display = 'block';
        phoneValid.style.display = 'none';
    }
    else {
        phoneValid.style.display = 'block';
        phoneInvalid.style.display = 'none';
    }


    // valid or invalid state


    let stateInvalid = document.getElementById("stateInvalid");
    let stateValid = document.getElementById("stateValid");

    if (state === "") {
        stateInvalid.style.display = 'block';
        stateValid.style.display = 'none'
    }
    else {
        stateValid.style.display = 'block';
        stateInvalid.style.display = 'none';
    }


    // valid or invalid zipcode


    let zipCodeInvalid = document.getElementById("zipCodeInvalid");
    let zipCodeValid = document.getElementById("zipCodeValid");

    if (zipCode === "" || zipCode.length !== 6) {
        zipCodeInvalid.style.display = 'block';
        zipCodeValid.style.display = 'none';
    }
    else {
        zipCodeValid.style.display = 'block';
        zipCodeInvalid.style.display = 'none';
    }


    // Invalid case in CheckBox

    let tnCInvalid = document.getElementById("tnCInvalid");

    if (!tNCCheckBox) {
        tnCInvalid.style.display = "block";
    }
    else {
        tnCInvalid.style.display = "none"
    }
}   


function validate() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let state = document.getElementById("state").value;
    let zipCode = document.getElementById("zipCode").value;
    let tNCCheckBox = document.getElementById("tNCCheckBox").checked;




    // valid or invalid for firstName

    let firstNameInvalid = document.getElementById("firstNameInvalid");
    let firstNameValid = document.getElementById("firstNameValid");

    if (firstName === "") {
        firstNameInvalid.style.display = 'block';
        firstNameValid.style.display = 'none';
    }
    else {
        firstNameValid.style.display = 'block';
        firstNameInvalid.style.display = 'none';
    }



    // valid or invalid for lastName

    let lastNameInvalid = document.getElementById("lastNameInvalid");
    let lastNameValid = document.getElementById("lastNameValid");

    if (lastName === "") {
        lastNameInvalid.style.display = 'block';
        lastNameValid.style.display = 'none';
    }
    else {
        lastNameValid.style.display = 'block';
        lastNameInvalid.style.display = 'none';
    }


    // valid or invalid email

    let emailInvalid = document.getElementById("emailInvalid");
    let emailValid = document.getElementById("emailValid");

    if (email === "" || !email.includes("@") || !email.includes(".") || email.startsWith("@") || email.slice(email.lastIndexOf('.')).length < 3) {
        emailInvalid.style.display = 'block';
        emailValid.style.display = 'none';
    }
    else {
        emailValid.style.display = 'block';
        emailInvalid.style.display = 'none';
    }


    // valid or invalid phone number

    let phoneInvalid = document.getElementById("phoneInvalid");
    let phoneValid = document.getElementById("phoneValid");


    if (phoneNumber === "" || phoneNumber.length !== 10 || Number(phoneNumber[0]) < 6) {
        phoneInvalid.style.display = 'block';
        phoneValid.style.display = 'none';
    }
    else {
        phoneValid.style.display = 'block';
        phoneInvalid.style.display = 'none';
    }


    // valid or invalid state


    let stateInvalid = document.getElementById("stateInvalid");
    let stateValid = document.getElementById("stateValid");

    if (state === "") {
        stateInvalid.style.display = 'block';
        stateValid.style.display = 'none'
    }
    else {
        stateValid.style.display = 'block';
        stateInvalid.style.display = 'none';
    }


    // valid or invalid zipcode


    let zipCodeInvalid = document.getElementById("zipCodeInvalid");
    let zipCodeValid = document.getElementById("zipCodeValid");

    if (zipCode === "" || zipCode.length !== 6) {
        zipCodeInvalid.style.display = 'block';
        zipCodeValid.style.display = 'none';
    }
    else {
        zipCodeValid.style.display = 'block';
        zipCodeInvalid.style.display = 'none';
    }


    // Invalid case in CheckBox

    let tnCInvalid = document.getElementById("tnCInvalid");

    if (!tNCCheckBox) {
        tnCInvalid.style.display = "block";
    }
    else {
        tnCInvalid.style.display = "none"
    }
}   
