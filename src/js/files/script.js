// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';

const tabNavItems = document.querySelectorAll('.tabs-deals__button');
const tabItems = document.querySelectorAll('.item-tabs');

document.addEventListener('click', (e) => {
  const targetElement = e.target;
  let currentActiveIndex = null;
  let newActiveIndex = null;

  if (targetElement.closest('.tabs-deals__button')) {
    tabNavItems.forEach((tabNavItem, index) => {
      if (tabNavItem.classList.contains('_tab-active')) {
        currentActiveIndex = index;
        tabNavItem.classList.remove('_tab-active');
      }

      if (tabNavItem === targetElement) {
        newActiveIndex = index;
      }
    });

    targetElement.classList.add('_tab-active');
    tabItems[currentActiveIndex].classList.remove('_tab-active');
    tabItems[newActiveIndex].classList.add('_tab-active');
  }
});
