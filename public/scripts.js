const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach(el => observer.observe(el));

const words = ["Abhyuday", "a Builder", "a Creator"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 120;
const delay = 1200;

const textElement = document.getElementById("typewriter");

function typeEffect() {
  const current = words[wordIndex];
  
  if (!isDeleting) {
    textElement.textContent = current.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      setTimeout(() => (isDeleting = true), delay);
    }
  } else {
    textElement.textContent = current.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 60 : speed);
}

document.addEventListener("DOMContentLoaded", typeEffect);

