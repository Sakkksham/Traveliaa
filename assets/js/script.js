const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", () => {
    preloader.classList.add("remove");
});


const addEventsOnElement = (elements, eventType, callback) => {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
    }
};


const navbar= document.querySelector("[data-navbar]");
const navToggle = document.querySelectorAll("[data-nav-toggle]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventsOnElement(navTogglers, "click", toggleNav);

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {

    header.classList[window.scrollY > 100 ? "add" : "remove"]("active");


     

});