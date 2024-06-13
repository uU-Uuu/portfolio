function getTagFilter() {
  return document.querySelector(".menu__item.active").innerHTML;
};

function renderTagsFromList(arr) {
  const arrTag = (arr.map((tag) => "#" + tag));
  return arrTag.join(" ");
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
          <img
            class="projects__project-img"
            id="${project.id}"
            src="${project.img}"
            alt="Prj ScreenShot"
          />
          <div class="projects__project-spec">
            <button class="projects__expand-btn"></button>
            <a href="${project.link}">${project.title}</a>
          </div>
          <div class="projects__project-details hidden">
            <p class="projects__project-details-tags">${renderTagsFromList(project.tags)}</p>
            <p class="projects__project-details-description">${project.description}}</p>
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

    if (clickedBtn.innerHTML !== getTagFilter()) {
      document.querySelectorAll(".menu__item").forEach(btn => {
        btn.classList.remove("active");
      });
      clickedBtn.classList.add("active");
    }
  }
  renderProjects();
});



document.querySelector(".projects").addEventListener("click", (event) => {
  if (event.target.classList.contains("projects__expand-btn")) {
    const infoDetailed = event.target.parentElement.nextElementSibling;
    if (infoDetailed) {
      if (infoDetailed.classList.contains("hidden")) {
        infoDetailed.classList.remove("hidden");
      } else {
        infoDetailed.classList.toggle("hidden");
      }
    }
  }
});
