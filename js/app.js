/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

const { nav, section } = getNavgation();

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

// Create array for each section

list_sections = Array.from(document.getElementsByTagName("section"));

//  console.log(list_sections);

// space sections with flex
nav.style.cssText = "display: flex;text-align:center;justify-content: flex-end";

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav with each sections 1`
list_sections.forEach((sections, index) => {
  // create the li for the nav
  let li = document.createElement("li");

  // add attributes to each li element and add index value
  li.setAttribute("id", "li-section" + (index + 1));
  let anchor = document.createElement("a");
  //  console.log(`${sections} : ${index}`);

  // sets all li elements with a class activeNav
  li.setAttribute("class", "activeNav");

  li.appendChild(anchor);
  nav.appendChild(li);

  // this jumps to each section on the page.
  anchor.setAttribute("href", list_sections[index].innerHTML);

  anchor.href = "#section" + (index + 1);

  anchor.textContent = list_sections[index].dataset.nav;

  // setting the anchor tag to have a class of 'menu__link' for the style
  anchor.setAttribute("class", "menu__link");
});

const navLinks = document.querySelectorAll(".navbar__menu ul a");

navLinks.forEach((navl) => {
  navl.addEventListener("click", onClick);
});

// Scroll to anchor ID using scrollTO event
// Add class 'active' to section when near top of viewport

let onClick = function (event) {
  const href = this.getAttribute("href");
  // Get the offsetTop position of href
  const getTop = document.querySelector(href).offsetTop;

  // get last click navbar and remove active
  const lastLi = document.querySelector(".activeNav");

  // method cancels the event if it is cancelable
  event.preventDefault();

  window.scrollTo({
    top: getTop,
    behavior: "smooth",
  });
};

function getNavgation() {
  const nav = document.getElementById("navbar__list");
  const section = document.querySelectorAll("section");
  return { nav, section };
}
