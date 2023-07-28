import { describe, expect, test } from 'vitest';
import createAttribution from '../utils/create-attribution';

describe('Creating attribution element', () => {
  test('should render attribution element', () => {
    const attribution = {
      name: 'foo',
      href: '#bar',
    };

    if (typeof document === 'undefined') return;

    const attributionElement = createAttribution(attribution);

    expect(attributionElement).toBeTruthy();
  });

  test('should name value same value as Object.name', () => {
    const attribution = {
      name: 'foo',
      href: '#bar',
    };

    if (typeof document === 'undefined') return;

    createAttribution(attribution);

    const nameElement = document
      .querySelector(`a[href="${attribution.href}"]`)!;

    expect(nameElement.nodeValue).toEqual(attribution.name);
  });

  test('should attribution has correct href attribute', () => {
    const attribution = {
      name: 'foo',
      href: '#bar',
    };

    if (typeof document === 'undefined') return;

    createAttribution(attribution);

    const hasHrefAttribute = document
      .querySelector(`a[href="${attribution.href}"]`)!;

    expect(hasHrefAttribute).toBeTruthy();
  });
});
