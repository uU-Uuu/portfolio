const btnScrollToTop = document.querySelector(".navigation__btn");

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    btnScrollToTop.style.display = "block";
  } else {
    btnScrollToTop.style.display = "none";
  }
}

window.onscroll = () => {
  scrollFunction();
};

btnScrollToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
