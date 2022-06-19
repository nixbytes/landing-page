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

// build the nav with each sections
list_sections.forEach((_sections, index) => {
  // create the li for the nav
  const li = document.createElement("li");

  // add attributes to each li element and add index value
  li.setAttribute("id", "li-section" + (index + 1));
  let anchor = document.createElement("a");

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

// next we need to change the class for li on the navbar

const navLinks = document.querySelectorAll(".navbar__menu ul a");

// Scroll to anchor ID using scrollTO event
let onClick = function (event) {
  // method cancels the event if it is cancelable
  event.preventDefault();

  const href = this.getAttribute("href");
  // Get the offsetTop position of href
  const getTop = document.querySelector(href).offsetTop;

  window.scrollTo({
    top: getTop,
    behavior: "smooth",
  });
};

navLinks.forEach((navl) => {
  navl.addEventListener("click", onClick);
});

// helper function for check viewport

function isInViewport(distance) {
  return distance.left >= distance.top && distance.left <= distance.bottom;
}

const activeNav = document.getElementsByClassName("activeNav");

function activeView(_section) {
  list_sections.forEach((section) => {
    const distance = section.getBoundingClientRect();
    // Check if there is an active element. If so, remove the
    // class, remove the activeNav class, and add a your-active-class
    activeSections(section, distance);
  });
}

function activeSections(section, distance) {
  // define current and last active element for switching
  // or highlifght the nav
  section.classList.add("your-active-class");
  const currentActive = document.querySelector("#li-" + section.id);
  const lastActive = document.querySelector(".activeNav");

  if (isInViewport(distance)) {
    lastActive && lastActive.classList.remove(".activeNav");
    lastActive && lastActive.classList.remove("activeNav");

    currentActive.setAttribute("class", "activeNav");
    currentActive.classList.add("your-active-class");
  } else {
    section.classList.remove("your-active-class");
    currentActive.classList.remove("your-active-class");
    currentActive.classList.remove("activeNav");
  }
}

function getNavgation() {
  const nav = document.getElementById("navbar__list");
  const section = document.querySelectorAll("section");
  return { nav, section };
}

// calling the function that scrolls to the anchor element for section
document.addEventListener("scroll", activeView);
