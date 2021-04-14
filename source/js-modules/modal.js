import {storagePhone, storageEmail } from './form.js';

const pageBody = document.querySelector('.page-body');
const buyTourButtons = document.querySelectorAll('.button[data-modal="buy-tour"]');

const modals = document.querySelectorAll('.modal');
const modalBuyTour = document.querySelector('.modal--buy-tour');
const modalSuccess = document.querySelector('.modal--success');
const phoneBuyTour = modalBuyTour.querySelector('input[name="phone"]');
const emailBuyTour = modalBuyTour.querySelector('input[name="email"]');

for (let i = 0; i < buyTourButtons.length; i++) {
  buyTourButtons[i].addEventListener('click', (evt) => {
    evt.preventDefault();
    modalBuyTour.classList.add('modal--show');
    pageBody.classList.add('page-body--no-scroll')
    phoneBuyTour.focus();

    if (storagePhone || storageEmail) {
      phoneBuyTour.value = storagePhone;
      emailBuyTour.value = storageEmail;
      phoneBuyTour.focus();
    } else {
      phoneBuyTour.focus();
    }
  });
};

window.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    if (modalBuyTour.classList.contains('modal--show')) {
      modalBuyTour.classList.remove('modal--show');
    } else if (modalSuccess.classList.contains('modal--show'))
      modalSuccess.classList.remove('modal--show');
    pageBody.classList.remove('page-body--no-scroll');
  }
});

for (let i = 0; i < modals.length; i++) {
  modals[i].addEventListener('click', (evt) => {
    if (evt.target.classList.contains('modal--show') || evt.target.classList.contains('modal__wrapper') || evt.target.classList.contains('modal__close')) {
      modals[i].classList.remove('modal--show');
      pageBody.classList.remove('page-body--no-scroll');
    }
  });
}

const showModalSuccess = () => {
  modalBuyTour.classList.remove('modal--show');
  modalSuccess.classList.add('modal--show');
  pageBody.classList.add('page-body--no-scroll')
}

export { showModalSuccess };
