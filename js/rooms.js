let loadMoreBtn = document.querySelector("#load-more");
let boxes = [...document.querySelectorAll(".container .box-container .box")];

let currentItem = 3;
loadMoreBtn.style.display = "none";

if (currentItem >= boxes.length) {
    loadMoreBtn.style.display = "none";
} else {
    loadMoreBtn.style.display = "";
}

loadMoreBtn.onclick = () => {
    for (var i = currentItem; i < currentItem + 3; i++) {
        if (i < boxes.length) {
            boxes[i].style.display = "inline-block";
        }
    }
    currentItem += 3;
};
