const buttons = document.querySelectorAll('.select-day-btn');
let programHeading = document.querySelector('.day-agenda__heading');
let programList = document.querySelector('.day-agenda__list');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    reset();
    buttons[i].classList.add('active');
    let button_id = buttons[i].getAttribute('id');

    programHeading.textContent = programDays[button_id].title;
    programDays[button_id].program.map((item) => {
      const itemEl = document.createElement('li');
      itemEl.textContent = item.content;
      if (item.id) itemEl.setAttribute('id', item.id);

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

const programDays = {
  'day-1': {
    title: 'Ден 1',
    program: [
      { content: 'Запознавање', id: 'introduction' },
      { content: 'Што ќе учиме' },
      { content: 'Поставување VS Code' },
      { content: 'Што е JavaScript', id: 'what-is-js' },
      { content: "'Hello World'", id: 'hello-world' },
      { content: 'Коментари', id: 'comments' },
    ],
  },
  'day-2': {
    title: 'Ден 2',
    program: [
      { content: 'Вредности', id: 'values' },
      { content: 'Променливи', id: 'variables' },
      { content: 'Оператори', id: 'operators' },
      { content: 'If... Else', id: 'if-else' },
      { content: 'Точни и неточни вредности', id: 'true-falsy-values' },
    ],
  },
  'day-3': {
    title: 'Ден 3',
    program: [
      { content: 'Loops', id: 'loops' },
      { content: 'For Loop', id: 'for-loop' },
      { content: 'While Loop', id: 'while-loop' },
      { content: 'Loop вежби' },
    ],
  },
  'day-4': {
    title: 'Ден 4',
    program: [
      { content: 'Функции', id: 'functions' },
      { content: 'Функции вежби' },
    ],
  },
  'day-5': {
    title: 'Ден 5',
    program: [
      { content: 'Низи', id: 'arrays' },
      { content: 'Методи на низи', id: 'array-methods' },
      { content: 'Низи вежби' },
    ],
  },
  'day-6': {
    title: 'Ден 6',
    program: [
      { content: 'Објекти', id: 'objects' },
      { content: "'this' keyword", id: 'this-keyword' },
      { content: 'Објекти вежби' },
    ],
  },
  'day-7': {
    title: 'Ден 7',
    program: [{ content: 'ДОМ - Document Object Model', id: 'dom' }],
  },
  'day-8': {
    title: 'Ден 8',
    program: [
      { content: 'Посветување внимание на несигурни теми' },
      { content: 'Вежби' },
      { content: 'Прашања' },
      { content: 'Што следно', id: 'what-next' },
      { content: 'Корисни извори', id: 'useful-sources' },
    ],
  },
};

document.querySelector(
  '.presentation__code'
).innerHTML = `for (let i = 0; i < 10; i++) {<br>
  &nbsp;&nbsp;console.log(‘Printed ‘ + i + ‘ times’);
<br>}
`;
