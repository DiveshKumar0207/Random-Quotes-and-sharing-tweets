const darkMode_button = document.querySelector("#darkMode_button");
const darkMode_svg = document.querySelector("#darkMode_svg");
const lightMode_svg = document.querySelector("#lightMode_svg");

darkMode_button.addEventListener("click", () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    darkMode_svg.classList.add("hidden");
    lightMode_svg.classList.remove("hidden");
  } else {
    document.documentElement.classList.add("dark");
    lightMode_svg.classList.add("hidden");
    darkMode_svg.classList.remove("hidden");
  }
});
