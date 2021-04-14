import './modal.js';
import './api.js';
import './form.js';
import './tabs.js';
// import { getAnchors } from './util.js';

const pageHeaderToggle = document.querySelector('.page-header__toggle');
const pageHeader = document.querySelector('.page-header');
const catalog = document.querySelector('.catalog');

pageHeaderToggle.addEventListener('click', (evt) => {
  evt.preventDefault();
  pageHeader.classList.toggle('page-header--active');
  pageHeaderToggle.classList.toggle('page-header__toggle--active');
});

pageHeader.classList.remove('page-header--nojs');
pageHeader.classList.remove('page-header--active');
catalog.classList.remove('catalog--nojs');

// getAnchors(pageHeader);
