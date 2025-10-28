let hamburger = document.getElementById("hamburger")
let menu = document.getElementById("menu11")
let close = document.getElementById("button1")

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