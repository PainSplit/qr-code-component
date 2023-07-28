import { describe, expect, test } from 'vitest';
import createQRCode from '../utils/create-qr-code';

describe('Creating QR code element', () => {
  test('should render QR code element', () => {
    if (typeof document === 'undefined') return;

    const qrCodeElement = createQRCode('./images/image-qr-code.png');

    expect(qrCodeElement).toBeTruthy();
  });
});
