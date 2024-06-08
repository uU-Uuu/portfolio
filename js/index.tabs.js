const menuItems = document.querySelectorAll(".menu__item");
let activeItem = document.querySelector(".active");

function clickItem(item) {
  if (activeItem == item) return;

  if (activeItem) {
    activeItem.classList.remove("active");
  }

  item.classList.add("active");
  activeItem = item;
}

function hoverItem(item) {
  if (activeItem == item) return;

  if (activeItem) {
    activeItem.classList.remove("active");
  }

  item.classList.add("active");
}

function stopHoverItem(item) {
  if (item) {
    item.classList.remove("active");
  }

  if (activeItem) {
    activeItem.classList.add("active");
  }
}

menuItems.forEach((item) => {
  item.addEventListener("click", () => clickItem(item));
});

menuItems.forEach((item) => {
  item.addEventListener("mouseover", () => hoverItem(item));
});

menuItems.forEach((item) => {
  item.addEventListener("mouseout", () => stopHoverItem(item));
});
