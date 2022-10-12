// Get Slider Items
let sliderImages = Array.from(document.querySelectorAll(".slider-container img "));

// Get Number Of Slider
let sliderCoun = sliderImages.length;
// Set Current Slider
let currentSlider = 1;
// Slider Number Element
let sliderNumEle = document.getElementById("slider-number");
// Previous And Next Button
let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");
// Handel  Previous And  Next Button
prevButton.onclick = prevSlide;
nextButton.onclick = nextSlide;
// Create The Main UL Function
let paginationElement = document.createElement("ul");
// Set id On Create ul Element
paginationElement.setAttribute("id", "pagination-ul");
// Create List Items Based on Slide Count (li)
for (let i = 1; i <= sliderCoun; i++) {
    // Create The li
    let paginationItem = document.createElement("li");
    // Create  Custom Attribute
    paginationItem.setAttribute("data-index", i);
    // Set Items Content
    paginationItem.appendChild(document.createTextNode(i));
    // Append Items To The Main ul
    paginationElement.appendChild(paginationItem);
}
// Add The Creat ul Element To page
document.getElementById("indicators").appendChild(paginationElement);
// Get The New Create ul
let paginationUl = document.getElementById("pagination-ul");
// Get Slider Items
let paginationsBullets = Array.from(document.querySelectorAll("#pagination-ul li "));
// loop throgh all bullets items
for (let i = 0; i < paginationsBullets.length; i++) {
    paginationsBullets[i].onclick = function() {
        currentSlider = parseInt(this.getAttribute("data-index"));
        theChecker();

    }
};
// Trigger the checker function 
theChecker();
// Previous function
function prevSlide() {
    if (prevButton.classList.contains("disabled")) {
        return false;

    } else {
        currentSlider--;
        theChecker();
    }
}
// Next function
function nextSlide() {
    if (nextButton.classList.contains("disabled")) {
        return false;
    } else {
        currentSlider++;
        theChecker();
    }
}
// Creat the Checker function
function theChecker() {
    // set the slide number
    sliderNumEle.textContent = "Slide #" + (currentSlider) + " of " + (sliderCoun);
    // remove all active class
    removeAllActive();
    // set active class on current slider
    sliderImages[currentSlider - 1].classList.add("active");
    // set active class on current pagination items
    paginationUl.children[currentSlider - 1].classList.add("active");
    // check if current slider is the first
    if (currentSlider === 1) {
        // add previous button class disabled
        prevButton.classList.add("disabled");
    } else {
        // remove previous button class disabled
        prevButton.classList.remove("disabled");
    }
    // check if current slider is the last
    if (currentSlider == sliderCoun) {
        // add previous button class disabled
        nextButton.classList.add("disabled");

    } else {
        // remove previous button class disabled
        nextButton.classList.remove("disabled");
    }
}
// Remove active class from image and pagination bullets
function removeAllActive() {
    // loop through images
    sliderImages.forEach(function(img) {
            img.classList.remove("active")
        })
        // loop through paginations bullets
    paginationsBullets.forEach(function(bullets) {
        bullets.classList.remove("active")
    })
}