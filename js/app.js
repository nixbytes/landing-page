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

const { nav, navLinks } = querySections();

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

// Create array for each section

// console.log(list_sections);

// space sections with flex
css(nav, { display: "flex", textAlign: "center", justifyContent: "flex-end" });
/*
 * End Helper Functions
 * Begin Main Functions
 *
 * End Main Functions
 * Begin Events
 *
 */

// Build the navigation menu
list_sections.forEach((_sections, index) => {
  // create the li for the nav
  let li = document.createElement("li");

  // add attributes to each li element and add index value
  li.setAttribute("id", "li-section" + (index + 1));
  let anchor = document.createElement("a");
  // console.log(`${sections} : ${index}`);

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

updateLi();

// Scroll to anchor ID using scrollTO event
// Add class 'active' to section when near top of viewport
// Scroll to section on link click

let onClick = function (event) {
  // method cancels the event if it is cancelable
  event.preventDefault();

  const { lastLi, href, getTop } = getPostion();

  // check for active element and remove the class
  // Set sections as active with if condition
  lastLi && lastLi.classList.remove("activeNav");

  const selectLi = document.querySelector(
    "#li-section" + href.slice(href.indexOf("n") + 1)
  );
  selectLi.setAttribute("class", "activeNav");

  window.scrollTo({
    top: getTop,
    behavior: "smooth",
  });

  function getPostion() {
    const href = this.getAttribute("href");

    // Get the offsetTop position of href
    const getTop = document.querySelector(href).offsetTop;

    // get last click navbar and remove active
    const lastLi = document.querySelector(".activeNav");
    return { lastLi, href, getTop };
  }
};

// call for each link click

navLinks.forEach((navl) => {
  navl.addEventListener("click", onClick);
});

function querySections() {
  const nav = document.getElementById("navbar__list");
  const section = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar__menu ul a");
  list_sections = Array.from(document.getElementsByTagName("section"));
  return { nav, navLinks };
}

function updateLi() {
  const updateLiClass = document.getElementById("li-section1");
  updateLiClass.classList.add("your-active-class");
  updateLiClass.classList.remove("activeNav");
}
