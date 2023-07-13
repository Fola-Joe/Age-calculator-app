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


function getDaysInMonth(year, month){
    return new Date(year, month + 1, 0).getDate();
}

function dateCalculator() {
    const date = new Date();
    const currentDay = date.getDate();
    const currentMonth = date.getMonth() + 1;
    const currentYear = date.getFullYear();

    let years = currentYear - yearInput.value;
    let months = currentMonth - monthInput.value;
    let days = currentDay - dayInput.value;

    years = currentYear - yearInput.value;
    if(currentMonth >= monthInput.value){
        months = currentMonth - monthInput.value;
    } else {
        years--;
        months = (currentMonth + 12) - monthInput.value;
    }
    if (currentDay >= dayInput.value){
        days = currentDay - dayInput.value;
    } else {
        months--;
        days = getDaysInMonth(yearInput.value, monthInput.value) + currentDay - dayInput.value;
    }
    if (months < 0){
        months = 11;
        years--;
    }

    //ensuring no display if input fields are empty
    if(!dayInput.value) {
        dayOutput.innerText = '--';
    }
    else {
        dayOutput.innerText = days;
        dayOutput.classList.add('animate');
    }
    if (!monthInput.value) {
        monthOutput.innerText = '--';
    } else {
        monthOutput.innerText = months;
        monthOutput.classList.add('animate');
    }
    if (!yearInput.value){
        yearOutput.innerText = '--';
    } else {
        yearOutput.innerText = years;
        yearOutput.classList.add('animate');
    }

    //no display if error is being displayed
    if (label[0].style.color || label[1].style.color || label[2].style.color === 'hsl(0, 100%, 67%)'){
        dayOutput.innerText = '--';
        monthOutput.innerText = '--';
        yearOutput.innerText = '--';
    }
}


form.addEventListener('submit', function(e) {
    e.preventDefault();
    const dayError = document.querySelector('.day-span');
    const monthError = document.querySelector('.month-span');
    const yearError = document.querySelector('.year-span');

    // Check if the year is a leap year
    let isLeapYear = (yearInput.value % 4 === 0);

    let maxDaysInMonth = [
        31, // January
        isLeapYear ? 29 : 28, // February
        31, // March
        30, // April
        31, // May
        30, // June
        31, // July
        31, // August
        30, // September
        31, // October
        30, // November
        31  // December
    ];

    //conditions for empty input fields and wrong days, months and years
    let dayNum = dayInput.value;
    if (!dayNum){
        inputs[0].classList.add('error');
        dayError.innerText = 'This field is required';
        label[0].style.color = 'hsl(0, 100%, 67%)';
    } else if (dayInput.value < 1 || dayInput.value > maxDaysInMonth[monthInput.value - 1]) {
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
    } else if (monthNum < 1 || monthNum > 12){
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
    } else if (yearNum.length < 4){
        inputs[2].classList.add('error');
        yearError.innerText = 'Input 4 digits';
        label[2].style.color = 'hsl(0, 100%, 67%)';
    } else {
        inputs[2].classList.remove('error');
        yearError.innerText = '';
        label[2].style.color = '';
    }

    dateCalculator();
})