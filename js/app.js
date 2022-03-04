window.addEventListener("load", function(event) {
  calcLayout()
})

window.addEventListener("resize", function(even){
  calcLayout()
})

function calcLayout() {
  let header = document.querySelector(".header")
  let pages = document.querySelectorAll(".pages")
  let sticktop = document.querySelectorAll(".sticktop")

  sticktop.forEach(sticktop => {
    sticktop.style.top = header.offsetHeight - 0.5 + "px"
  })

  pages.forEach(page => {
    page.style.height = window.innerHeight - header.offsetHeight + 0.5 + "px"
    page.style.scrollMarginTop = header.offsetHeight - 0.5 + "px"
  })
}

function mobileNav() {
  let nav = document.querySelector("nav");
  if(window.outerWidth <= 675){
    if(!nav.classList.contains("active")){
      nav.classList.add("active")
    }else {
      nav.classList.remove("active")
    }
  }
}

