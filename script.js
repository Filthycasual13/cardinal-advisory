//Sticky menu scroll function

var prevScrollpos = window.pageYOffset;
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  let currentScrollPos = window.pageYOffset;
  let currentWidth = window.innerWidth;

  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.querySelector("#logo").style.width = "250px";
    document.querySelector("#logo").style.height = "55px";
    document.querySelector("nav").style.background = "rgb(255, 255, 255)";
  } else if (currentWidth < 450 ) {
    document.querySelector("#logo").style.width = "200px";
    document.querySelector("#logo").style.height = "45px";
    document.querySelector("nav").style.background = "rgba(255, 255, 255, 0)";
  } else {
    document.querySelector("#logo").style.width = "400px";
    document.querySelector("#logo").style.height = "85px";
    document.querySelector("nav").style.background = "rgba(255, 255, 255, 0)";
  }
  prevScrollpos = currentScrollPos;
}

//Mobile menu

let burger = document.querySelector(".box");
let menu = document.querySelector("#nav-links-mobile");

function showMenu() {

  if (menu.style.display === "block") {
    menu.style.display = "none";
    burger.style.backgroundImage = "url(../images/icons/menu.png)"
  } else {
    menu.style.display = "block";
    burger.style.backgroundImage =  "url(../images/icons/cancel.png)"
  }

}