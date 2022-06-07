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

const nav = document.getElementById('navbar__list');
const section = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

// Create array for each section

list_sections = Array.from(document.getElementsByTagName("section"));

console.log(list_sections);

// space sections with flex
nav.style.display = "flex"
nav.style.textAlign = "center"
nav.style.justifyContent = "space-evenly"

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav

list_sections.forEach((sections, index) => {
  let li = document.createElement('li');
  let anchor = document.createElement('a');
  console.log(`${sections} : ${index}`);
});
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active


