const hamburger = document.querySelector('.Hamburger');
const navLinks = document.querySelector('.navlinks');
const navLinksItems = document.querySelectorAll('.navlinks-items az');

const navToggle = () => {
    navLinks.classList.toggle("open");
    if (navLinks.classList.contains("open")) {
        console.log("actif");
        document.querySelector(".Hamburger .material-symbols-outlined").innerHTML = "close";
    } else {
        document.querySelector(".Hamburger .material-symbols-outlined").innerHTML = "menu";
    }
};

hamburger.addEventListener('click', navToggle);

navLinksItems.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        console.log("remove");
    });
});

const toggle = () => {
    console.log('remove');
};

navLinks.addEventListener("click", toggle);

console.log(navLinksItems)
console.log(hamburger)
