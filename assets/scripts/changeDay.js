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
      itemEl.textContent = item;

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
      'Запознавање',
      'Што ќе учиме',
      'Поставување VS Code',
      'Што е JavaScript',
      "'Hello World'",
      'Коментари',
    ],
  },
  'day-2': {
    title: 'Ден 2',
    program: [
      'Вредности',
      'Променливи',
      'Оператори',
      'If... Else',
      'Точни и неточни вредности',
    ],
  },
  'day-3': {
    title: 'Ден 3',
    program: ['For Loop', 'While Loop', 'Loop вежби'],
  },
  'day-4': {
    title: 'Ден 4',
    program: ['Функции', 'Функции вежби'],
  },
  'day-5': {
    title: 'Ден 5',
    program: ['Низи', 'Методи на низи', 'Низи вежби'],
  },
  'day-6': {
    title: 'Ден 6',
    program: ['Објекти', "'this' keyword", 'Објекти вежби'],
  },
  'day-7': {
    title: 'Ден 7',
    program: ['ДОМ - Document Object Model'],
  },
  'day-8': {
    title: 'Ден 8',
    program: [
      'Посветување внимание на несигурни теми',
      'Вежби',
      'Прашања',
      'Што следно',
      'Корисни извори',
    ],
  },
};
