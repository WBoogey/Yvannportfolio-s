const Hamburger = document.querySelector('.Hamburger')

const navLinks = document.querySelector('.navlinks')

const navToggle = () => {
    navLinks.classList.toggle("open")
    if (navLinks.classList.contains("open")) {
        console.log("actif")
        document.querySelector(".Hamburger  .material-symbols-outlined ").innerHTML= "close"
    } else {
        document.querySelector(" .Hamburger .material-symbols-outlined ").innerHTML= "menu"
    }
}

Hamburger.addEventListener('click', navToggle)