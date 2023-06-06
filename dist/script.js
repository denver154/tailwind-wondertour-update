const headerNav = document.querySelector('.header__nav');
const toggleMenu = document.querySelector('.toggle__menu');
toggleMenu.addEventListener('click', ()=>{
    headerNav.classList.toggle('open');
    toggleMenu.classList.toggle('open');
    closeCNav();
});

const contactNav = document.querySelector('.contact__nav');
const toggleContact = document.querySelector('.toggle__contact');
toggleContact.addEventListener('click', ()=>{
    contactNav.classList.toggle('open');
    toggleContact.classList.toggle('open');
    closehNav();
});

function closehNav(){
    headerNav.classList.remove("open");
    toggleMenu.classList.remove("open");
}

function closeCNav(){
  contactNav.classList.remove("open");
  toggleContact.classList.remove("open");
}

const nav = document.querySelectorAll(".header__nav ul li a");
nav.forEach((baba) => {
  baba.addEventListener("click", () => {
    baba.nextElementSibling.classList.toggle("open");
    baba.querySelector("i").classList.toggle("open");
  });
});

const servicesNav = document.querySelectorAll(".text__nav__link");
const servicesContent = document.querySelectorAll(".text__content");
servicesNav.forEach((serv) => {
  serv.addEventListener("click", () => {
    removeActiveStar();
    serv.classList.add("active");
    const activeContent = document.querySelector(`#${serv.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  });
});

function removeActiveStar() {
  servicesNav.forEach((serv) => {
    serv.classList.remove("active");
  });
}

function removeActiveContent() {
  servicesContent.forEach((serv) => {
    serv.classList.remove("active");
  });
}