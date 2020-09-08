export const navbar = () => {
  const navLinksText = ['Home', 'About', 'Menu', 'Contact'];

  const navContainer = document.createElement('header')
  navContainer.classList.add('main-nav');

  const navElement = document.createElement('nav');

  const navList = document.createElement('ul');

  navContainer.appendChild(navElement);
  navElement.appendChild(navList);

  navLinksText.map(link => {
    const navListItem = document.createElement('li');
    const navListLink = document.createElement('a');
    navListLink.textContent = link;
    navListLink.href = `#${link.toLowerCase()}`
    navListItem.appendChild(navListLink);
    navList.appendChild(navListItem)
    return navListItem;
  });
  
  document.body.appendChild(navContainer)
};