
document.querySelectorAll(".nav")[0].addEventListener("click", function(){
  window.scroll({
  top: 1030,
  left: 0,
  behavior: 'smooth'
});
});

document.querySelectorAll(".nav")[1].addEventListener("click", function(){
  window.scroll({
  top: 2020,
  left: 0,
  behavior: 'smooth'
});
});
document.querySelectorAll(".nav")[3].addEventListener("click", function(){
  window.scroll({
  top: 1000,
  left: 0,
  behavior: 'smooth'
});
});
document.querySelectorAll(".nav")[4].addEventListener("click", function(){
  window.scroll({
  top: 1900,
  left: 0,
  behavior: 'smooth'
});
});

document.querySelector(".menu_button").addEventListener("click", function(){
  document.querySelector(".phone_nav").classList.toggle("hide");

})
