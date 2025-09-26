// Menu burger
const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    navMenu.classList.toggle('open');
});


// Sélection uniquement des images de la section note-point
const noteImages = document.querySelectorAll(".note-point .note-card img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

// Ouvrir la lightbox
noteImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    showImage(currentIndex);
    lightbox.style.display = "flex";
  });
});

// Afficher l'image par index
function showImage(index) {
  lightboxImg.src = noteImages[index].src;
  lightboxImg.alt = noteImages[index].alt;
}

// Fermer la lightbox
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Navigation avec boutons
prevBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + noteImages.length) % noteImages.length;
  showImage(currentIndex);
});

nextBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % noteImages.length;
  showImage(currentIndex);
});

// Navigation au clavier
document.addEventListener("keydown", (e) => {
  if (lightbox.style.display === "flex") {
    if (e.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + noteImages.length) % noteImages.length;
      showImage(currentIndex);
    }
    if (e.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % noteImages.length;
      showImage(currentIndex);
    }
    if (e.key === "Escape") {
      lightbox.style.display = "none";
    }
  }
});

// Clique en dehors de l'image -> ferme
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});