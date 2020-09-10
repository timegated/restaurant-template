export const menu = () => {
  const contentArea = document.querySelector('#content-area');
  const contentWrapper = document.createElement('div');
  contentWrapper.id = 'content-area__wrapper';

  const title = document.createElement('h1');
  const copy = document.createElement('p')
  copy.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis delectus ipsa quisquam similique itaque, esse quidem facere ad voluptas in! Unde aliquid veniam maxime nostrum a tenetur, quam ipsa magnam?'
  title.textContent = 'Menu';

  contentWrapper.appendChild(title);
  contentWrapper.appendChild(copy);
  contentArea.appendChild(contentWrapper);
};