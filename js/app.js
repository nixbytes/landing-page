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
// and set the first with your-active-class and others with activeNav
// the css/style.css for style

const updateLiClass = document.getElementById("li-section1");
updateLiClass.classList.add("your-active-class");
updateLiClass.classList.remove("activeNav");

const navLinks = document.querySelectorAll(".navbar__menu ul a");

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

function isInViewport(section) {
  const distance = section.getBoundingClientRect();
  return (
    distance.top >= 0 &&
    distance.left >= 0 &&
    distance.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    distance.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
}

// check section area that should be active on the page

function checkSection(distance) {
  return distance.left >= distance.top && distance.left <= distance.bottom;
}

// Scroll to anchor ID using scrollTO event
// Add class 'active' to section when near top of viewport
// defining variable for the li class name in navbar - to use for setting 'active' class
let activeNav = document.getElementsByClassName("activeNav");

function activeView(_section) {
  list_sections.forEach((section) => {
    const distance = section.getBoundingClientRect();
    // Check if there is an active element. If so, remove the
    // class, remove the activeNav class, and add a your-active-class
    // class with style for animation.
    if (checkSection(distance)) {
      section.classList.add("your-active-class");

      const lastActive = document.querySelector(".activeNav");

      lastActive && lastActive.classList.remove(".activeNav");
      lastActive && lastActive.classList.remove("activeNav");

      const currentActive = document.querySelector("#li-" + section.id);

      currentActive.setAttribute("class", "activeNav");
      currentActive.classList.remove("activeNav");
      currentActive.classList.add("your-active-class");

    } else {
      section.classList.remove("your-active-class");
    }
  });
}

// calling the function that scrolls to the anchor element for section
document.addEventListener("scroll", activeView);

function getNavgation() {
  const nav = document.getElementById("navbar__list");
  const section = document.querySelectorAll("section");
  return { nav, section };
}
