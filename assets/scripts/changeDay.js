import programDays from './programDays.js';
import presentationData from './presentationData.js';

const buttons = document.querySelectorAll('.select-day-btn');
let programHeading = document.querySelector('.day-agenda__heading');
let programList = document.querySelector('.day-agenda__list');
let presentationCode = document.querySelector('.presentation__code');
let presentationContent = document.querySelector('.presentation__content');
let presentationHeading = document.querySelector('.presentation__heading');
let presentationImportant = document.querySelector('.presentation__important');

programList.addEventListener('click', (e) => {
  const isClickable = e.target.getAttribute('class') === 'clickable';
  if (!isClickable) return;

  const itemId = e.target.getAttribute('id');
  resetPresentation();

  const { heading, content, code, important } = presentationData[itemId];
  if (heading) presentationHeading.innerHTML = heading;
  if (content) presentationContent.innerHTML = content;
  if (code) presentationCode.innerHTML = code;
  if (important) presentationImportant.innerHTML = important;
});

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    reset();
    buttons[i].classList.add('active');
    let buttonId = buttons[i].getAttribute('id');

    programHeading.textContent = programDays[buttonId].title;
    programDays[buttonId].program.map((item) => {
      const itemEl = document.createElement('li');
      itemEl.textContent = item.content;
      if (item.id) {
        itemEl.setAttribute('id', item.id);
        itemEl.setAttribute('class', 'clickable');
      }

      programList.appendChild(itemEl);
    });
  });
}

function reset() {
  programList.innerHTML = '';
  programHeading.innerHTML = '';
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('active');
  }
}

reset();

function resetPresentation() {
  presentationHeading.innerHTML = '';
  presentationContent.innerHTML = '';
  presentationCode.innerHTML = '';
  presentationImportant.innerHTML = '';
}

resetPresentation();
