import WindowMock from 'window-mock';

export function getWindow() {
  return typeof window !== 'undefined' ? window : new WindowMock();
}

export function isTouchDevice() {
  const window = getWindow();
  const navigator = window.navigator || {};

  return 'ontouchstart' in window || navigator.maxTouchPoints;
}

export function scrollY() {
  const window = getWindow();

  return window.scrollY || window.pageYOffset;
}
