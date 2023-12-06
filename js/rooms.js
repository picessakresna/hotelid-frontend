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

const selectBtn = document.querySelector(".navigation-select-btn"),
  items = document.querySelectorAll(".navigation-item");

selectBtn.addEventListener("click", () => {
  selectBtn.classList.toggle("open");
});

items.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("checked");

    let checked = document.querySelectorAll(".checked"),
      btnText = document.querySelector(".navigation-btn-text");

    if (checked && checked.length > 0) {
      btnText.innerText = `${checked.length} Selected`;
    } else {
      btnText.innerText = "Select Language";
    }
  });
});

const tabsBox = document.querySelector(".tabs-box"),
  allTabs = tabsBox.querySelectorAll(".tab"),
  arrowIcons = document.querySelectorAll(".icon i");
let isDragging = false;
const handleIcons = (scrollVal) => {
  let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
  arrowIcons[0].parentElement.style.display = scrollVal <= 0 ? "none" : "flex";
  arrowIcons[1].parentElement.style.display =
    maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
};
arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    // if clicked icon is left, reduce 350 from tabsBox scrollLeft else add
    let scrollWidth = (tabsBox.scrollLeft += icon.id === "left" ? -340 : 340);
    handleIcons(scrollWidth);
  });
});
allTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabsBox.querySelector(".active").classList.remove("active");
    tab.classList.add("active");
  });
});
const dragging = (e) => {
  if (!isDragging) return;
  tabsBox.classList.add("dragging");
  tabsBox.scrollLeft -= e.movementX;
  handleIcons(tabsBox.scrollLeft);
};
const dragStop = () => {
  isDragging = false;
  tabsBox.classList.remove("dragging");
};
tabsBox.addEventListener("mousedown", () => (isDragging = true));
tabsBox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);