/* ANIMATION BURGER MENU */

document.querySelector(".burger").addEventListener('click', () =>{

  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-burger-item');
  const navLinks = document.querySelectorAll('.nav-burger-item li');

  // Toggle Nav
  nav.classList.toggle('nav-active');

  //Animate Links
  navLinks.forEach((link, index) => {
    if(link.style.animation) {
      link.style.animation = ''
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
    }
  });

  // Burger animation:
  burger.classList.toggle('toggle');
});