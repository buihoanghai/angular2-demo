const NUMBER_DISPLAY_RESPONSIVE = 8;
const NUMBER_DISPLAY_NORMAL = 6;
const responsive={
  infinite: true,
  speed: 2000,
  slidesToShow: NUMBER_DISPLAY_RESPONSIVE,
  slidesToScroll: NUMBER_DISPLAY_RESPONSIVE,
  responsive: [
    {
      breakpoint: 1624,
      settings: {
        slidesToShow: NUMBER_DISPLAY_RESPONSIVE-1,
        slidesToScroll: NUMBER_DISPLAY_RESPONSIVE-1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1424,
      settings: {
        slidesToShow: NUMBER_DISPLAY_RESPONSIVE-2,
        slidesToScroll: NUMBER_DISPLAY_RESPONSIVE-2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1224,
      settings: {
        slidesToShow: NUMBER_DISPLAY_RESPONSIVE-3,
        slidesToScroll: NUMBER_DISPLAY_RESPONSIVE-3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: NUMBER_DISPLAY_RESPONSIVE-4,
        slidesToScroll: NUMBER_DISPLAY_RESPONSIVE-4,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: NUMBER_DISPLAY_RESPONSIVE-5,
        slidesToScroll: NUMBER_DISPLAY_RESPONSIVE-5
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: NUMBER_DISPLAY_RESPONSIVE-6,
        slidesToScroll: NUMBER_DISPLAY_RESPONSIVE-6
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
const banner={
  infinite: true,
  slidesToShow:1,
  slidesToScroll:1,
  autoplay: true,
  autoplaySpeed: 2000,
};

export {responsive,normal,banner,NUMBER_DISPLAY_RESPONSIVE};
