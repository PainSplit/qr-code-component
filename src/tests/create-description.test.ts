import { describe, expect, test } from 'vitest';
import createDescription from '../utils/create-description';

describe('Creating description element', () => {
  test('should render description element', () => {
    const description = {
      title: 'Hello',
      message: 'Hello but with world!'
    };

    if (typeof document === 'undefined') return;

    const descriptionElement = createDescription(description);

    expect(descriptionElement).toBeTruthy();
  });

  test('should title value has same value as Object.title', () => {
    const description = {
      title: 'Hello',
      message: 'Hello but with world!'
    };

    if (typeof document === 'undefined') return;

    createDescription(description);

    const titleElement = document.querySelector('.app__title')!;

    expect(titleElement.nodeValue).toEqual(description.title);
  });

  test('should message value has same value as Object.message', () => {
    const description = {
      title: 'Hello',
      message: 'Hello but with world!'
    };

    if (typeof document === 'undefined') return;

    createDescription(description);

    const messageElement = document.querySelector('.app__message')!;

    expect(messageElement.nodeValue).toEqual(description.message);
  });
});
