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
