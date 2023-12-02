const email = document.getElementById("email");
const password = document.getElementById("password");

let checker_email = false;
let checker_password = false;

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

document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault(); // urgent to prevent form submission

    if (checker_email == false || checker_password == false) {
        // error handling
    } else {
        window.location.href = "home.html";

        // database check
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
