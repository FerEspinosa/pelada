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
const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(thumbnail => {
    const image = thumbnail.querySelector('.myImage');
    const messageBox = thumbnail.querySelector('.messageBox');

    if (image && messageBox) {
        image.addEventListener('click', () => {
            messageBox.style.display = 'block';
            messageBox.style.opacity = 1;

            setTimeout(() => {
                messageBox.style.opacity = 0;
                setTimeout(() => {
                    messageBox.style.display = 'none';
                }, 500);
            }, 2000);
        });
    }
});


// Function to update the navbar title
function updateNavbarTitle() {
	var currentSectionId = getCurrentSectionId();
	var currentSectionTitle = '';

	if (currentSectionId) {
		currentSectionTitle = $('#' + currentSectionId).attr('data-section-title'); 
	}

	$('#navbarNav .navbar-brand').text(currentSectionTitle); 
}

$(document).ready(function() {
    // Function to update the navbar title
    function updateNavbarTitle() {
        var currentSectionId = getCurrentSectionId();
        var currentSectionTitle = '';

        if (currentSectionId) {
            currentSectionTitle = $('#' + currentSectionId).attr('data-section-title'); 
        }

        $('#navbarNav .navbar-brand').text(currentSectionTitle); 
    }

    // Function to get the ID of the current section
    function getCurrentSectionId() {
        var sections = $('.section');
        var currentSectionId = null;

        sections.each(function() {
            var sectionTop = $(this).offset().top;
            var sectionBottom = sectionTop + $(this).outerHeight();
            var windowTop = $(window).scrollTop();
            var windowBottom = windowTop + $(window).height();

            if (sectionBottom > windowTop && sectionTop < windowBottom) {
                currentSectionId = $(this).attr('id');
                return false; // Exit the loop
            }
        });

        return currentSectionId;
    }

    // Add data-section-title attributes to your sections
    $('#inicio').attr('data-section-title', 'La leyenda cobra vida');
    $('#Sobre_la_obra').attr('data-section-title', 'Sobre la obra');
    $('#Hernan_Espinosa').attr('data-section-title', 'Hernán Espinosa');
    $('#Escenas').attr('data-section-title', 'Escenas');
    $('#Reparto').attr('data-section-title', 'Reparto');
    $('#ficha').attr('data-section-title', 'Ficha técnica');
    $('#musicales').attr('data-section-title', 'Musicales');

    // Add a navbar-brand element to your navbar (if you don't have one)
    $('#navbarNav').prepend('<span class="navbar-brand"></span>');

    // Initial update and update on scroll
    updateNavbarTitle();
    $(window).scroll(updateNavbarTitle);
});

// Function to update the navbar title and toggler data attribute
function updateNavbarTitle() {
    // ... (Your existing code to get currentSectionId and currentSectionTitle) ...

    // Update the navbar-toggler's data attribute
    $('.navbar-toggler').attr('data-section-title', currentSectionTitle);
    $('#navbarNav .navbar-brand').text(currentSectionTitle);
}
