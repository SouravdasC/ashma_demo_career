let companyName = document.querySelector(".company");
// Select the company menu link and submenu
const companyLink = document.getElementById("company");
const companyItems = document.getElementById("company-items");

// Add event listeners for mouseenter and mouseleave
companyLink.addEventListener("mouseenter", () => {
  companyItems.style.display = "block"; // Show the submenu
});

companyItems.addEventListener("mouseleave", () => {
  companyItems.style.display = "none"; // Hide the submenu
});

// CONTACT US
let headoffice = document.getElementById("headOffice");
let manufacturingoffice = document.getElementById("manufacturingOffice");

// function transfer(){
// if(manufacturingoffice.style.display === "none" || manufacturingoffice.style.display === ""){
//   manufacturingoffice.style.display = "block"; // Show the div
// }else{
//   manufacturingoffice.style.display = "none"; // Hide the div
// }
// }

function button1() {
  headoffice.style.display = "block"; // Show Div 1
  manufacturingoffice.style.display = "none"; // Hide Div 2
}
function button2() {
  headoffice.style.display = "none"; // Show Div 1
  manufacturingoffice.style.display = "block"; // Hide Div 2
}

// HEADER TOOGLE
let toggleMenu = document.getElementById("navMenu-responsive");
toggleMenu.style.display = 'none'
function toggleBtn() {
  if (toggleMenu.style.display == "none") {
    toggleMenu.style.display = "block";
  } else {
    toggleMenu.style.display = "none";
  }
}

let subMenuToggle = document.getElementById("reSubMenuList");
let downIcons_1 = document.getElementById("downIcons");
let downIcons_2 = document.getElementById("upIcons");
subMenuToggle.style.display = "none";
downIcons_2.style.display = "none";
function subMenu() {
  if (subMenuToggle.style.display == "none") {
    subMenuToggle.style.display = "block";
    downIcons_2.style.display = "block";
    downIcons_1.style.display = "none";
  } else {
    subMenuToggle.style.display = "none";
    downIcons_2.style.display = "none";
    downIcons_1.style.display = "block";
  }
}

let subMenuToggle2 = document.getElementById("reSubMenuList2");
let downIcons = document.getElementById("downIcons1");
let downIconS_2 = document.getElementById("upIcons2");
subMenuToggle2.style.display = "none";
downIconS_2.style.display = "none";
function subMenu2() {
  if (subMenuToggle2.style.display == "none") {
    subMenuToggle2.style.display = "block";
    downIconS_2.style.display = "block";
    downIcons.style.display = "none";
  } else {
    subMenuToggle2.style.display = "none";
    downIconS_2.style.display = "none";
    downIcons.style.display = "block";
  }
}


