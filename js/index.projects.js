function getTagFilter() {
  return document.querySelector(".menu__item.active").value;
};

function renderTagsFromList(arr) {
  const arrTag = (arr.map((tag) => "#" + tag));
  return arrTag.join("&nbsp;&nbsp;");
};

async function renderProjects() {

  const response = await fetch("./api/projects.json");
  const projects = await response.json();

  let tagFilter = getTagFilter();

  let projectsDomString = "";

  for (const project of projects) {
    if (tagFilter === "All" || project.tags.includes(tagFilter)) {
      projectsDomString += `
        <article class="projects__project">
          <a href="${project.link}" target="_blank">
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
            <a class="info__title" href="${project.link}" target="_blank">${project.title}</a>
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

  const prj = event.target.closest(".projects__project");
  
  if (event.target.classList.contains("projects__project-info-expand-btn-img")) {
    const infoDetailed = prj.querySelector(".projects__project-details");

    if (infoDetailed) {

      if (infoDetailed.classList.contains("hidden")) {
        infoDetailed.classList.remove("hidden");
        prj.querySelector(".projects__project-info-expand-btn-img").style.transform = "rotate(180deg)";
        prj.querySelector(".info__title").style.fontWeight = 400;
        prj.querySelector(".info__title").style.fontSize = "1.1rem";
        prj.querySelector(".projects__project-img").classList.toggle("active-prj")

      } else {
        infoDetailed.classList.toggle("hidden");
        prj.querySelector(".projects__project-info-expand-btn-img").style.transform = "rotate(0deg)";
        prj.querySelector(".info__title").style.fontWeight = 300;
        prj.querySelector(".info__title").style.fontSize = "1rem";
        prj.querySelector(".projects__project-img").classList.remove("active-prj")
      }
    }
  }
});