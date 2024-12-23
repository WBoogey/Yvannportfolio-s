const hamburger = document.querySelector('.Hamburger');
const navLinks = document.querySelector('.navlinks');
const navLinksItems = document.querySelectorAll('.navlinks-items a');

// Fonction pour ouvrir/fermer le menu
const navToggle = () => {
  navLinks.classList.toggle("open");
  
  const icon = document.querySelector(".Hamburger .material-symbols-outlined");
  if (navLinks.classList.contains("open")) {
    icon.innerHTML = "close";
  } else {
    icon.innerHTML = "menu";
  }
};

hamburger.addEventListener('click', navToggle);

// Fermer le menu lorsqu'un lien est cliqué
navLinksItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");

    const icon = document.querySelector(".Hamburger .material-symbols-outlined");
    icon.innerHTML = "menu";
  });
});
