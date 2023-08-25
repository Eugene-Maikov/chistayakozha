document.addEventListener("DOMContentLoaded", () => {

  // tabs
  const handleTabs = () => {
    const tabs = document.querySelectorAll(".skill__btn-item")
    const contents = document.querySelectorAll(".skill__content")

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const tabId = tab.getAttribute("data-tab")
        tabs.forEach((tab) => {
          tab.classList.remove("active")
        })
        contents.forEach((content) => {
          content.classList.remove("active")
        })
        tab.classList.add("active")
        document.getElementById(tabId).classList.add("active")
      })
    })
    tabs[0].click()
  }
  handleTabs()

  // timeline
  const calcLineLength = () => {
    const skillContent = document.querySelectorAll('.skill__content._dates')

    skillContent.forEach((item) => {
      const lastLi = item.querySelector('.skill__dates-body:last-child')
      const heightUl = item.querySelector('.skill__dates')
      const line = item.querySelector('.skill__dates-line')

      const calc = () => {
        const liHeight = lastLi.offsetHeight;
        const ulHeight = heightUl.offsetHeight;
        const result = ulHeight - liHeight
        line.style.height = (result - 100) + 'px'
      }
      calc()
    })
  }
  // resize timeline
  const onWindowResize = () => calcLineLength()
  window.addEventListener("resize", onWindowResize)
  calcLineLength()

  // slider
  const workSlider = new Swiper('.work__slider', {
    slidesPerView: 3,
    spaceBetween: 31,

    navigation: {
      nextEl: ".work__buttons .slider-btn-next",
      prevEl: ".work__buttons .slider-btn-prev",
    },

    breakpoints: {
      320: {
        slidesPerView: '1',
      },
      768: {
        slidesPerView: '2',
        spaceBetween: 30,
      },
      990: {
        slidesPerView: '3',
        spaceBetween: 31,
      }
    }
  });
  const reviewsSlider = new Swiper('.reviews__slider', {
    slidesPerView: 3,
    spaceBetween: 31,

    navigation: {
      nextEl: ".reviews__buttons .slider-btn-next",
      prevEl: ".reviews__buttons .slider-btn-prev",
    },

    breakpoints: {
      320: {
        slidesPerView: '1',
      },
      768: {
        slidesPerView: '2',
        spaceBetween: 30,
      },
      990: {
        slidesPerView: '3',
        spaceBetween: 31,
      }
    }
  });

  // Имени и отчество с новой строки

  const names = document.querySelectorAll('.reviews__item-name')

  names.forEach((item) => {
    return item.replace(/\s/, '\n');
  })

  function addNewLine(str) {
    return str.replace(/\s/, '\n');
  }

  var input = 'Пример текста.';
  var output = addNewLine(input);
  console.log(output);

})