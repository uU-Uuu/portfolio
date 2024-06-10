document.querySelector(".projects").addEventListener("click", (event) => {
  if (event.target.classList.contains("projects__expand-btn")) {
    const infoDetailed = event.target.nextElementSibling;
    console.log(infoDetailed);
    if (infoDetailed) {
      if (infoDetailed.classList.contains("hidden")) {
        infoDetailed.classList.remove("hidden");
      } else {
        infoDetailed.classList.toggle("hidden");
      }
    }
  }
});
