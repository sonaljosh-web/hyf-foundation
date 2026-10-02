const helloButton = document.getElementById("helloButton");

helloButton.addEventListener("click", function () {
  alert("Hello! Thanks for visiting my portfolio.");

  const randomColor =
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");

  helloButton.style.backgroundColor = randomColor;
});

const navLinks = document.querySelectorAll(".navbar-link");
const logo = document.querySelector(".logo");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.forEach(function (item) {
      item.classList.remove("active");
    });

    link.classList.add("active");
  });
});
logo.addEventListener("click", function () {
  navLinks.forEach(function (item) {
    item.classList.remove("active");
  });
});
