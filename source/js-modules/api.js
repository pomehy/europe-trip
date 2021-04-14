import { showModalSuccess } from './modal.js';
import { forms, addLocalStorage } from './form.js';

document.addEventListener('DOMContentLoaded', () => {

  const ajaxSend = async (formData) => {
    const fetchResp = await fetch('https://echo.htmlacademy.ru', {
      method: 'POST',
      body: formData
    });
    if (!fetchResp.ok) {
      throw new Error(`Ошибка по адресу ${url}, статус ошибки ${fetchResp.status}`);
    }
    return await fetchResp.text();
  };

  forms.forEach(form => {
    form.addEventListener('submit', function (evt) {
      evt.preventDefault();

      const formData = new FormData(this);

      ajaxSend(formData)
        .then((response) => {
          showModalSuccess();
          addLocalStorage();
          console.log(response);
          form.reset(); // очищаем поля формы
        })
        .catch((err) => {
          console.error(err);
          alert('Ошибка! Данные не отправлены, попробуй снова');
        })
    });
  });
});
