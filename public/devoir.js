const days = document.querySelectorAll('.day');

days.forEach(day => {
  const button = day.querySelector('button');
  const content = day.querySelector('.content');

  button.addEventListener('click', () => {
    // Fermer les autres
    days.forEach(otherDay => {
      if (otherDay !== day) {
        otherDay.classList.remove('open');
        otherDay.querySelector('.content').classList.remove('open');
      }
    });

    // Ouvrir/fermer le jour cliqué
    day.classList.toggle('open');
    content.classList.toggle('open');
  });
});

// Sélectionne les éléments du DOM
const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-menu');

// Ajoute un événement "click" sur le bouton burger
burger.addEventListener('click', () => {
    // Alterne la classe "open" sur le burger et le menu
    burger.classList.toggle('open');
    navMenu.classList.toggle('open');
});

  const nextButton = document.querySelector('.right');
  const prevButton = document.querySelector('.left');
  const slideWidth = slides[0].getBoundingClientRect().width + 20; // Largeur d'un slide + l'espacement entre eux
  const totalSlides = slides.length;

  let currentIndex = 0;

  // Function to move to the next set of slides
  const moveToSlide = (index) => {
    const amountToMove = index * slideWidth;
    track.style.transition = 'transform 1s ease-in-out'; // Animation plus lente pour chaque mouvement
    track.style.transform = 'translateX(-' + amountToMove + 'px)';
  };

  // Fonction pour boucler lorsque l'on arrive à la fin
  const loopSlides = () => {
    if (currentIndex === totalSlides) {
      track.style.transition = 'none'; // Supprimer temporairement la transition pour le retour immédiat
      track.style.transform = 'translateX(0)'; // Retourner au début
      currentIndex = 0;
    }
  };

  // Click right button to move right
  nextButton.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex < totalSlides) {
      moveToSlide(currentIndex);
    } else {
      loopSlides(); // Revenir au début
    }
  });

  // Click left button to move left
  prevButton.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = totalSlides - 1; // Revenir à la fin si on dépasse le début
      moveToSlide(currentIndex);
    } else {
      moveToSlide(currentIndex);
    }
  });

  // Auto-scroll optionnel (défilement automatique)
  const autoScroll = () => {
    setInterval(() => {
      nextButton.click(); // Simuler un clic sur le bouton droit toutes les 3 secondes
    }, 3000); // Changer l'intervalle si tu veux plus ou moins rapide
  };

