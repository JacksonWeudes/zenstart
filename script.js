const openBtn = document.getElementById("open")
const closeBtn = document.getElementById("close")
const menu = document.getElementById("side-menu")

openBtn.addEventListener("click", () => {
    menu.style.left = "0"
    document.body.classList.add("no-scroll")
})

closeBtn.addEventListener("click", () => {
    menu.style.left = "-100%"
    document.body.classList.remove("no-scroll")
})


new Swiper('.testimonials-container', {
  loop: true,
  spaceBetween: 30,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakPoints: {
    0: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    }
  }
});
