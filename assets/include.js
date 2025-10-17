async function inject(id, url) {
  const el = document.getElementById(id);
  if (!el) return;
  const res = await fetch(url, { cache: "no-store" });
  el.innerHTML = await res.text();
}

window.addEventListener("DOMContentLoaded", () => {
  inject("site-header", "/partials/header.html");
  inject("site-footer", "/partials/footer.html");
});
// === Логика для слайдера ===
let currentIndex = 0;
const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;

document.querySelector('.next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slideCount;
  slides.style.transform = translateX(-${currentIndex * 100}%);
});

document.querySelector('.prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slideCount) % slideCount;
  slides.style.transform = translateX(-${currentIndex * 100}%);
});
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.querySelectorAll(".slide");
  slides.forEach(slide => slide.style.display = "none");
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // автопереключение каждые 4с
}

document.querySelector(".prev").onclick = () => {
  slideIndex -= 2; 
  showSlides();
};
document.querySelector(".next").onclick = () => {
  showSlides();
}
