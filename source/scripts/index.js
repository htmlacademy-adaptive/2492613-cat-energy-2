const nav = document.querySelector('.main-nav');
const navButton = document.querySelector('.main-nav__toggle');

nav.classList.add('main-nav--closed');

navButton.addEventListener('click', () => {
  nav.classList.toggle('main-nav--closed');
  nav.classList.toggle('main-nav--opened');
});

const slider = document.querySelector('.slider');
const sliderButton = document.querySelector('.slider__toggle');

if (slider) {
  let flag = false;
  sliderButton.addEventListener('click', () => {
    if (!flag) {
      flag = true;
      slider.classList.add('slider--before');
    } else {
      slider.classList.toggle('slider--before');
      slider.classList.toggle('slider--after');
    }
  });
}
