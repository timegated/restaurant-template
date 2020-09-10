export const about = () => {
  const contentArea = document.querySelector('#content-area');
  const contentWrapper = document.createElement('div');
  contentWrapper.id = 'content-area__wrapper';

  const title = document.createElement('h1');
  title.textContent = 'About';

  contentWrapper.appendChild(title);
  contentArea.appendChild(contentWrapper);
};


export const util = (id) => {
  const area = document.querySelector(id);  
  return area;
};