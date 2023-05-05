const inputs = document.querySelectorAll('input');
const submitBtn = document.querySelector('button');
const submitIcon = document.querySelector('.icon');

const form = document.querySelector('form');

const dayInput = document.querySelector('#day');
const monthInput = document.querySelector('#month');
const yearInput = document.querySelector('#year');


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

//Submission of input
submitBtn.addEventListener('click', function(e){
    e.preventDefault();

    const dayError = document.querySelector('.day-span');
    const monthError = document.querySelector('.month-span');
    const yearError = document.querySelector('.year-span');

    let dayNum = dayInput.value;
    let monthNum = monthInput.value;
    let yearNum = yearInput.value;

    //conditions for empty input fields and wrong days, months and years
    if (!dayInput.value){
        inputs[0].classList.add('error');
        dayError.innerText = 'This field is required';
    } else if (dayNum > 31){
        inputs[0].classList.add('error');
        dayError.innerText = 'Must be a valid day';
    } else {
        inputs[0].classList.remove('error');
        dayError.innerText = '';
    }

    if (!monthInput.value){
        inputs[1].classList.add('error');
        monthError.innerText = 'This field is required';
    } else if (monthNum > 12){
        inputs[1].classList.add('error');
        monthError.innerText = 'Must be a valid month';
    } else {
        inputs[1].classList.remove('error');
        monthError.innerText = '';
    }

    if (!yearInput.value){
        inputs[2].classList.add('error');
        yearError.innerText = 'This field is required';
    } else if (yearNum > 2022){
        inputs[2].classList.add('error');
        yearError.innerText = 'Must be in the past';
    } else {
        inputs[2].classList.remove('error');
        yearError.innerText = '';
    }
})