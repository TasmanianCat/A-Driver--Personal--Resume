// Access all the navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Access the navigation container and menu buttons
const linkBox = document.getElementById('linkBox');
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');

// Function to toggle scroll lock on the body
function toggleScrollLock(lock) {
  if (lock) {
    document.body.classList.add('lock-scroll');
  } else {
    document.body.classList.remove('lock-scroll');
  }
}

function openCloseMenu() {
  // Open menu
  openMenu.addEventListener('click', () => {
    linkBox.classList.add('show-menu');
    toggleScrollLock(true); // Disable scroll
  });

  // Close menu
  closeMenu.addEventListener('click', () => {
    linkBox.classList.remove('show-menu');
    toggleScrollLock(false); // Enable scroll
  });

  // Close menu when any navigation link is clicked
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      linkBox.classList.remove('show-menu');
      toggleScrollLock(false); // Enable scroll
    });
  });
}

openCloseMenu();

// Get the button:
upButton = document.getElementById('goTop');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goTop.style.display = 'flex';
  } else {
    goTop.style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
function goTopFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
