/* в этот файл добавляет скрипты*/
const buttonWrapper = document.querySelector('.button-wrapper');
const burgerButton = document.querySelector('.burger-button');
const navigationList = document.querySelector('.navigation__list');

buttonWrapper.addEventListener('click', () => {

  burgerButton.classList.toggle('burger-button--show');
  navigationList.classList.toggle('navigation__list--show');
});
