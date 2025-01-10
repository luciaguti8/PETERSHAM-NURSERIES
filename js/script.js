$(document).ready(function() {
    var scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        mobile: {
            smooth: false
        },
        tablet: {
            smooth: true
        }
    });
    const anchors = document.querySelectorAll('a[href^="#"]');

    anchors.forEach(anchor => {
        anchor.addEventListener('click', (event) => {
            event.preventDefault(); // Prevenir el comportamiento por defecto del navegador

            // Obtener el ID de la sección a la que apunta el href del enlace
            const targetId = anchor.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            console.log("Element", targetId);
            if (targetElement) {
                // Usar Locomotive para navegar a la sección
                scroll.scrollTo(targetElement);
            }
        });
    });

    $('#read-more-a').on('click', function () {
        window.open('https://petershamnurseriesblog.cargo.site/botanical-stories', '_blank');
    });
    
    $('#read-more-b').on('click', function () {
        window.open('https://petershamnurseriesblog.cargo.site/recipes', '_blank');
    });
    
    $('#read-more-c').on('click', function () {
        window.open('https://petershamnurseriesblog.cargo.site/events', '_blank');
    });
    


    window.addEventListener('load', () => {
        scroll.update();
      });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            document.querySelectorAll('.nav-link').forEach(item => item.classList.remove('active'));
            link.classList.add('active');
        });
    });
    // garden gallery 
    function hoverGarden() {
        if ($(window).width() > 992) {
            $('.gallery-item').each(function() {
                const hoverImage = $(this).find('.garden-hover-img');
        
                $(this).off('mousemove mouseleave'); // Elimina eventos anteriores
        
                $(this).on('mousemove', function(event) {
                    const offsetX = event.offsetX;
                    const offsetY = event.offsetY;
                    const radius = 100; 
        
                    hoverImage.css('clip-path', `circle(${radius}px at ${offsetX}px ${offsetY}px)`);
                });
        
                $(this).on('mouseleave', function() {
                    hoverImage.css('clip-path', 'circle(0% at 50% 50%)');
                });
            });
        } else {
            $('.gallery-item').each(function() {
                const hoverImage = $(this).find('.garden-hover-img');
                $(this).off('mousemove mouseleave'); // Elimina eventos en dispositivos pequeños
                hoverImage.css('clip-path', ''); // Resetea estilos
            });
        }
    }
    
    hoverGarden();
    $(window).on('resize', hoverGarden);
    
});
// story 
function ajustarAlturaTexto() {
    var alturaTotal = 0;

    $('.timeline-item').each(function () {
        alturaTotal += $(this).outerHeight(true);
    });

    $('#timeline-text').css('height', alturaTotal + 'px');
}

function ajustarAlturaImagenes() {
    // Llama primero a ajustarAlturaTexto para asegurar consistencia
    ajustarAlturaTexto();

    // Obtén la altura actual de #timeline-text
    var alturaTexto = $('#timeline-text').outerHeight();

    // Calcula la altura por imagen
    var numImagenes = $('.timeline-img-item').length;
    var alturaPorImagen = alturaTexto / numImagenes;

    // Ajusta cada imagen
    $('.timeline-img-item').css({
        width: '100%',
        height: alturaPorImagen + 'px',
        objectFit: 'cover',
    });
}
// Llama a las funciones cuando la página y sus recursos estén completamente cargados
$(window).on('load', function () {
    ajustarAlturaTexto();
    ajustarAlturaImagenes();
});
// Recalcula al redimensionar la ventana
$(window).resize(function () {
    ajustarAlturaTexto();
    ajustarAlturaImagenes();
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
            992: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
        },
    });
});
// form footer
$('#submit').click(function() {
    let name = $('#user_name').val();
    let email = $('#user_email').val();
    var message = "";
    if (name == "" || email == "" ) {
        message = "You must complete your name and email to subscribe to our Newsletter";
        $('body').css('overflow', 'hidden')
    } else if (!validateEmail(email)) {
        message = "Please enter a valid email address.";
        $('body').css('overflow', 'hidden')
    } else {
        message = "Thank you for contacting us! You will receive a response as soon as possible!";
        $('body').css('overflow', 'hidden')
    }
    $("#modal-text").html(message);
    $("#thanks-modal").css('display', 'block');
    return false;
});
$('.close').click(function(){
    $("#thanks-modal").css('display', 'none');
    $('body').css('overflow', 'auto')
});
const validateEmail = (email) => {
return String(email)
    .toLowerCase()
    .match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};