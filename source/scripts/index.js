/* в этот файл добавляет скрипты*/
const buttonWrapper = document.querySelector('.button-wrapper');
const burgerButton = document.querySelector('.burger-button');

buttonWrapper.addEventListener('click', () => {

  burgerButton.classList.toggle('burger-button--show');

});
