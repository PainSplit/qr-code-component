import createQRCode from '../../utils/create-qr-code';
import createDescription from '../../utils/create-description';
import createAttribution from '../../utils/create-attribution';

class App {
  appContent: HTMLDivElement;

  constructor(appContent: HTMLDivElement) {
    this.appContent = appContent;
    this.renderPage();
  }

  private renderPage() {
    const description = {
      title: 'Improve your front-end skills by building projects',
      message: 'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level',
    };

    const attribution = {
      name: 'Rizky Ardiansyah',
      href: 'https://github.com/PainSplit',
    };

    const qrCodeElement = createQRCode('/assets/images/image-qr-code.png');
    const descriptionElement = createDescription(description);
    const attributionElement = createAttribution(attribution);

    this.appContent.appendChild(qrCodeElement!);
    this.appContent.appendChild(descriptionElement!);
    this.appContent.appendChild(attributionElement!);
  }
}

export default App;
