const modalBtn = document.querySelector(".modal-btn");
const modalBg = document.querySelector(".modal-bg");
const modalClose = document.querySelector(".modal-close");
const sendBtn = document.querySelector(".send-btn");
const readMore = document.querySelector(".read-more");
const tableImg = document.querySelector(".table-img");


modalBtn.addEventListener("click", function(){
    modalBg.classList.add("bg-active");
});

modalClose.addEventListener("click", function(){
    modalBg.classList.remove("bg-active");
});

sendBtn.addEventListener("click", function(event){
    event.preventDefault();
    alert("Merci d'avoir choisi l'Odyssey!");
});

tableImg.addEventListener("mouseover", function(){
    tableImg.classList.toggle("fade");
    readMore.classList.toggle("visible");
});


