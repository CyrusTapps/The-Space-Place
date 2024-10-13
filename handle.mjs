import * as helper from './helper.mjs';
import * as main from './main.mjs';

export function initializeApp() {
  helper.createStars();
  
  setTimeout(() => {
    helper.askForName().then(name => {
      // You can use the name here if needed
      console.log(`Welcome, ${name}!`);
    });
  }, 3500);

  setupNavigation();
}

 export function setupNavigation() {
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  if (dropdownToggle && dropdownMenu) {
    dropdownToggle.addEventListener('click', () => {
      const expanded = dropdownToggle.getAttribute('aria-expanded') === 'true' || false;
      dropdownToggle.setAttribute('aria-expanded', !expanded);
      dropdownMenu.classList.toggle('show');
    });


    document.addEventListener('click', (event) => {
      if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownToggle.setAttribute('aria-expanded', 'false');
        dropdownMenu.classList.remove('show');
      }
    });


    dropdownMenu.addEventListener('keydown', (event) => {
      const items = dropdownMenu.querySelectorAll('.dropdown-item');
      const currentIndex = Array.from(items).indexOf(document.activeElement);

      if (event.key === 'ArrowDown') {
        event.preventDefault();
        items[currentIndex + 1 < items.length ? currentIndex + 1 : 0].focus();
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        items[currentIndex - 1 >= 0 ? currentIndex - 1 : items.length - 1].focus();
      } else if (event.key === 'Escape') {
        dropdownToggle.setAttribute('aria-expanded', 'false');
        dropdownMenu.classList.remove('show');
        dropdownToggle.focus();
      }
    });
  }
}




