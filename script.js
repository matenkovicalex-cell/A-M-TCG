/* Tmavý / svetlý mód */
function toggleMode() {
  document.body.classList.toggle("dark");
}

/* Scroll na galériu */
function scrollToGallery() {
  const gallery = document.querySelector('.grid');
  gallery.scrollIntoView({ behavior: 'smooth' });
}

/* TikTok presmerovanie */
function goToTikTok() {
  window.open("https://www.tiktok.com/@ampokemon", "_blank");
}

/* Padajúce karty */
const bgCards = document.querySelectorAll('.card-bg'); // <--- pre padajúce obrázky

// Presné štartové pozície (px od ľavého okraja)
const positions = [50, window.innerWidth/2, window.innerWidth - 130];

bgCards.forEach((card, index) => {
  // horizontálna pozícia podľa indexu
  card.style.left = positions[index] + 'px';
  
  // náhodná rýchlosť 5–15 sekúnd
  const randomDuration = 5 + Math.random() * 10;
  card.style.animationDuration = randomDuration + 's';
});

/* Filtrovanie kariet podľa názvu */
const galleryCards = document.querySelectorAll('.grid .card'); // <--- pre galériu
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', function() {
  const filter = searchInput.value.toLowerCase();

  galleryCards.forEach(card => {
    const cardName = card.querySelector('p').textContent.toLowerCase();
    if (cardName.includes(filter)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});
