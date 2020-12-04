
$(document).ready(function(){

//Slick slider brands
  $('.brands__carousel').slick({
      infinite: false,
      slidesToShow: 10,
      slidesToScroll: 1,
      arrows: true,
      prevArrow:"<span class='prev-arrow'><i class='fas fa-chevron-left'></i></span>",
      nextArrow:"<span class='next-arrow'><i class='fas fa-chevron-right'></i></span>",
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 8,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }

        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });
//Slick slider hits
  $('.hits__carousel').slick({
      infinite: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: true,
      prevArrow:"<span class='prev-arrow'><i class='fas fa-chevron-left'></i></span>",
      nextArrow:"<span class='next-arrow'><i class='fas fa-chevron-right'></i></span>",
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });

});

//containers click actions 
const categoriesLinksCont = document.querySelector('#categories-nav-links');
const allCategoriesLinks = document.querySelectorAll('.main__categories-nav-link');
const allContainers = document.querySelectorAll('.main__content-categories');


categoriesLinksCont.addEventListener('click', (e) => {
  //add-remove active classes from links
  allCategoriesLinks.forEach(item => item.classList.remove('main__categories-nav-link--active'));
  e.target.classList.add('main__categories-nav-link--active');
  //add-remove active classes from containers
  const id = e.target.id
  allContainers.forEach((container) => {
    container.classList.remove('main__content-categories--active');
    //if id of link is id-container open it
    if(container.id === `${id}-container`) {
      container.classList.add('main__content-categories--active');
    }
  });
  
})

// counter 
const counters = document.querySelectorAll('.hits__carousel-item-counter');

counters.forEach(counter => {
    const minus = counter.querySelector('.counter-minus');
    const plus = counter.querySelector('.counter-plus');
    const counterDisplay = counter.querySelector('.counter-display');
    let i = 0;
    plus.addEventListener('click', () => {
      counterDisplay.textContent = i += 1;
    });
    minus.addEventListener('click', () => {
      if(i < 1) {
        counterDisplay.textContent =  i = 0;
      } else {
        counterDisplay.textContent =  i -= 1;
      }
      
    });
})

//burger menu 
const mobNav = document.querySelector('.main__nav-mobile');
const burger = document.querySelector('.main__humburger');

burger.addEventListener('click', () => mobNav.classList.toggle('main__nav-mobile--active'));

