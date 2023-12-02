const nameUser = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confPassword = document.getElementById("confPassword");

var checker_name = false;
var checker_phone = false;
var checker_email = false;
var checker_password = false;
var checker_confPassword = false;

nameUser.addEventListener("keyup", function (e) {
    if (nameUser.value === "") {
        // tampilkan error dan tambahkan class error
        setError(nameUser, "Name must not be blank");
        checker_name = false;
    } else if (checkSymbol(nameUser.value)) {
        // tampilkan error dan tambahkan class error
        setError(nameUser, "Name must not contain Symbol");
        checker_name = false;
    } else if (nameUser.value.length < 2) {
        // tampilkan error dan tambahkan class error
        setError(nameUser, "Name must be more than one letter");
        checker_name = false;
    } else if (!checkName(nameUser.value)) {
        // tampilkan error dan tambahkan class error
        setError(nameUser, "Name must not begin or end with a space");
        checker_name = false;
    } else {
        // tambahkan class success
        setSuccess(nameUser);
        checker_name = true;
    }
});

phone.addEventListener("keyup", function (e) {
    if (phone.value === "") {
        // tampilkan error dan tambahkan class error
        setError(phone, "The phone number must not be blank");
        checker_phone = false;
    } else if (checkString(phone.value)) {
        // tampilkan error dan tambahkan class error
        setError(phone, "The phone number may not contain letters");
        checker_phone = false;
    } else if (phone.value.length < 3) {
        // tampilkan error dan tambahkan class error
        setError(phone, "The phone number must consist of 3 to 12 numbers");
        checker_phone = false;
    } else if (checkSymbol(phone.value)) {
        // tampilkan error dan tambahkan class error
        setError(phone, "The phone number must not contain Symbol");
        checker_phone = false;
    } else if (checkWhiteSpace(phone.value)) {
        // tampilkan error dan tambahkan class error
        setError(phone, "The phone number must not begin or end with a space");
        checker_phone = false;
    } else if (!checkPhone(phone.value)) {
        // tampilkan error dan tambahkan class error
        setError(phone, "Invalid phone number");
        checker_phone = false;
    } else {
        // tambahkan class success
        setSuccess(phone);
        checker_phone = true;
    }
});

email.addEventListener("keyup", function (e) {
    if (email.value === "") {
        setError(email, "Email must not be blank");
        checker_email = false;
    } else if (checkWhiteSpace(email.value)) {
        setError(email, "Email must not contain white space");
        checker_email = false;
    } else if (!checkEmail(email.value)) {
        setError(email, "Invalid email");
        checker_email = false;
    } else {
        setSuccess(email);
        checker_email = true;
    }
});

password.addEventListener("keyup", function (e) {
    if (password.value === "") {
        setError(password, "Password must not be blank");
        checker_password = false;
    } else if (password.value.length < 5) {
        setError(password, "Passwords must be 5 to 28 characters long");
        checker_password = false;
    } else if (checkWhiteSpace(password.value)) {
        setError(password, "Password must not contain white space");
        checker_password = false;
    } else {
        setSuccess(password);
        checker_password = true;
    }
});

confPassword.addEventListener("keyup", function (e) {
    if (confPassword.value === "") {
        setError(confPassword, "Password must not be blank");
        checker_confPassword = false;
    } else if (confPassword.value.length < 5) {
        setError(confPassword, "Passwords must be 5 to 28 characters long");
        checker_confPassword = false;
    } else if (checkWhiteSpace(confPassword.value)) {
        setError(confPassword, "Password must not contain white space");
        checker_confPassword = false;
    } else if (confPassword.value !== password.value) {
        setError(confPassword, "Password does not match");
        setError(password, "Password does not match");

        checker_confPassword = false;
        checker_password = false;
    } else {
        setSuccess(confPassword);
        checker_confPassword = true;

        setSuccess(password);
        checker_password = true;
    }
});

document.getElementById("submit").addEventListener("click", function (event) {
    if (checker_name == false || checker_phone == false || checker_email == false || checker_password == false || checker_confPassword == false) {
        // prevent form submission
        event.preventDefault();

        // error handling
    } else {
        console.log("Signup successful");
        // database check
        window.location.href = "home.html";
    }
});

function setError(input, message) {
    const inputBox = input.parentElement;
    const small = inputBox.querySelector("small");

    // add error message inside small
    small.innerText = message;

    // add error class
    inputBox.className = "input-box error";
}

function setSuccess(input) {
    const inputBox = input.parentElement; // .input-box

    // add success class
    inputBox.className = "input-box success";
}
