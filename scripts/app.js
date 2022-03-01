window.addEventListener("load", function(event) {
  calcLandingPage()
})

window.addEventListener("resize", function(even){
  calcLandingPage()
})

function calcLandingPage() {
  let header = document.querySelector(".header")
  let landingPage = document.querySelector("#main")
  landingPage.style.height = (window.innerHeight - header.offsetHeight + 0.5) + "px"
}