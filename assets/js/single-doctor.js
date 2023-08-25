document.addEventListener("DOMContentLoaded", () => {

  // Tabs
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
    const skillContent = document.querySelectorAll('.skill__content')

    skillContent.forEach((item) => {
      const lastLi = item.querySelector('.skill__dates-body:last-child')
      const heightUl = item.querySelector('.skill__dates')
      const line = item.querySelector('.skill__dates-line')

      const calc = () => {
        const liHeight = lastLi.offsetHeight;
        const ulHeight = heightUl.offsetHeight;
        const result = ulHeight - liHeight
        line.style.height = result - 100 + 'px'
      }
      calc()
    })
  }
  // resize timeline
  const onWindowResize = () => calcLineLength()
  window.addEventListener("resize", onWindowResize)
  calcLineLength()
})