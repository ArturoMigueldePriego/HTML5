document.addEventListener("DOMContentLoaded", function() {
    // 1. Buscamos el contenedor donde irá el menú en cada página
    const navbarPlaceholder = document.getElementById("navbar-placeholder");
    
    if (navbarPlaceholder) {
        // 2. Definimos el HTML exacto de tu barra de navegación superior
        navbarPlaceholder.innerHTML = `
            <header class="navbar">
              <a href="index.html" class="brand-logo">NPC!</a>
              <nav>
                <ul class="nav-links">
                  <li><a href="concepto.html">Concepto</a></li>
                  <li><a href="metodos.html">Métodos</a></li>
                  <li><a href="guias.html">Tu guía</a></li>
                </ul>
              </nav>
            </header>
        `;
    }
});