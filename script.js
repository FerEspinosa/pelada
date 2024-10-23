const navLinks = document.querySelectorAll('nav ul li a');

for (const navLink of navLinks) {
	navLink.addEventListener('click', function(e) {
		const hrefValue = this.getAttribute('href');

		// Si el enlace es un ancla que apunta a una sección interna
		if (hrefValue.startsWith('#')) {
			e.preventDefault();  // Evita la acción predeterminada solo para anclas internas
			const section = document.querySelector(hrefValue);
			if (section) {
				const sectionTop = section.offsetTop;
				window.scrollTo({ top: sectionTop, behavior: 'smooth' });
			}
		} 
		// Si es un enlace externo (como un cambio de página), el comportamiento por defecto es permitido
	});
}