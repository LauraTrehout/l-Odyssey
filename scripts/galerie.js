const classicGallery = document.querySelector("#section-classic");
const veganGallery = document.querySelector("#section-vegan");
const spicyGallery = document.querySelector("#section-spicy");

const courseToAdd = [
    {
        section: "classic",
        name: "falafels",
        picture: {src:"ressources/desktop/classic-entree.jpg", alt:"falafels"},
        info: "fresh - gluten free - nut free - lactose free"
    },
    {
        section: "classic",
        name: "Burger Angus frites",
        picture: {src:"ressources/desktop/classic-main.jpg", alt:"Burger Angus frites"}, 
        info: "fresh - not so healthy but yummy"
    },
    {
        section: "classic",
        name: "cheesecake",
        picture: {src:"ressources/desktop/classic-dessert.jpg", alt:"cheesecake"}, 
        info: "fresh - homemade"
    },
    {
        section: "vegan",
        name: "salade de tofu",
        picture: {src:"ressources/desktop/vegan-entree.jpg", alt:"salade de tofu"},
        info: "fresh - low carb - lactose free"
    },
    {
        section: "vegan",
        name: "vegan burger",
        picture: {src:"ressources/desktop/vegan-main.jpg", alt:"vegan burger"},
        info: "fresh - nut free - lactose free"
    },
    {
        section: "vegan",
        name: "crème coco tapioca",
        picture: {src:"ressources/desktop/vegan-dessert.jpg", alt:"crème coco tapioca"},
        info: "fresh - lactose free"
    },
    {
        section: "spicy",
        name: "Gambas harissa",
        picture: {src:"ressources/desktop/spicy-entree.jpg", alt:"Gambas harissa"},
        info: "fresh - nut free - spicy"
    },
    {
        section: "spicy",
        name: "spicy Burger",
        picture: {src:"ressources/desktop/spicy-main.jpg", alt:"spicy Burger"},
        info: "fresh - nut free - spicy"
    },
    {
        section: "spicy",
        name: "glace choco piment",
        picture: {src:"ressources/desktop/spicy-dessert.jpg", alt:"glace choco piment"},
        info: "spicy - yummy"
    },

] 

const priceClasssicMenu = document.createElement('h5');
priceClasssicMenu.innerHTML = "Menu HTML";
classicGallery.appendChild(priceClasssicMenu);

const priceVeganMenu = document.createElement('h5');
priceVeganMenu.innerHTML = "Menu CSS";
veganGallery.appendChild(priceVeganMenu);

const priceSpicyMenu = document.createElement('h5');
priceSpicyMenu.innerHTML = "Menu JS";
spicyGallery.appendChild(priceSpicyMenu);

function createCard(courseToAdd) {

    const courseContainer = document.createElement('div'); // cree une div dans const courseContainer
    courseContainer.classList.add('course-container'); // ajoute une class a la div

    if (courseToAdd.section === "classic") {
      classicGallery.appendChild(courseContainer); // ajoute div.course-container a classicGallery  
    } else if (courseToAdd.section === "vegan") {
        veganGallery.appendChild(courseContainer);
    } else {
        spicyGallery.appendChild(courseContainer);
    }

    const cardImg = document.createElement('img');
    cardImg.src = courseToAdd.picture.src;
    cardImg.alt = courseToAdd.picture.alt;
    cardImg.classList.add("gallery-picture");
    cardImg.classList.add("show-on-scroll");
    courseContainer.appendChild(cardImg); 

    const titleCard = document.createElement('h2');
    //titleCard.classList.add() mais pas de class particuliere
    titleCard.innerHTML = courseToAdd.name;
    courseContainer.appendChild(titleCard);

    const infoCard  = document.createElement('h3');
    infoCard.innerHTML = courseToAdd.info;
    courseContainer.appendChild(infoCard);
}

for (let i = 0 ; i < courseToAdd.length ; i++)
    createCard(courseToAdd[i]);


// STICKY HEADER //
// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyMenu()};

// Get the nav
const navGallery  = document.getElementById("nav-gallery");

// Get the offset position of the navbar
const sticky = navGallery.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyMenu() {
    if (window.pageYOffset > sticky) {
    navGallery.classList.add("sticky");
    } else {
    navGallery.classList.remove("sticky");
    }
}

// CLASS BUTTON PAGE ACTIVE //
//Get the container element
const buttonContainer = document.querySelector("#nav-gallery ul");
// Get all buttons with class="btn" inside the container
const btns = buttonContainer.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
        const current = document.getElementsByClassName("active");
        // If there's no active class
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", '');
        }
        // Add the active class to the current/clicked button
        this.className += " active";
    });
}

// ANIMATION ON SCROLL //

// scroll should be the window.requestAnimationFrame method
const scroll = window.requestAnimationFrame ||
    function(callback){ window.setTimeout(callback, 1000/60)};
// grab the elements on the page we want to look out for.
const elementsToShow = document.querySelectorAll('.show-on-scroll');
// Let’s set up that looping function.
function loop() {
    elementsToShow.forEach(function (element) {
        //  if it’s in the viewport > visible else invisible
    if (isElementInViewport(element)) {
        element.classList.add('is-visible');
    } else {
        element.classList.remove('is-visible');
    }
    });
    scroll(loop);
}
// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
    (rect.top <= 0
        && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}