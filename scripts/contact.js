// Anim Img contact

document.getElementById('main-title').addEventListener("mouseover", () => {
  const img = document.getElementById('contact-img');
  img.classList.add("img-filter-over");
})

document.getElementById('main-title').addEventListener("mouseleave", () => {
  const img = document.getElementById('contact-img');
  img.classList.remove("img-filter-over");
})

// Modal

// document.querySelector("form-container").addEventListener("submit", (event) => {
document.querySelector(".form-container").addEventListener("submit", (event) => {

  const modalBg = document.querySelector(".modal-bg");
  const modal = document.querySelector(".modal");

  event.preventDefault();
  const name = document.querySelector("#name").value;
  // const message = `Thank you ${name} for submitting your message, your message will be forwarded to the team of Wild Code School very soon!`;
  modalBg.classList.add("modal-bg-active");
  const message = document.querySelector(".modal-title");
  message.innerHTML = `Thank you <span style="color: var(--subtitle3-color)">${name}</span> for submitting your message, your message will be forwarded to the team of Wild Code School very soon !`;
});

document.querySelector(".modal-btn").addEventListener("click", () => {
  const modalBg = document.querySelector(".modal-bg");
  console.log('modalBg:', modalBg)
  modalBg.classList.remove("modal-bg-active");
});


/* Racoon */

document.getElementById('main-title').addEventListener("click", () => {
  const racoon = document.getElementById("contact-racoon");
  racoon.classList.toggle("shy-racoon");
})

document.getElementById("contact-racoon").addEventListener("click", () => {
  const racoon = document.getElementById("contact-racoon");
  racoon.classList.remove("shy-racoon");
})