const buttons = document.querySelectorAll('.select-day-btn');
const days = document.querySelectorAll('.day-agenda-item');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    resetButtons();
    buttons[i].classList.add('active');
    let button_id = buttons[i].getAttribute('id');
    let selectedDay = document.getElementById(`${button_id}-item`);

    for (let i = 0; i < days.length; i++) {
      days[i].classList.remove('opened');
    }

    selectedDay.classList.add('opened');
  });
}

function resetButtons() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('active');
  }
}

resetButtons();
