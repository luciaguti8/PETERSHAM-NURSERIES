$(document).ready(function() {
    var scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            document.querySelectorAll('.nav-link').forEach(item => item.classList.remove('active'));
            link.classList.add('active');
        });
    });
    


    function ajustarAlturaImagenes() {
        // Obtén la altura total de todos los textos combinados
        var totalAlturaTexto = $('#timeline-text').outerHeight();
    
        // Cuenta cuántas imágenes hay
        var numImagenes = $('.timeline-img-item').length;
    
        if (numImagenes > 0) {
          // Calcula la altura que cada imagen debe ocupar
          var alturaPorImagen = totalAlturaTexto / numImagenes;
    
          // Aplica la altura calculada a cada imagen
          $('.timeline-img-item').each(function () {
            $(this).css('height', alturaPorImagen + 'px');
            $(this).css('width', '100%'); // Asegura que ocupen todo el ancho del contenedor
            $(this).css('object-fit', 'cover'); // Ajusta la imagen dentro del espacio
          });
        }
    }
    // Llama a la función al cargar la página
    ajustarAlturaImagenes();
    // Llama a la función al redimensionar la ventana
    $(window).resize(function () {
        ajustarAlturaImagenes();
    });

    function hoverGarden() {
        if ($(window).width() > 992) {
            $('.gallery-item').each(function() {
                const hoverImage = $(this).find('.garden-hover-img');
    
                // Evento de movimiento del ratón
                $(this).on('mousemove', function(event) {
                    const offsetX = event.offsetX;
                    const offsetY = event.offsetY;
                    const radius = 80; // Ajusta el radio según prefieras
    
                    // Cambiar el clip-path para crear el efecto de máscara
                    hoverImage.css('clip-path', `circle(${radius}px at ${offsetX}px ${offsetY}px)`);
                });
    
                // Cuando el ratón sale, ocultar la máscara
                $(this).on('mouseleave', function() {
                    hoverImage.css('clip-path', 'circle(0% at 50% 50%)');
                });
            });
        }   
    }
    
    hoverGarden();
    $(window).on('resize', hoverGarden);
});
    

if (document.querySelector('.gallery-lightbox')) {
lightbox.option({
    'resizeDuration': 300,
    'disableScrolling': true,
    'fadeDuration': 300,
});
}
// team 
document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper(".swiper-team", {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
        },
    });
});
