const swiperOne = new Swiper('.swiper-1', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    keyboard: true,
    autoHeight: true,
    grabCursor: true,
    centeredSlides: true,
    zoomOption: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination-1',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + ' ' + className+(index+1) + '"> </span>';
        //return '<img src="img/logo' + index  + '.svg" class="' + className+(index+10) + '">';
      },
    },
  });
  

  const swiperTwo = new Swiper('.swiper-2', {
    effect: "coverflow",
    keyboard: true,
    loop: true,
    autoHeight: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    roundLengths: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
       // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    }  
  });