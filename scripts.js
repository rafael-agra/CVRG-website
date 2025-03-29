
// Mapa Leaflet
var mapa = L.map('mapa').setView([-23.505061621515956, -46.65457334259711], 15);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(mapa); 
L.marker([-23.505061621515956, -46.65457334259711]).addTo(mapa)
  .bindPopup('Rua Lençóis, São Paulo, SP')
  .openPopup();

// Rolagem suave
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Botão voltar ao topo
const btnTopo = document.getElementById('btn-topo');
window.addEventListener('scroll', () => {
  btnTopo.style.display = window.scrollY > 300 ? 'flex' : 'none';

  document.querySelectorAll('section').forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add('visible');
    }
  });
});

btnTopo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Alternar dark mode -- a ser implementado
/* const toggleDark = document.getElementById('toggle-dark');
toggleDark.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleDark.textContent = document.body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Escuro';
});*/
// Ao carregar a página, aplica classe pre-visible às seções visíveis
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('section').forEach(sec => {
      const top = sec.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        sec.classList.add('pre-visible');
      }
    });
  });
  