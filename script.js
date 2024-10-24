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

// Code for showing the message box
const image = document.getElementById('myImage');
const messageBox = document.getElementById('messageBox');

if (image && messageBox) {
  image.addEventListener('click', () => {
    messageBox.style.display = 'block';
    messageBox.style.opacity = 1; 

    setTimeout(() => {
      messageBox.style.opacity = 0; 
      setTimeout(() => {
        messageBox.style.display = 'none';
      }, 500); 
    }, 5000);
  });
}			

