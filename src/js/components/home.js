export const homePage = () => {
  const contentArea = document.querySelector('#content-area');

  const contentWrapper = document.createElement('div');
  contentWrapper.id = 'content-area__wrapper';

  const title = document.createElement('h1');

  title.textContent = 'Home';
  contentArea.appendChild(contentWrapper);
  contentWrapper.appendChild(title);
};