type TAttributionProps = {
  name: string;
  href: string;
}

function createAttribution({ name, href }: TAttributionProps) {
  if (typeof document === 'undefined') return;

  const attributionElement = document.createElement('p');
  attributionElement.setAttribute('class', 'app__attribution');
  attributionElement.innerHTML = `
    Challenge by <a
      href="https://www.frontendmentor.io?ref=challenge"
      target="_blank"
    >
      Frontend Mentor
    </a>. Coded by <a href="${href}">${name}</a>
  `;

  return attributionElement;
}

export default createAttribution;
