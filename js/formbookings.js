const startDate = document.getElementById("startDate");
const endDate = document.getElementById("endDate");

let today = dateFormatter(new Date());
let tomorrow = dateFormatter(new Date(new Date().getTime() + 24 * 60 * 60 * 1000));

startDate.min = today;
startDate.value = today;

endDate.min = tomorrow;
endDate.value = tomorrow;

function dateFormatter(date) {
    let dd = String(date.getDate()).padStart(2, "0");
    let mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = date.getFullYear();

    return yyyy + "-" + mm + "-" + dd;
}
