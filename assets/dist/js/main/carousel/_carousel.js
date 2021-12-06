let Carousel = function(){
    let $loc = new Array();

    this.swiper = function($coord, $obj){
        if(document.querySelector($coord)){
            document.addEventListener("DOMContentLoaded", function(){
                const swiper = new Swiper($coord, $obj);
    
            });
        }
    }
}

let cmd = new Carousel();


// cmd.swiper(".swiper-container", {
    
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,

//     // autoplay: {
//     //     delay: 4000,
//     //   },

//     // If we need pagination
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//         renderBullet: function (index, className) {
//             return '<span class="' + className + '">' + (index + 1) + "</span>";
//           },
        
//     },

//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },

//     // And if we need scrollbar
//     scrollbar: {
//         el: '.swiper-scrollbar',
//     },
// })






var swiper = new Swiper(".js-gallery-thumb-swiper", {
    spaceBetween: 10,
    slidesPerView: 2,
    freeMode: true,
    watchSlidesProgress: true,
  });
var swiper2 = new Swiper(".js-gallery-swiper", {
    spaceBetween: 40,
    autoplay: {
        delay: 4000,
      },
    navigation: {
        nextEl: '.swiper-gallery-button-next',
        prevEl: '.swiper-gallery-button-prev',
    },
    thumbs: {
      swiper: swiper,
    },
});


swiper2.on('slideChange', function () {
    swiper.slideNext();
});


cmd.swiper(".js-plants-swiper", {
    direction: 'horizontal',
    loop: true,
    effect: "fade",
    slidesPerView: 1,
    autoplay: {
        delay: 4000,
      },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-plants-button-next',
        prevEl: '.swiper-plants-button-prev',
    },

    pagination: {
        el: '.swiper-plants-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"><svg xmlns="http://www.w3.org/2000/svg" class="on" width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#3B413E"/><circle cx="10" cy="10" r="2.5" fill="white"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="off" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#C4C0A6"/><circle cx="10" cy="10" r="2.5" fill="white"/></svg> '+"</span>";
        },
            
    },
})

export{
    Carousel
}