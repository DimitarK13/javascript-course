'use strict';

const presentationData = {
  introduction: {
    heading: 'Запознавање',
    content:
      'Јас сум Димитар Калапоцев, роден и живеам во Струмица, имам 20 години и се занимавам со веб девелопмент во последните 3 и пол години.<br><br> Јас ќе ви бидам ментор и инструктор во следните 4 недели, односно 8 часа и се разбира ќе ви бидам на распологање и по завршувањето на курсот. Овој ми е четврти курс за програмирање со JavaScript и се надевам дека ќе можам да ви ја доловам важноста на JavaScript на наједноставен начин.<br><br> Начинот на кој стигнав овде каде што сум во мојата кариера е преку многу курсеви, многу туторијали и многу саати поминати на не реални проекти, па ќе се потрудам до крајот на овој курс да ве охрабрам и вие да го направите тоа што и јас го направив.',
  },
  'what-is-js': {
    heading: 'Што е JavaScript',
    content:
      'JavaScript е третиот и последен програмски јазик потребен за основно веб програмирање, заедно со HTML и CSS. Во 2023, преку 1.8 милијарди веб страни работат со помош на JavaScript.<br><br> Целта на JavaScript е да овозможи интерактивни веб страни (прикажување на различни содржини без рефреширање на веб страна, интерактивни мапи, вклучување/исклучување навигации, итн...).  Со JavaScript имаме пристап до сите елементи кои се на веб страната, преку DOM (Document Object Model), можеме да ги менуваме/модифицираме истите елементи (да додаваме нови елементи, атрибути, мениме содржина), да создаваме функции за автоматизација за чекори кои ги повторуваме и се разбира да реагираме на промени на страна (клик од маус, одредено поминато време, лоадирана веб страна, итн...).',
  },
  'hello-world': {
    heading: "'Hello World'",
    content: `'Hello World' е наједноставна програма и најчесто се користи за запознавање на некој нов програмски јазик. Во JavaScript тоа може да го направиме на следните начини.`,
    code: "console.log('Hello World');<br>alert('Hello World');",
  },
  comments: {
    heading: 'Коментари',
    content:
      'Коментари се користат за објаснување на код, кога се навраќате на код по некое време да знаете што извршува истиот код, или ако некој друг девелопер работи на вашиот код да може да се снајде без ваша помош. Исто така се користат и за преќинување на извршување на код, никој код во коментари не се извшува.',
    code: '// single line comment<br><br>/* <br>multi<br> line<br> comment<br>/*',
    important:
      'Секогаш запишувај коментари, можеби сега ти нема смисла но за неколку години ќе добие.',
  },
  values: {
    heading: 'Вредности',
    content:
      'Постојат два вида на вредности во JavaScript: Примитивни и Објекти. За да дознаеш која вредност е одреден податок во JavaScript, користиме typeof.',
    code: 'String - збир на карактери<br>Number - децимални и цели броеви<br>Boolean - true/false (или едното или другото)<br>Undefined - декларирана но празна променлива<br>Null - празна променлива (објекти)',
    important: '',
  },
  variables: {
    heading: 'Променливи',
    content:
      'Променливи се како кутии за сместување на вредности. Во JavaScript постојат три начини за декларирање на променливи:',
    code: 'var - стар начин на декларирање променливи (не се користи веќе)<br>let - нов начин на декларирање на променливи кои знаеме дека ќе ги менуваме<br>const - креира променливи кои повеќе не можат да бидат променети',
    important:
      'Секогаш употребувај const освен кога си сигрен/а дека вредноста на променливата ќе биде променета, тогаш употреби let.',
  },
  operators: {
    heading: 'Оператори',
    content:
      'Во JavaScript разликуваме многу видови на оператори како аритметички оператори, логички оператори, оператори за споредување, оператори за доделување и други. Неколку примери од различни оператори во JavaScript:',
    code: 'Собирање (+)<br>Одземање (-)<br>Множење (*)<br>Еднаква вредности и вид (===)<br>Не еднаква вредност и вид (!==)<br>Поголемо или еднакво на (>=)<br>Логичко И (&&)<br>Логичко ИЛИ (||)<br>Логичко НЕ (!)<br>',
  },
  'if-else': {
    heading: 'If... else',
    content:
      'If... else извршува одреден код ако изјавата е точна, ако изјавата не е точна се извршува друг код.',
    code: "if (5 > 2) {<br>&nbsp;&nbsp;console.log('Ова е точно');<br>} else {<br>&nbsp;&nbsp;console.log('Ова не е точно');<br>}",
  },
  'true-falsy-values': {
    heading: 'Точни и неточни вредности',
    content:
      'Во JavaScript вредностите се делат на точни или неточни вредности. Во if... else услов како услов може да ставиме било каква вредност, и сите вредности се точни освен наведените подолу:',
    code: `false<br>0<br>'' или "" (празни карактери)<br>undefined<br>null<br>NaN`,
  },
  loops: {
    heading: 'Loops',
    content:
      'Loops се низа од инструкции кои непрекинато се повторуваат додека не се постигне одредена состојба. Loops следат услов и се додека условот враќа true кодот внатре во loop-от ќе биде извршуван. Кога услувот ќе врати false, loop-от завршува.',
  },
  'for-loop': {
    heading: 'For Loop',
    content: 'For Loop се состои од 3 дела. Иницијализација, услов и обнова.',
    code: `for (let i = 0; i < 10; i++) {<br>&nbsp;&nbsp;console.log('Printed ' + i + ' times');<br>}`,
    important:
      'For Loop најчесто се користи кога не знаеме со колкав број на податоци ќе работиме, или ако знаеме дека ќе работиме со голем број на податоци.',
  },
  'while-loop': {
    heading: 'While Loop',
    content:
      'While Loop се состои од истите 3 дела како и For Loop, со малку поразличен распоред.',
    code: `let n = 0;<br>while (n < 10) {<br>&nbsp;&nbsp;console.log('Printed ' + n + ' times');<br>&nbsp;&nbsp;n++;<br>}`,
    important:
      'While Loop е побавен во споредба со For Loop па го користиме кога знаеме дека бројот на податоци со кои ќе работиме е мал.',
  },
  functions: {
    heading: 'Функции',
    content:
      'Функциите дозволуваат да групираме повеќе изјави заедно за за да извршиме одредена задача. Ако различни делови од програмата ја повторуваат истата задача, користиме функции (наместо да го повторуваме целиот код).<br><br>За да креираме функција, го користиме function зборчето и и задаваме име на функцијата, со одредени параметри (ако се потребни) и кодот што треба да се изврши во кадрави загради.',
    code: `function calcArea(width, height) {<br>&nbsp;&nbsp;return width * height;<br>}<br><br>calcArea(5,3);`,
  },
  'return-functions': {
    heading: 'Функции - враќање вредности',
    content:
      'Функциите освен што извршуваат одредени задачи, исто така и враќаат информации. За функција да ни врати информација го користиме return зборчето. Одкако JavaScript ќе го забележи return, ја напушта функцијата и не извшува ништо друго во неа.',
    code: `function calcArea(width, height) {<br>&nbsp;&nbsp;return width * height;<br>}<br><br>let area = calcArea(5,3);`,
    important: 'Променливата area ќе има вредност 15.',
  },
  arrays: {
    heading: 'Низи',
    content:
      'Arrays (низи) ни овозможуваат да запишуваме колекција од податоци во една променлива. Главна карактеристика на arrays е што редоследот на податоците не се менува, односно редоследот на податоците е редоследот по кои податоците се внесени.',
    code: `const fruits = [‘apple’, ‘orange’, ‘banana’];`,
    important:
      'Во arrays, може да ги запишуваме сите видови на вредности: strings, numbers, Booleans, undefined, null па дури и други arrays и objects.',
  },
  'array-methods': {
    heading: 'Методи на низи',
    content:
      'Методи на низи се предефинирани функции од страна на JavaScript кои ни овозможуваат полесно работење со низи. Со помош но овие методи можеме да сортираме низи, додаваме и одземаме елементи, бараме елементи во низи и др.',
    code: `array.pop(); - Одзема елемент од крајот на низата<br>array.push('New Element'); - Додава елемент на крајот од низата<br>array.shift(); - Одзема елемент од почетокот на низата<br>array.unshift('New Element'); - Додава елемент на почетокот на низата`,
    important:
      'Некои методи ги модифицираат на низите, а некои методи враќаат нови низи од веќепостоечките низи',
  },
  objects: {
    heading: 'Објекти',
    content:
      'Исто како и низите, објектите ни дозволуваат да запишуваме повеќе податоци во една променлива. Разликата помеѓу низи и објекти е тоа што објектите ги запишуваме во вид на key/value парови. И во објекти може да ги запишуваме сите видови на вредности + методи (функции).',
    code: `const dimitar = {<br>&nbsp;&nbsp;name: 'Dimitar',<br>&nbsp;&nbsp;lastName: 'Kalapocev',<br>&nbsp;&nbsp;profession: ['Teacher', 'Developer'],<br>&nbsp;&nbsp;introduce: function() {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log('My name is ' this.name);<br>&nbsp;&nbsp;}<br>}<br><br>dimitar.introduce();`,
  },
  'this-keyword': {
    heading: "'this' keyword",
    content: `'this' зборчето го користиме внатре во објекти за да читаме податоци од истиот тој објект. 'this' беше додадено во JavaScript за да се елеминираат грешки при користење податоци надвор и внатре од објектот.`,
    code: `Внатре во објект, 'this' е истиот тој објект.<br>Надвор од објект, 'this' е глобалниот објект.<br>Внатре во функција, 'this' е глобалниот објект.<br>Внатре во функција, во 'strict mode', 'this' е undefined.`,
  },
  dom: {
    heading: 'ДОМ - Document Object Model',
    content:
      'ДОМ или Document Object Model е објект креиран од секој пребарувач (browser) кога веб-страна е лоадирана. Тоа е начин за комуникација помеѓу HTML и JavaScript. ДОМ моделот е конструиран во вид на дрво и секој елемент претставува посебен објект во тоа дрво. Со ДОМ имаме пристап до сите елементи на веб-страната и можеме да ги селектираме, модифицираме, бришеме и да додаваме нови елементи. Исто така со ДОМ можеме да слушеме за евенти како што се клик од маус, претиснато копче на тестатура, движење на маус и други.',
    code: `document.querySelector('h1');<br>document.querySelectorAll('.section');<br>document.getElementsByClassName('nav-item');`,
  },
  'what-next': {
    heading: 'Што следно',
    content:
      'Доколку оваа ви е прва интеракција со веб девелопмент, тогаш вратете се два чекори назад и посветете внимание на HTML и CSS. Доколку веќе сте запознаени со HTML и CSS и сакате да го надоградите вашето знаење со JavaScript, тогаш продолжете со <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" target="_blank">freecodecamp - JS Algorithms and Data Structures.</a> Откако ќе го осовршите JavaScript, тогаш може да започнете со React.',
    important:
      'Веб девелопмент е долг процес на учење и ако само ги поминувате потребните програмски јазици, понатаму ќе се среќавате со многу потешкотии и ќе се навраќате, затоа чекор по чекор.',
  },
  'useful-sources': {
    heading: 'Корисни извори',
    content:
      '<h3>За учење:</h3>Google<br>YouTube<br>Udemy<br>Free Code Camp<br><br><h3>За документација:</h3>W3Schools<br>MDN<br><br><h3>За проекти:</h3>Frontend Mentor',
  },
};

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
      { content: 'Функции - враќање вредности', id: 'return-functions' },
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

const buttons = document.querySelectorAll('.select-day-btn');
const presentationCode = document.querySelector('.presentation__code');
const presentationContent = document.querySelector('.presentation__content');
const presentationHeading = document.querySelector('.presentation__heading');
const presentationImportant = document.querySelector(
  '.presentation__important'
);
const programHeading = document.querySelector('.day-agenda__heading');
const programList = document.querySelector('.day-agenda__list');

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
    const buttonId = buttons[i].getAttribute('id');

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
