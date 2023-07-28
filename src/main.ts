import './style.css';
import App from './views/templates/app';

const app = new App(document.querySelector<HTMLDivElement>('#app')!);
window.addEventListener('DOMContentLoaded', () => {
  app;
});
