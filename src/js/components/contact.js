export const contact = () => {
  const contentArea = document.querySelector('#content-area');
  const contentWrapper = document.createElement('div');
  contentWrapper.id = 'content-area__wrapper';

  const title = document.createElement('h1');
  title.textContent = 'Contact';

  contentWrapper.appendChild(title);
  contentArea.appendChild(contentWrapper);
};