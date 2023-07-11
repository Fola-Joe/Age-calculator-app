const inputs = document.querySelectorAll('input');
const submitBtn = document.querySelector('button');
const label = document.querySelectorAll('label');
const form = document.querySelector('form');

const dayInput = document.querySelector('#day');
const monthInput = document.querySelector('#month');
const yearInput = document.querySelector('#year');

const yearOutput = document.querySelector('.h1');
const monthOutput = document.querySelector('.h2');
const dayOutput = document.querySelector('.h3');


//Numbers input only
dayInput.addEventListener('input', (e) => {
    const input = e.target.value;
    const numbersOnly = input.replace(/[^0-9]/g, '');
    e.target.value = numbersOnly;
});
monthInput.addEventListener('input', (e) => {
    const input = e.target.value;
    const numbersOnly = input.replace(/[^0-9]/g, '');
    e.target.value = numbersOnly;
});
yearInput.addEventListener('input', (e) => {
    const input = e.target.value;
    const numbersOnly = input.replace(/[^0-9]/g, '');
    e.target.value = numbersOnly;
});

function dateCalculator() {
    const date = new Date();
    const currentDay = date.getDate();
    const currentMonth = date.getMonth() + 1;
    const currentYear = date.getFullYear();

    let years = currentYear - yearInput.value;
    let months = currentMonth - monthInput.value;
    let days = currentDay - dayInput.value;

  // Adjust the age if the current month is before the birth month
  if (currentMonth < monthInput.value) {
    years--;
    months = 12 - (monthInput.value - currentMonth);
  }
  // Adjust the age if the current month is the birth month but the current day is before the birth day
  else if (currentMonth === monthInput.value && currentDay < dayInput.value) {
    years--;
    months = 11;
    days = currentDay + (getDaysInMonth(monthInput.value - 1, currentYear) - dayInput.value);
  }
  // Adjust the age if the current day is before the birth day
  else if (currentDay < dayInput.value) {
    months--;
    days = currentDay + (getDaysInMonth(monthInput.value - 1, currentYear) - dayInput.value);
    }
    
    dayOutput.innerText = days;
    monthOutput.innerText = months;
    yearOutput.innerText = years;
}


form.addEventListener('submit', function(e) {
    e.preventDefault();
    const dayError = document.querySelector('.day-span');
    const monthError = document.querySelector('.month-span');
    const yearError = document.querySelector('.year-span');

    //conditions for empty input fields and wrong days, months and years
    let dayNum = dayInput.value;
    if (!dayInput.value){
        inputs[0].classList.add('error');
        dayError.innerText = 'This field is required';
        label[0].style.color = 'hsl(0, 100%, 67%)';
    } else if (dayNum > 31){
        inputs[0].classList.add('error');
        dayError.innerText = 'Must be a valid day';
        label[0].style.color = 'hsl(0, 100%, 67%)';
    } else {
        inputs[0].classList.remove('error');
        dayError.innerText = '';
        label[0].style.color = '';
    }

    let monthNum = monthInput.value;
    if (!monthInput.value){
        inputs[1].classList.add('error');
        monthError.innerText = 'This field is required';
        label[1].style.color = 'hsl(0, 100%, 67%)';
    } else if (monthNum > 12){
        inputs[1].classList.add('error');
        monthError.innerText = 'Must be a valid month';
        label[1].style.color = 'hsl(0, 100%, 67%)';
    } else {
        inputs[1].classList.remove('error');
        monthError.innerText = '';
        label[1].style.color = '';
    }

    const currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let yearNum = yearInput.value;
    if (!yearInput.value){
        inputs[2].classList.add('error');
        yearError.innerText = 'This field is required';
        label[2].style.color = 'hsl(0, 100%, 67%)';
    } else if (yearNum >= currentYear){
        inputs[2].classList.add('error');
        yearError.innerText = 'Must be in the past';
        label[2].style.color = 'hsl(0, 100%, 67%)';
    } else {
        inputs[2].classList.remove('error');
        yearError.innerText = '';
        label[2].style.color = '';
    }

    dateCalculator();
})
