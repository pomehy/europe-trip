const forms = document.querySelectorAll('form');
const inputForms = document.querySelectorAll('input');

const PHONE_LENGTH = 10;


const isCyrillic = (text) => {
  return /[а-я]/i.test(text);
}

const CustomValidation = (input) => {
  const inputValue = input.value;
  const validity = input.validity;

  if (validity.valid && inputValue.length > 0) {
    input.classList.add('form__input--error');
  } else {
    input.classList.remove('form__input--error');
  }

  if (input.type === 'tel') {
    input.setAttribute('minlenght', PHONE_LENGTH)

    if (isNaN(inputValue)) {
      input.setCustomValidity('Укажите телефон в формате +7 XXX XXX XX XX');
      input.classList.add('form__input--error');
    } else if (inputValue.length < PHONE_LENGTH) {
      input.setCustomValidity('Введите ещё ' + (PHONE_LENGTH - inputValue.length) + ' цифр');
    } else {
      input.setCustomValidity('');
    }
  }

  if (input.type === 'email') {
    if (isCyrillic(inputValue)) {
      input.setCustomValidity('Введите латинские символы');
      input.classList.add('form__input--error');
    } else {
      input.classList.remove('form__input--error');
      input.setCustomValidity('');
    }
  }

  input.reportValidity();
}

for (let i = 0; i < inputForms.length; i++) {
  inputForms[i].addEventListener('input', () => {
    CustomValidation(inputForms[i]);
  })
}

let isStorageSupport = true;
let storagePhone = '';
let storageEmail = '';

try {
  storagePhone = localStorage.getItem('phone');
  storageEmail = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

const addLocalStorage = () => {
  if (isStorageSupport) {
    for (let i = 0; i < inputForms.length; i++) {
      if (inputForms[i].type === 'tel' || inputForms[i].type === 'email') {
        let storageKey = inputForms[i].name;
        localStorage.setItem(storageKey, inputForms[i].value);
      }
    }
  }
}

export {
  forms,
  inputForms,
  addLocalStorage,
  storagePhone,
  storageEmail
};
