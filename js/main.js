
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



// // var show = false;
// // var navList =   document.querySelector('.header__list');
// // var barsInner = document.querySelector('.header__inner-bars')
// // var overflow = document.querySelector('body');

// // function bars(){
// //   if(show == true){
// //     navList.classList.remove("header__list--active");
// //     overflow.classList.remove("overflow");
// //     barsInner.classList.remove("header__inner-bars--active");
// //     show = false;
// //   }else{
// //     navList.classList.add("header__list--active");
// //     overflow.classList.add("overflow");
// //     barsInner.classList.add("header__inner-bars--active");
// //     show = true;
// //   }
// // };

