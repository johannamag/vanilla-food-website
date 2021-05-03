const icons = document.querySelectorAll(".section-1-icons i");
let i = 1;

setInterval(() => {
  i++;

  const icon = document.querySelector(".section-1-icons .change");

  icon.classList.remove("change");

  if (i > icons.length) {
    icons[0].classList.add("change");
    i = 1;
  } else {
    icon.nextElementSibling.classList.add("change");
  }
}, 5000);

const menu = document.querySelector(".menu");
const nav = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  menu.classList.toggle("open");
  nav.classList.toggle("opennav");
});
