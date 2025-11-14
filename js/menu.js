// --- Menú desplegable de "Catálogo" ---
const catalogoBtn = document.getElementById('catalogoBtn');
const catalogoMenu = document.getElementById('catalogoMenu');

catalogoBtn.addEventListener('click', (e) => {
  e.preventDefault(); // evita que recargue la página
  catalogoMenu.classList.toggle('show');
});

// Cerrar el menú si haces clic fuera
document.addEventListener('click', (e) => {
  if (!catalogoBtn.contains(e.target) && !catalogoMenu.contains(e.target)) {
    catalogoMenu.classList.remove('show');
  }
});


function abrirImagen(img) {
    const modal = document.getElementById("modal");
    const imgAmpliada = document.getElementById("imgAmpliada");

    imgAmpliada.src = img.src;
    modal.classList.add("mostrar");
}

function cerrarImagen() {
    document.getElementById("modal").classList.remove("mostrar");
}


  const nav = document.querySelector('nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });








