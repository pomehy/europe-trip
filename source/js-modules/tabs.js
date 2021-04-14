const catalogNav = document.querySelector('.catalog-nav');
const catalogNavItems = document.querySelectorAll('.catalog-nav__link');
const catalogCards = document.querySelectorAll('.catalog__item');

const countriesList = document.querySelector('.countries__list');
const countriesCardLinks = document.querySelectorAll('.countries-card__link')

catalogNav.addEventListener('click', (evt) => {
  evt.preventDefault();

  if(evt.target.classList.contains('catalog-nav__link')) {
    let array = Array.from(catalogNavItems);
    let target = evt.target;
    let index = array.indexOf(target);


    array.forEach((item, i, arr) => {
      if(i === index) {
        if (item.dataset.catalogNav === catalogCards[i].id) {
          item.classList.add('catalog-nav__link--active');
          catalogCards[i].classList.add('catalog__item--active');
        }
      } else {
        item.classList.remove('catalog-nav__link--active');
        catalogCards[i].classList.remove('catalog__item--active');
      }
    });
  }
});

countriesList.addEventListener('click', (evt) => {
  if(evt.target.closest('.countries-card__link')) {
    let array = Array.from(countriesCardLinks);
    let target = evt.target.closest('.countries-card__link');
    let index = array.indexOf(target);

    array.forEach((item, i, arr) => {
      if(i === index) {
        if (item.dataset.countriesCard === catalogCards[i].id) {
          catalogNavItems[i].classList.add('catalog-nav__link--active');
          catalogCards[i].classList.add('catalog__item--active');
        }
      } else {
        catalogNavItems[i].classList.remove('catalog-nav__link--active');
        catalogCards[i].classList.remove('catalog__item--active');
      }
    });
  }
});
