document.addEventListener('DOMContentLoaded', () => {

  // Tmavý / svetlý mód
  window.toggleMode = () => { document.body.classList.toggle("dark"); };

  // Scroll na galériu
  window.scrollToGallery = () => {
    document.querySelector('.grid').scrollIntoView({ behavior:'smooth' });
  };

  // TikTok presmerovanie
  window.goToTikTok = () => { window.open("https://www.tiktok.com/@ampokemon","_blank"); };

  // Padajúce karty (3 pozadie)
  const bgCards = document.querySelectorAll('.card-bg');
  const positions = [50, window.innerWidth/2, window.innerWidth-130];

  bgCards.forEach((card,index)=>{
    card.style.left = positions[index] + 'px';
    const duration = 5 + Math.random()*10;
    card.style.animationDuration = duration+'s';
  });

  // Filtrovanie kariet
  const galleryCards = document.querySelectorAll('.grid .card');
  const searchInput = document.getElementById('searchInput');

  if(searchInput){
    searchInput.addEventListener('input',function(){
      const filter = searchInput.value.toLowerCase();
      galleryCards.forEach(card=>{
        const name = card.querySelector('p').textContent.toLowerCase();
        card.style.display = name.includes(filter)?'block':'none';
      });
    });
  }

});
