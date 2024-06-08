const btnProjects = document.querySelector(".header__buttons-projects");
const btnContacts = document.querySelector(".header__buttons-contacts");
const scrollToFooter = document.querySelector(".footer");

btnProjects.addEventListener("click", () => {
  window.scrollTo({ top: window.innerHeight * 0.8, behavior: "smooth" });
});
btnContacts.addEventListener("click", () => {
  scrollToFooter.scrollIntoView({
    behavior: "smooth",
  });
});
