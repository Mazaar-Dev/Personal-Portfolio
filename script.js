

// Typewriter effect for role
const role = document.getElementById('role');
const roles = ['Web Developer', 'Frontend Developer', 'Software Developer'];
let index = 0;
let charIndex = 0;
let isDeleting = false;
const cursor = document.getElementById('cursor');

function type() {
  const currentRole = roles[index];
  // stopping the cursor when characters are being + or -
  cursor.classList.remove('cursor');
  if (isDeleting) {
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % roles.length;
    }
  } else {
    charIndex++;
    if (charIndex === currentRole.length +1) {
      isDeleting = true; 
      // start blinking when nothing is typed as normal
      cursor.classList.add('cursor');
      setTimeout(type, 2000);
      return;
    }
  }
  role.textContent = currentRole.slice(0, charIndex);
  setTimeout(type, 100);
}

type();



// toggle - switching theme classes

const themeSelect = document.querySelector('#theme-selector');
const body = document.body;

themeSelect.addEventListener('change', () => {
    const selectedTheme = themeSelect.value;

    // Remove existing theme classes
    body.classList.remove('light-theme', 'dark-theme');
    body.classList.add(`${selectedTheme}-theme`);

  });



// dropdown menu 
  
  const menuIcon = document.querySelector('.menu-icon');
  const navBar = document.querySelector('.navBar');

  menuIcon.addEventListener('click', () => {
    navBar.classList.toggle('active');
  });



