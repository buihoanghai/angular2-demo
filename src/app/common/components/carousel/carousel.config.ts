const NUMBER_DISPLAY_RESPONSIVE = 6;
const NUMBER_DISPLAY_NORMAL = 6;
const responsive={
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: NUMBER_DISPLAY_RESPONSIVE,
  slidesToScroll: NUMBER_DISPLAY_RESPONSIVE,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: NUMBER_DISPLAY_RESPONSIVE-1,
        slidesToScroll: NUMBER_DISPLAY_RESPONSIVE-1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: NUMBER_DISPLAY_RESPONSIVE-2,
        slidesToScroll: NUMBER_DISPLAY_RESPONSIVE-2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: NUMBER_DISPLAY_RESPONSIVE-3,
        slidesToScroll: NUMBER_DISPLAY_RESPONSIVE-3
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
};
const normal={
  infinite: true,
  slidesToShow: NUMBER_DISPLAY_NORMAL,

};

export {responsive,normal,NUMBER_DISPLAY_RESPONSIVE};
