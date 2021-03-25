
$(".home__slider").slick({
    slidesToShow:3,
    slidesToScroll:1,
    speed:500,
    autoplay:true,
    arrows:true,
    responsive: [
        {
          breakpoint: 1050,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
})
$(".contact__slider").slick({
    slidesToShow:3,
    slidesToScroll:1,
    speed:500,
    autoplay:true,
    arrows:true,
    responsive: [
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
})
