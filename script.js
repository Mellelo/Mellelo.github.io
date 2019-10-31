$('.center').slick({
  centerMode: true,
  centerPadding: '5px',
  slidesToShow: 2,
  arrows:true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1
      }
    }
  ]
});