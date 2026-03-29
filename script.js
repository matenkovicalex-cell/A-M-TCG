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
