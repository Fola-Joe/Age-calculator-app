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


form.addEventListener('submit', function dateValidation(e) {
    e.preventDefault();
    const dayError = document.querySelector('.day-span');
    const monthError = document.querySelector('.month-span');
    const yearError = document.querySelector('.year-span');

    // let validation = true;
    //conditions for empty input fields and wrong days, months and years
    let dayNum = dayInput.value;
    if (!dayInput.value){
        inputs[0].classList.add('error');
        dayError.innerText = 'This field is required';
        label[0].style.color = 'hsl(0, 100%, 67%)';
        // validation = false;
    } else if (dayNum > 31){
        inputs[0].classList.add('error');
        dayError.innerText = 'Must be a valid day';
        label[0].style.color = 'hsl(0, 100%, 67%)';
        // validation = false;
    } else {
        inputs[0].classList.remove('error');
        dayError.innerText = '';
        label[0].style.color = '';
        // validation = true;
    }

    let monthNum = monthInput.value;
    if (!monthInput.value){
        inputs[1].classList.add('error');
        monthError.innerText = 'This field is required';
        label[1].style.color = 'hsl(0, 100%, 67%)';
        // validation = false;
    } else if (monthNum > 12){
        inputs[1].classList.add('error');
        monthError.innerText = 'Must be a valid month';
        label[1].style.color = 'hsl(0, 100%, 67%)';
        // validation = false;
    } else {
        inputs[1].classList.remove('error');
        monthError.innerText = '';
        label[1].style.color = '';
        // validation = true;
    }

    const currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let yearNum = yearInput.value;
    if (!yearInput.value){
        inputs[2].classList.add('error');
        yearError.innerText = 'This field is required';
        label[2].style.color = 'hsl(0, 100%, 67%)';
        // validation = false;
    } else if (yearNum >= currentYear){
        inputs[2].classList.add('error');
        yearError.innerText = 'Must be in the past';
        label[2].style.color = 'hsl(0, 100%, 67%)';
        // validation = false;
    } else {
        inputs[2].classList.remove('error');
        yearError.innerText = '';
        label[2].style.color = '';
        // validation = true;
    }
    // return validation;

// const date = new Date();
// const day = currentDate.getDate();
// const month = currentDate.getMonth() + 1;
// const year = currentDate.getFullYear();

// const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    function submission() {
        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();

        const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
   
        if (dateValidation()) {
            if (dayInput.value > day){
                day = day + months[month - 1];
            } else if (monthInput.value > month) {
                month = month + 12;
                year = year - 1;

                dayOutput.innerText = dayOtp;
                monthOutput.innerText = monthOtp;
                yearOutput.innerText = yearOtp;
            }
        }
    

    const dayOtp = day - dayInput.value;
    const monthOtp = month - monthInput.value;
    const yearOtp = year - yearInput.value;

    // dayOutput.innerText = dayOtp;
    // monthOutput.innerText = monthOtp;
    // yearOutput.innerText = yearOtp;
}
submission();
})

// const date = new Date();
// const day = date.getDate();
// const month = date.getMonth() + 1;
// const year = date.getFullYear();

// const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// function submission(e) {
//     e.preventDefault();
//     if (dateValidation()) {
//         if (dayInput.value > day){
//             day = day + months[month - 1];
//         }
//         if (monthInput.value > month) {
//             month = month + 12;
//             year = year - 1;
//         }
//     }
    

//     const dayOtp = day - dayInput.value;
//     const monthOtp = month - monthInput.value;
//     const yearOtp = year - yearInput.value;

//     dayOutput.innerHTML = dayOtp;
//     monthOutput.innerHTML = monthOtp;
//     yearOutput.innerHTML = yearOtp;
// }


// form.addEventListener('submit', function (){
//     dateValidation();
//     submission();
// });
