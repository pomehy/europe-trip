let mainMenuToggle = document.querySelector('.page-header__toggle');
let pageHeader = document.querySelector('.page-header');
let mainNav = document.querySelector('.main-nav');
let priceModalButton = document.querySelector('.price__link');
let priceModal = document.querySelector('.business-price');
let modalCloseButton = document.querySelector('.modal__close');
let travelersValue = document.getElementById('travelers-value');
let daysValue = document.getElementById('days-value');
let inputCounterButtons = document.querySelectorAll('.input-counter__button');
let inputCounterNumbers = document.querySelectorAll('.input-counter__input-number');
let stepMarkerItems = document.querySelectorAll('.step-marker__item');
let planSteps = document.querySelectorAll('.plan-step');
let planStepButtonNexts = document.querySelectorAll('.plan-step__button');
let planStepButtonPrevs = document.querySelectorAll('.plan-step__button-prev');
let toggleCountries = document.querySelector('.toggle-countries');
let filterCountryClose = document.querySelector('.filter-country__button');
let filterCountry = document.querySelector('.filter-country');
let fieldsetAccordionToggles = document.querySelectorAll('.fieldset-accordion__toggle');
let fieldsetAccordions = document.querySelectorAll('.fieldset-accordion');
let likesButtons = document.querySelectorAll('.likes__button');
let selectCountry = document.querySelector('.select-country__choice--select');
let selectCountryName = document.querySelector('.select-country__name--select');
let selectCountryOptions = document.querySelectorAll('.select-country__option');
let selectFlag = document.querySelector('.flag--select');
let selectFlagTooltip = document.querySelector('.flag__tooltip--select');
let selectCountryDeleteButtons = document.querySelectorAll('.select-country__delete');
let filterAbcButtons = document.querySelectorAll('.filter-abc__button');
let filterAbcLists = document.querySelectorAll('.filter-abc__list');

pageHeader.classList.remove('page-header--active');
pageHeader.classList.remove('page-header--nojs');

mainMenuToggle.addEventListener('click', function (evt) {
  evt.preventDefault();
  pageHeader.classList.toggle('page-header--active');
});

window.addEventListener('scroll', function(evt) {
  if (window.pageYOffset >= 29) {
    pageHeader.classList.add('page-header--fixed-top');
    mainNav.classList.add('main-nav--light');
  } else if (window.pageYOffset < 35) {
    pageHeader.classList.remove('page-header--fixed-top');
    mainNav.classList.remove('main-nav--light');
  }
});

if (priceModalButton) {
  priceModalButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    priceModal.classList.add('modal--show');
  });
}

if (modalCloseButton) {
  modalCloseButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    priceModal.classList.remove('modal--show');
  });
}

Array.from(inputCounterButtons).forEach(inputCounterButton =>
  inputCounterButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (inputCounterButton.dataset.travelers === "plus") {
      travelersValue.value = parseInt(travelersValue.value, 10) + parseInt(1, 10);
    } else if (inputCounterButton.dataset.travelers === "minus") {
      travelersValue.value = parseInt(travelersValue.value, 10) - parseInt(1, 10);
      if (travelersValue.value < 0) {
        travelersValue.value = 0;
      }
    } else if (inputCounterButton.dataset.days === "plus") {
      daysValue.value = parseInt(daysValue.value, 10) + parseInt(1, 10);
    } else if (inputCounterButton.dataset.days === "minus") {
      daysValue.value = parseInt(daysValue.value, 10) - parseInt(1, 10);
      if (daysValue.value < 0) {
        daysValue.value = 0;
      }
    }
  }));

Array.from(planStepButtonNexts).forEach(planStepButtonNext =>
  planStepButtonNext.addEventListener('click', function (evt) {
    if (planStepButtonNext.getAttribute('href')) {
      evt.preventDefault();
      if (planStepButtonNext.getAttribute('href') === "#step-2") {
        planSteps[0].classList.remove('plan-step--active');
        planSteps[1].classList.add('plan-step--active');
        stepMarkerItems[0].classList.remove('step-marker__item--active');
        stepMarkerItems[1].classList.add('step-marker__item--active');
        planSteps[1].scrollIntoView();
      } else if (planStepButtonNext.getAttribute('href') === "#step-3") {
        planSteps[1].classList.remove('plan-step--active');
        planSteps[2].classList.add('plan-step--active');
        stepMarkerItems[1].classList.remove('step-marker__item--active');
        stepMarkerItems[2].classList.add('step-marker__item--active');
        planSteps[2].scrollIntoView();
      }
    }
  })
);

Array.from(planStepButtonPrevs).forEach(planStepButtonPrev =>
  planStepButtonPrev.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (planStepButtonPrev.getAttribute('href') === "#step-2") {
      planSteps[2].classList.remove('plan-step--active');
      planSteps[1].classList.add('plan-step--active');
      stepMarkerItems[2].classList.remove('step-marker__item--active');
      stepMarkerItems[1].classList.add('step-marker__item--active');
      planSteps[1].scrollIntoView();
    } else if (planStepButtonPrev.getAttribute('href') === "#step-1") {
      planSteps[1].classList.remove('plan-step--active');
        planSteps[0].classList.add('plan-step--active');
        stepMarkerItems[1].classList.remove('step-marker__item--active');
        stepMarkerItems[0].classList.add('step-marker__item--active');
      planSteps[2].scrollIntoView();
    }
  })
);

Array.from(filterAbcLists).forEach(filterAbcList =>
  filterAbcList.addEventListener('click', function(evt) {
    evt.preventDefault();
    if(evt.target.classList.contains('filter-abc__button')) {
      let array = Array.from(filterAbcButtons);
      let target = evt.target;
      let index = array.indexOf(target);

      array.forEach(function(item, i, arr) {
        if(i === index) {
          item.classList.add('filter-abc__button--active');
        } else {
          item.classList.remove('filter-abc__button--active');
        }
      });
    }
  })
);

if (selectCountry) {
  selectCountry.addEventListener('click', function(evt) {
  evt.preventDefault();
  selectCountry.classList.toggle('select-country__choice--active')
  })
}

Array.from(selectCountryOptions).forEach(selectCountryOption =>
  selectCountryOption.addEventListener('click', function (evt) {
    selectCountryName.textContent = selectCountryOption.textContent;
    selectCountry.classList.remove('select-country__choice--active');
    selectCountry.classList.add('select-country__choice--yes');
    selectFlag.className = 'flag--select';
    selectFlag.classList.add('flag');
    if (selectCountryOption.textContent === 'Австралия') {
      selectFlag.classList.add('flag--australia');
      selectFlagTooltip.textContent = 'Австралия';
    } else if (selectCountryOption.textContent === 'Тайланд') {
      selectFlag.classList.add('flag--thailand');
      selectFlagTooltip.textContent = 'Тайланд';
    } else if (selectCountryOption.textContent === 'Тайланд') {
      selectFlag.classList.add('flag--thailand');
      selectFlagTooltip.textContent = 'Тайланд';
    } else if (selectCountryOption.textContent === 'Шри-Ланка') {
      selectFlag.classList.add('flag--sri-lanka');
      selectFlagTooltip.textContent = 'Шри-Ланка';
    } else if (selectCountryOption.textContent === 'Сейшелы') {
      selectFlag.classList.add('flag--seychelles');
      selectFlagTooltip.textContent = 'Сейшелы';
    } else if (selectCountryOption.textContent === 'Бельгия') {
      selectFlag.classList.add('flag--belgium');
      selectFlagTooltip.textContent = 'Бельгия';
    } else if (selectCountryOption.textContent === 'Чехия') {
      selectFlag.classList.add('flag--czech');
      selectFlagTooltip.textContent = 'Чехия';
    } else if (selectCountryOption.textContent === 'Босния и Герцеговина') {
      selectFlag.classList.add('flag--bosnia');
      selectFlagTooltip.textContent = 'Босния и Герцеговина';
    } else if (selectCountryOption.textContent === 'США') {
      selectFlag.classList.add('flag--usa');
      selectFlagTooltip.textContent = 'США';
    } else if (selectCountryOption.textContent === 'Великобритания') {
      selectFlag.classList.add('flag--britain');
      selectFlagTooltip.textContent = 'Великобритания';
    } else if (selectCountryOption.textContent === 'Германия') {
      selectFlag.classList.add('flag--germany');
      selectFlagTooltip.textContent = 'Германия';
    } else if (selectCountryOption.textContent === 'Доминика') {
      selectFlag.classList.add('flag--dominica');
      selectFlagTooltip.textContent = 'Доминика';
    } else if (selectCountryOption.textContent === 'Франция') {
      selectFlag.classList.add('flag--france');
      selectFlagTooltip.textContent = 'Франция';
    } else {
      selectFlag.classList.add('flag--no');
      selectFlagTooltip.textContent = 'Нет флага';
    }
  })
);

if (selectCountryDeleteButtons[2]) {
  selectCountryDeleteButtons[2].addEventListener('click', function (evt) {
    evt.preventDefault();
    selectCountry.classList.remove('select-country__choice--yes');
    selectFlag.className = 'flag--select';
    selectFlag.classList.add('flag');
    selectCountryName.textContent = 'Выберите страну'
  })
}

if (toggleCountries) {
  toggleCountries.addEventListener('click', function (evt) {
    evt.preventDefault();
    filterCountry.classList.toggle('filter-country--active');
    toggleCountries.classList.toggle('toggle-countries--active')
  });
}

if (filterCountryClose) {
  filterCountryClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    filterCountry.classList.remove('filter-country--active');
    toggleCountries.classList.remove('toggle-countries--active');
  });
}

Array.from(fieldsetAccordionToggles).forEach(fieldsetAccordionToggle =>
  fieldsetAccordionToggle.addEventListener('click', function(evt) {
    evt.preventDefault();
    if(evt.target.classList.contains('fieldset-accordion__toggle')) {
      let array = Array.from(fieldsetAccordionToggles);
      let target = evt.target;
      let index = array.indexOf(target);

      array.forEach(function(item, i, arr) {
        if(i === index) {
          item.classList.toggle('fieldset-accordion__toggle--active');
          fieldsetAccordions[i].classList.toggle('fieldset-accordion--active')
        }
      });
    }
  })
);

Array.from(likesButtons).forEach(likesButton =>
  likesButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    likesButton.classList.toggle('likes__button--active')
  })
);
