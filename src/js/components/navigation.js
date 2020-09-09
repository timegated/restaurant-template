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
    navListLink.href = `#${link.toLowerCase()}`;
    navListItem.appendChild(navListLink);
    navList.appendChild(navListItem);

    navListLink.addEventListener('click', (e) => {
      const link = e.target.textContent;
      
      switch (link) {
        case 'Home':
          console.log('Home')
          break;
        case 'About':
          console.log('About')
          break;
        case 'Menu':
          console.log('Menu')
          break;
        case 'Contact':
          console.log('Contact')
          break;
        default:
          console.error('Fall Through')
      }
    });

    return navListItem;
  });
  
  document.body.appendChild(navContainer)
};