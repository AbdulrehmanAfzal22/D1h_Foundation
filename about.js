let hamburger = document.getElementById("hamburger")
let menu = document.getElementById("menu11")
let close = document.getElementById("button1")
let donate = document.getElementById("button-donate")
let html = document.documentElement;



donate.addEventListener("click", function() {
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
