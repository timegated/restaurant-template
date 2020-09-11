import { menuItems } from './menuitems/menuitems';

export const menu = () => {
  const contentArea = document.querySelector('#content-area');
  const contentWrapper = document.createElement('div');
  const title = document.createElement('h1');
  const menuItemList = document.createElement('div');
  menuItemList.classList.add('menu-items');
  title.textContent = 'Menu';
  contentWrapper.id = 'content-area__wrapper';

  const { breakfast, lunch, dinner } = menuItems;

  const breakfastMenu = breakfast.map(item => {
    return `
      <div class="menu-item">
        <div class="menu-item__name">${item.name}</div>
        <div class="menu-item__desc">${item.desc}</div>
        <div class="menu-item__price">${item.price}</div>
      </div>
    `
  });
  menuItemList.innerHTML = breakfastMenu.join(' ');

  contentWrapper.appendChild(title);
  contentArea.appendChild(contentWrapper);
  contentWrapper.appendChild(menuItemList);
};