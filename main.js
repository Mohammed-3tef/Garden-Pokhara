let swiper = new Swiper(".mySwiper", {
  navigation: {
   nextEl: ".swiper-button-next",
   prevEl: ".swiper-button-prev",
 },
 pagination: {
  el: ".swiper-pagination",
  clickable: true,
 },
});

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})
