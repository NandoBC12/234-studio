const hiddenElements =
document.querySelectorAll(".hidden");

const observer =
new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach((el) =>
observer.observe(el));


const eventCard = document.querySelector(".event-card");
const eventMenu = document.querySelector(".event-menu");

eventCard.addEventListener("click", (e) => {
    e.stopPropagation();
    eventMenu.classList.toggle("active");
});

document.addEventListener("click", () => {
    eventMenu.classList.remove("active");
});

const weddingCard =
document.querySelector(".wedding-card");

const weddingMenu =
document.querySelector(".wedding-menu");

weddingCard.addEventListener("click", (e)=>{

    e.stopPropagation();

    weddingMenu.classList.toggle("active");

});

const websiteCard = document.querySelector(".website-card");
const websiteMenu = document.querySelector(".website-menu");

websiteCard.addEventListener("click", (e) => {
    e.stopPropagation();
    websiteMenu.classList.toggle("active");
});

document.addEventListener("click", () => {
    websiteMenu.classList.remove("active");
});

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});