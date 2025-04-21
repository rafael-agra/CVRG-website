// Mapa Leaflet
const iconeCVRG = L.icon({
  iconUrl: 'Favicon/favicon-32x32.png', // Caminho do seu ícone
  iconSize: [40, 40],             // Tamanho do ícone
  iconAnchor: [20, 40],           // Ponto de ancoragem
  popupAnchor: [0, -35]           // Onde aparece o popup
});
 
const mapa = L.map('mapa', {
  center: [-23.504908,-46.655614],
  zoom: 15,
  scrollWheelZoom: false,
  gestureHandling: true
});

// Permitir zoom com CTRL + scroll
mapa.scrollWheelZoom.disable();
mapa.getContainer().addEventListener('wheel', function (e) {
  if (e.ctrlKey) {
    mapa.scrollWheelZoom.enable();
    setTimeout(() => mapa.scrollWheelZoom.disable(), 1000);
  }
});


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(mapa); 

L.marker([-23.5095, -46.6309], { icon: iconeCVRG }).addTo(mapa)
  .bindPopup(`
    <div style="font-family: Inter, sans-serif; font-size: 14px; line-height: 1.4;">
      <strong style="font-size: 16px;">CVRG Imóveis</strong><br>
      Rua Lençóis, São Paulo, SP
    </div>
  `)
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
  