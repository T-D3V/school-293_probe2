window.addEventListener("load", function(event) {
  calcPages()
})

window.addEventListener("resize", function(even){
  calcPages()
})

function calcPages() {
  let header = document.querySelector(".header")
  let pages = document.querySelectorAll(".pages")

  pages.forEach(page => {
    page.style.height = window.innerHeight - header.offsetHeight + 0.5 + "px"
    page.style.paddingTop = header.offsetHeight + 0.5 + "px"
    page.style.paddingBottom = header.offsetHeight + 0.5 + "px"
  })
}

