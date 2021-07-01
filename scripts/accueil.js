const h1Anim = document.querySelector("h1");
const h2Anim = document.querySelector("h2");


let typeHOne = new Typewriter(h1Anim, {
  delay: 180,
  cursor: ""
})

typeHOne
.typeString("L'Odyssey")
.start()


let typeHTwo = new Typewriter(h2Anim, {
  delay: 120,
  deleteSpeed: 40,
  cursor: "."
})

typeHTwo
  .pauseFor(2800)
  .typeString('Retrouver les saveurs ')
  .pauseFor(300)
  .typeString('<span style="color: #E05E21">Html</span>')
  .pauseFor(300)
  .deleteChars(4)
  .typeString('<span style="color: #107BE3">CSS</span>')
  .pauseFor(300)
  .deleteChars(3)
  .typeString('<span style="color: #E7EC2C">Javascript</span>')
  .pauseFor(300)
  .deleteChars(11)
  .typeString('<span style="color: #F76C6C">Wild</span>')
  .pauseFor(1000)
  .start();

  /* Racoon */

  document.querySelector("h1").addEventListener("click", () => {
    const racoon = document.getElementById("accueil-racoon");
    racoon.classList.toggle("accueil-racoon");
  });

  document.getElementById("accueil-racoon").addEventListener("click", () => {
    const racoon = document.getElementById("accueil-racoon");
    racoon.classList.remove("accueil-racoon");
  });

