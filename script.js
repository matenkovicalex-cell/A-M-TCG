// script.js
document.addEventListener('DOMContentLoaded', () => {

  /* ---------------- Tmavý / svetlý mód ---------------- */
  window.toggleMode = () => {
    document.body.classList.toggle("dark");
  };

  /* ---------------- Scroll na galériu ---------------- */
  window.scrollToGallery = () => {
    const gallery = document.querySelector('.grid');
    gallery.scrollIntoView({ behavior: 'smooth' });
  };

  /* ---------------- TikTok presmerovanie ---------------- */
  window.goToTikTok = () => {
    window.open("https://www.tiktok.com/@ampokemon", "_blank");
  };

  /* ---------------- Padajúce karty ---------------- */
  const bgCards = document.querySelectorAll('.card-bg'); // všetky pohyblivé obrázky
  const positions = [50, window.innerWidth / 2, window.innerWidth - 130]; // štartové horizontálne pozície

  bgCards.forEach((card, index) => {
    card.style.left = positions[index] + 'px';
    const randomDuration = 5 + Math.random() * 10; // 5-15s
    card.style.animationDuration = randomDuration + 's';
  });

  /* ---------------- Filtrovanie kariet ---------------- */
  const galleryCards = document.querySelectorAll('.grid .card');
  const searchInput = document.getElementById('searchInput');

  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const filter = searchInput.value.toLowerCase();
      galleryCards.forEach(card => {
        const cardName = card.querySelector('p').textContent.toLowerCase();
        card.style.display = cardName.includes(filter) ? 'block' : 'none';
      });
    });
  }

});
