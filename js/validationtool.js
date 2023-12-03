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