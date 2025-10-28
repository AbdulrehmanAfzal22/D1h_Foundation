let currentSlide = 0;
let hamburger = document.getElementById("hamburger")
let menu = document.getElementById("menu11")
let close = document.getElementById("button1")
let html = document.documentElement;
let donate = document.getElementById("button-donate")
const slides = document.querySelectorAll('.slide');
let donate2 = document.getElementById("button-donate2")
let join = document.getElementById("join")



donate.addEventListener("click", function() {
  window.location.href = "donate.html";
});

donate2.addEventListener("click", function() {
  window.location.href = "donate.html";
});

join.addEventListener("click", function() {
  window.location.href = "donate.html";
});

hamburger.addEventListener("click", function (event) {
  event.stopPropagation(); 
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});


close.addEventListener("click", function (event) {
  event.stopPropagation(); 
  menu.style.display = "none";
});


html.addEventListener("click", function () {
  menu.style.display = "none"; 
});


menu.addEventListener("click", function (event) {
  event.stopPropagation(); 
});


function changeSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

setInterval(changeSlide, 10000); 