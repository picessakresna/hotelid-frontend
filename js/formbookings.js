const startDate = document.getElementById("startDate");
const endDate = document.getElementById("endDate");
const totalRoom = document.getElementById("totalRoom");

const roomNameDisplay = document.getElementById("roomNameDisplay");
const currentPriceDisplay = document.getElementById("currentPriceDisplay");
const totalDaysDisplay = document.getElementById("totalDaysDisplay");
const totalRoomDisplay = document.getElementById("totalRoomDisplay");
const totalPriceDisplay = document.getElementById("totalPriceDisplay");

const currentPrice = 100000;
currentPriceDisplay.innerHTML = "Current Price: Rp" + currentPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let checker_startDate = false;
let checker_endDate = false;
let checker_totalRoom = false;

let today = dateFormatter(new Date());
let tomorrow = dateFormatter(new Date(new Date().getTime() + 24 * 60 * 60 * 1000));

startDate.min = today;
endDate.min = tomorrow;

startDate.addEventListener("change", function (e) {
    if (startDate.value === "") {
        setError(startDate, "Must not be blank");
        checker_startDate = false;
    } else if (startDate.value < today) {
        setError(startDate, "Must not be in the past");
        checker_startDate = false;
    } else if (startDate.value >= endDate.value) {
        setError(startDate, "Must not be after end date");
        checker_startDate = false;
    } else if (startDate.value < endDate.value && endDate.value != "") {
        setSuccess(startDate);
        checker_startDate = true;

        setSuccess(endDate);
        checker_endDate = true;

        totalDaysDisplay.innerHTML = "Total Days: " + calculateTotalDays(startDate.value, endDate.value) + " Days";
        totalPriceDisplay.innerHTML =
            "Total: Rp" +
            calculateTotalPrice(calculateTotalDays(startDate.value, endDate.value), totalRoom.value, currentPrice)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
});

endDate.addEventListener("change", function (e) {
    if (endDate.value === "") {
        setError(endDate, "Must not be blank");
        checker_endDate = false;
    } else if (endDate.value <= startDate.value) {
        setError(endDate, "Must not be before start date");
        checker_endDate = false;
    } else if (endDate.value > startDate.value && startDate.value != "") {
        setSuccess(endDate);
        checker_endDate = true;

        setSuccess(startDate);
        checker_startDate = true;

        totalDaysDisplay.innerHTML = "Total Days: " + calculateTotalDays(startDate.value, endDate.value) + " Days";
        totalPriceDisplay.innerHTML =
            "Total: Rp" +
            calculateTotalPrice(calculateTotalDays(startDate.value, endDate.value), totalRoom.value, currentPrice)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
});

totalRoom.addEventListener("change", function (e) {
    if (totalRoom.value === "") {
        setError(totalRoom, "Must not be blank");
        checker_totalRoom = false;
    } else if (totalRoom.value < 1) {
        setError(totalRoom, "Must be at least 1");
        checker_totalRoom = false;
    } else {
        setSuccess(totalRoom);
        checker_totalRoom = true;

        totalRoomDisplay.innerHTML = "Total Rooms: " + totalRoom.value + " Rooms";
        totalPriceDisplay.innerHTML =
            "Total: Rp" +
            calculateTotalPrice(calculateTotalDays(startDate.value, endDate.value), totalRoom.value, currentPrice)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
});

document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault(); // urgent to prevent form submission

    if (checker_startDate == false || checker_endDate == false || checker_totalRoom == false) {
        // error handling

        setErrorBox("Please fill in the form correctly");
    } else {
        // for debugging
        window.location.href = "bookings.html";
    }
});
