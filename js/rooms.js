/* 
load more button 
*/
let loadMoreBtn = document.querySelector("#load-more");
let boxes = [...document.querySelectorAll(".container .box-container .box")];

let currentItem = 3;
let totalItems = boxes.length;

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

    // Check the number of remaining items
    totalItems = boxes.length - currentItem;

    if (totalItems <= 0) {
        loadMoreBtn.style.display = "none";
    }
};

/* 
check box filter 
*/
const selectBtn = document.querySelector(".navigation-select-btn"),
    items = document.querySelectorAll(".navigation-item");

selectBtn.addEventListener("click", () => {
    selectBtn.classList.toggle("open");
});

items.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");

        let checked = document.querySelectorAll(".checked"),
            btnText = document.querySelector(".btn-text");

        if (checked && checked.length > 0) {
            btnText.innerText = `${checked.length} Selected`;
        } else {
            btnText.innerText = "Select Language";
        }
    });
});

// Select the navigation items
const navigationItems = document.querySelectorAll(".navigation-item");

// Store the selected categories
let selectedCategories = [];

// Add a 'click' event listener to each navigation item
navigationItems.forEach((item) => {
    item.addEventListener("click", function () {
        // Get the text of the clicked navigation item
        const category = this.querySelector(".navigation-item-text").textContent;

        // Check if the navigation item is checked
        if (this.classList.contains("checked")) {
            // If the navigation item is checked, add its category to the array
            selectedCategories.push(category);
        } else {
            // If the navigation item is not checked, remove its category from the array
            selectedCategories = selectedCategories.filter((selectedCategory) => selectedCategory !== category);
        }

        // Reset the currentItem variable and hide all items that should be hidden initially
        currentItem = 3;
        boxes.forEach((box, index) => {
            if (index >= currentItem) {
                box.style.display = "none";
            }
        });

        // Filter the property cards to show only the items that match the selected categories
        const propertyCards = document.querySelectorAll(".property-card");
        let displayedCount = 0;
        propertyCards.forEach((card) => {
            if (selectedCategories.length === 0 || selectedCategories.includes(card.getAttribute("data-category"))) {
                // If there are no selected categories or if the category of the property card is in the array, display the property card
                card.style.display = "";
                displayedCount++;
            } else {
                // Hide the property card
                card.style.display = "none";
            }
        });

        // If there are more than 3 displayed property cards, show the "Load More" button
        if (displayedCount > 3) {
            loadMoreBtn.style.display = "";
        } else {
            loadMoreBtn.style.display = "none";
        }
    });
});

/* 
tabs box filter 
*/
const tabsBox = document.querySelector(".tabs-box"),
    allTabs = tabsBox.querySelectorAll(".tab"),
    arrowIcons = document.querySelectorAll(".icon i");

function adjustDisplay() {
    // Calculate the cumulative width of the tab items
    let cumulativeTabWidth = 0;
    allTabs.forEach((tab) => {
        cumulativeTabWidth += tab.offsetWidth;
    });
    let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;

    // Compare the cumulative width of the tab items with the width of the tab box
    // and check if the viewport width is greater than 768 pixels
    if ((cumulativeTabWidth > 1000 && window.innerWidth > 768) || (maxScrollableWidth && window.innerWidth > 768)) {
        // If the cumulative width of the tab items is greater than 1000px
        // and the viewport width is greater than 768 pixels, show the arrow icons
        arrowIcons[0].parentElement.style.display = "none";
        arrowIcons[1].parentElement.style.display = "flex";
    } else {
        // If not, hide the arrow icons
        arrowIcons[0].parentElement.style.display = "none";
        arrowIcons[1].parentElement.style.display = "none";
    }
}

// Run adjustDisplay when the page loads
adjustDisplay();

// Run adjustDisplay whenever the viewport size changes
window.addEventListener("resize", adjustDisplay);
let isDragging = false;
const handleIcons = (scrollVal) => {
    let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
    if (window.innerWidth > 768) {
        arrowIcons[0].parentElement.style.display = scrollVal <= 0 ? "none" : "flex";
        arrowIcons[1].parentElement.style.display = maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
    } else {
        arrowIcons[0].parentElement.style.display = "none";
        arrowIcons[1].parentElement.style.display = "none";
    }
};

arrowIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
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
