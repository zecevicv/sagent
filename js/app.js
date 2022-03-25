/* #Hamburger Menu
  ======================================================= */
const hamburgerBtn = document.querySelector('.header-hamburger a');
const header = document.querySelector('.header');

if (hamburgerBtn) {
  hamburgerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    header.classList.toggle('show');
    body.classList.toggle('no-scroll');
  });
}

// Color Change
if (document.querySelector('.header')) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  });
}

if (document.querySelector('.header')) {
  if (window.scrollY > 0) {
    header.classList.add('header-scrolled');
  } else {
    header.classList.remove('header-scrolled');
  }
}

/* #Numbers Animation
  ======================================================= */
gsap.registerPlugin(ScrollTrigger);

const numbers = document.querySelectorAll('.numbers .num');
let numbersStatus = false;

ScrollTrigger.create({
  trigger: ".numbers",
  onEnter: () => {
    if (!numbersStatus) {
      numbers.forEach((number) => {
        var zero = {
          val: 0
        };
        var num = number.innerHTML;
  
        gsap.to(zero, {
          val: num,
          duration: 3,
          scrollTrigger: numbers,
          onUpdate: function () {
            number.innerHTML = zero.val.toFixed(0);
          }
        });
      });

      numbersStatus = true;
    }
  }
});

/* #Home Advantages
  ======================================================= */
if (document.querySelector('.home-advantages .swiper')) {
  new Swiper(".home-advantages .swiper", {
    navigation: {
      nextEl: ".home-advantages .next",
      prevEl: ".home-advantages .prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      1024: {
        slidesPerView: 3
      }
    }
  });
}

/* #Testimonials
  ======================================================= */
if (document.querySelector('.testimonials .swiper')) {
  new Swiper(".testimonials .swiper", {
    navigation: {
      nextEl: ".testimonials .next",
      prevEl: ".testimonials .prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.2
      },
      1024: {
        slidesPerView: 2.27
      }
    },
    pagination: {
      el: ".testimonials .swiper-pagination",
    },
  });
}

/* #Team
  ======================================================= */
if (document.querySelector('.team .swiper')) {
  new Swiper(".team .swiper", {
    navigation: {
      nextEl: ".team .next",
      prevEl: ".team .prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2.4
      },
      1024: {
        slidesPerView: 3.77
      }
    }
  });
}