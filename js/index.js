var accordionBody = document.querySelectorAll(".about__accordion-body");
var accordionInner = document.querySelector(".about__accordion");
var accordionPlus = document.querySelector(".about__accordion-plus");
var moreBody = document.querySelector('.home__block-card-header-block');
var more = document.querySelector('.home__block-more');

var acc = null;
var acordion = false;

function accordion(el) {
    if (acc == el) {
        if (acordion) {
            accordionBody[el].classList.remove("about__accordion-body--active");
            accordionInner.classList.remove("about__accordion--active");
            accordionPlus.classList.remove("about__accordion-plus--active");
            acordion = false;
            console.log('close');
        }
        acc = null;
    } else {
        for (let i = 0; i < accordionBody.length; i++) {
            if (accordionBody[i].dataset.index == el && !acordion) {
                accordionBody[i].classList.add("about__accordion-body--active");
                accordionInner.classList.add("about__accordion--active");
                accordionPlus.classList.add("about__accordion-plus--active");
                acordion = true;
                acc = el;
                return null;
            }

        }
    }
    console.log(acc);
};

document.querySelector('#email').disabled = true; 


more = false;
function moreButton() {
    if(more == true) {
        moreBody.classList.remove('home__block-card-header-block--active');
        more = false;
    }else {
        moreBody.classList.add('home__block-card-header-block--active');
        more = true;
    }
};