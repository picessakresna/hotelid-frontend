const edit = document.getElementById("edit");
const checkout = document.getElementById("checkout");
const review = document.getElementById("review");

edit.addEventListener("click", () => {
    sessionStorage.setItem("statusBookings", "edit");
    window.location.href = "formbookings.html";
});

checkout.addEventListener("click", () => {});

review.addEventListener("click", () => {
    window.location.href = "formreview.html";
});
