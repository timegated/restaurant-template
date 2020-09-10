import { homePage } from './home';
import { about } from './about';
import { menu } from './menu';
import { contact } from './contact';

export const navbar = () => {
  const navLinksText = ['Home', 'About', 'Menu', 'Contact'];
  const navContainer = document.createElement('header');
  navContainer.classList.add('main-nav');

  const mainContent = document.querySelector('#content-area');

  const navElement = document.createElement('nav');
  navElement.classList.add('main-nav__container');

  const navList = document.createElement('ul');
  navList.classList.add('main-nav__list');

  navContainer.appendChild(navElement);
  navElement.appendChild(navList);

  navLinksText.map(link => {
    const navListItem = document.createElement('li');
    const navListLink = document.createElement('a');
    navListLink.textContent = link;
    navListLink.href = `#${link.toLowerCase()}`;
    navListItem.appendChild(navListLink);
    navList.appendChild(navListItem);

    navListLink.addEventListener('click', (e) => {
      const link = e.target.textContent;
      const contentWrapper = document.querySelector('#content-area__wrapper');
    
      switch (link) {
        case 'Home':
          contentWrapper.remove();
          homePage();
          break;
        case 'About':
          contentWrapper.remove();
          about();
          break;
        case 'Menu':
          contentWrapper.remove();
          menu();
          break;
        case 'Contact':
          contentWrapper.remove();
          contact();
          break;
        default:
          console.error('Fall Through');
      }
    });

    return navListItem;
  });
  
  document.body.insertBefore(navContainer, mainContent);
};