let active = 0;
const width = 280;
const tariff__list = document.querySelector('.tariff__list');
const tariff__controls = document.querySelectorAll('.tariff__controls');

for (let i=0; i<tariff__controls.length; i++) {
  tariff__controls[i].onclick = function() {
    active = i;
    tariff__list.style.left = -(active * (width)) + 'px';
  }
}
