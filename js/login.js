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

        document.querySelector(".error-box").style.display = "flex";
        document.querySelector(".error-message").innerHTML = "Please fill in all fields";
    } else {
        window.location.href = "home.html";

        // database check
    }
});
