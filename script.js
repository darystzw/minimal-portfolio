function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const notHosted = () =>{
return `<button class="btn btn-color-2 project-btn"> Awaiting Host </button>`;
 };
