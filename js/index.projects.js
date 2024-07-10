function getTagFilter() {
  return document.querySelector(".menu__item.active").value;
};

function renderTagsFromList(arr) {
  const arrTag = (arr.map((tag) => "#" + tag));
  return arrTag.join("&nbsp;&nbsp;");
};
console.log(renderTagsFromList(['web', 'python']))

async function renderProjects() {

  const response = await fetch("./api/projects.json");
  const projects = await response.json();

  let tagFilter = getTagFilter();

  let projectsDomString = "";

  for (const project of projects) {
    if (tagFilter === "All" || project.tags.includes(tagFilter)) {
      projectsDomString += `
        <article class="projects__project">
          <a href="${project.link}">
            <img
              class="projects__project-img"
              id="${project.id}"
              src="${project.img}"
              alt="Prj ScreenShot"
            />
          </a>
          <div class="projects__project-info">
            <button class="projects__project-info-expand-btn">
              <img src="img/down-arrow.png" class="projects__project-info-expand-btn-img">
            </button>
            <a class="info__title" href="${project.link}">${project.title}</a>
          </div>
          <div class="projects__project-details hidden">
            <p class="projects__project-details-tags">${renderTagsFromList(project.tags)}</p>
            <p class="projects__project-details-description">${project.description}</p>
          </div>
          </article>
      `;
    }
  }
  document.querySelector('.projects').innerHTML = projectsDomString;
};

window.addEventListener('DOMContentLoaded', renderProjects());


document.querySelector(".tabs__menu").addEventListener("click", (event) => {
  if (event.target && event.target.classList.contains("menu__item")) {
    const clickedBtn = event.target;

    if (clickedBtn.value !== getTagFilter()) {
      document.querySelectorAll(".menu__item").forEach(btn => {
        btn.classList.remove("active");
      });
      clickedBtn.classList.add("active");
    }
  }
  renderProjects();
});



document.querySelector(".projects").addEventListener("click", (event) => {
  if (event.target.classList.contains("projects__project-info-expand-btn-img")) {
    const infoDetailed = event.target.parentElement.parentElement.nextElementSibling;
    if (infoDetailed) {
      if (infoDetailed.classList.contains("hidden")) {
        infoDetailed.classList.remove("hidden");
        document.querySelector(".projects__project-info-expand-btn-img").style.transform = "rotate(180deg)";
        document.querySelector(".info__title").style.fontWeight = 400;
        document.querySelector(".info__title").style.fontSize = "1.1rem";

      } else {
        infoDetailed.classList.toggle("hidden");
        document.querySelector(".projects__project-info-expand-btn-img").style.transform = "rotate(0deg)";
        document.querySelector(".info__title").style.fontWeight = 300;
        document.querySelector(".info__title").style.fontSize = "1rem";
      }
    }
  }
});
