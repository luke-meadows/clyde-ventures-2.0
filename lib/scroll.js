export function disableScroll() {
  const scrollX = window.scrollY;
  document.querySelector('body').style.overflow = 'hidden';
  document.querySelector('.main-content').style.opacity = '0.7';

  document.querySelector('.main-content').style.pointerEvents = 'none';
  window.scrollTo(0, scrollX);
}

export function enableScroll() {
  const scrollX = window.scrollY;
  document.querySelector('body').style.overflow = 'scroll';
  document.querySelector('.main-content').style.opacity = '1';

  document.querySelector('.main-content').style.pointerEvents = 'all';
  window.scrollTo(0, scrollX);
}
