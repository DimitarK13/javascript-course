const buttons = document.querySelectorAll('.select-day-btn');
const days = document.querySelectorAll('.day-agenda-item');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    resetButtons();
    button.classList.add('active');
    let button_id = button.getAttribute('id');
    let selectedDay = document.getElementById(`${button_id}-item`);
    days.forEach((day) => {
      day.classList.remove('opened');
    });
    selectedDay.classList.add('opened');
  });
});

function resetButtons() {
  buttons.forEach((btn) => {
    btn.classList.remove('active');
  });
}

resetButtons();
