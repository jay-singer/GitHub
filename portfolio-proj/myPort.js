/*  NAVIGATION BAR FUNCTION */
function myMenuFunction() {
  let menuBtn = document.getElementById("myNavMenu");
  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}
/* ------ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING----*/
window.onscroll = function () {
  headerShadow();
};
function headerShadow() {
  const navHeader = document.getElementById("header");
  if (document.body.scrollTo > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0px 1px 6px rgba(0,0,0,0.1)";
    navHeader.style.height = "70px";
    navHeader.style.background = "rgb(244, 234, 229)";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";

    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}
