function createQRCode(imageSrc: string) {
  if (typeof document === 'undefined') return;

  const imageElement = document.createElement('img');
  imageElement.setAttribute('class', 'app__image');
  imageElement.setAttribute('aria-label', 'qr code');
  imageElement.setAttribute('src', imageSrc);

  return imageElement;
}

export default createQRCode;
