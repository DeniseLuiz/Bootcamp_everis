<<<<<<< HEAD
//CÓDIGO JS PARA CARROSEL
// JQUERY
=======
>>>>>>> parent of ae92f34... versão 1
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:3,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})