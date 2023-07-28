type TDescriptionProps = {
  title: string;
  message: string;
}

function createDescription({ title, message }: TDescriptionProps) {
  if (typeof document === 'undefined') return;

  const descriptionElement = document.createElement('div');
  descriptionElement.setAttribute('class', 'app__description');
  descriptionElement.innerHTML = `
    <h1 class="app__title">${title}</h1>
    <p class="app__message">${message}</p>
  `;

  return descriptionElement;
}

export default createDescription;
