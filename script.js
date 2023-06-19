


document.querySelectorAll(".nav")[0].addEventListener("click", function(){
  window.scroll({
  top: 1000,
  left: 0,
  behavior: 'smooth'
});
});

document.querySelectorAll(".nav")[1].addEventListener("click", function(){
  window.scroll({
  top: 1900,
  left: 0,
  behavior: 'smooth'
});
});
document.querySelectorAll(".nav")[3].addEventListener("click", function(){
  window.scroll({
  top: 800,
  left: 0,
  behavior: 'smooth'
});
});
document.querySelectorAll(".nav")[4].addEventListener("click", function(){
  window.scroll({
  top: 1600,
  left: 0,
  behavior: 'smooth'
});
});

document.querySelector(".menu_button").addEventListener("click", function(){
  document.querySelector(".phone_nav").classList.add("ani");
  document.querySelector(".phone_nav").classList.remove("hide");
})
document.querySelector("#cross").addEventListener("click", function(){
  document.querySelector(".phone_nav").classList.add("hide");
})
