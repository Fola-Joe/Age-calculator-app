const inputs = document.querySelectorAll('input');
const submitBtn = document.querySelector('button');

const label = document.querySelectorAll('label');

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

    let date = new Date();
    let currentYear = date.getFullYear();
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

    // let birthday = `${dayNum}/${monthNum}/${yearNum}`;
    // // function ageCalculator(birthday){
    //     let birthDate = new Date(birthday);
    //     let today = new Date();
    
    //     let yearAge = today.getFullYear() - birthDate.getFullYear();
    //     let monthAge = today.getMonth() - birthDate.getMonth();
    //     let dayAge = today.getDate() - birthDate.getDate();
    
    //     if (monthAge < 0 || (monthAge === 0 && dayAge < 0)){
    //         yearAge-=1;
    //         if (monthAge === 0) {
    //             monthAge = 11;
    //         } else {
    //             monthAge = 12 + monthAge;
    //         }
    //         days = 30 + days;
    //     }
    //     let yearOutput = document.querySelector('.h1');
    //     let monthOutput = document.querySelector('.h2');
    //     let dayOutput = document.querySelector('.h3');
    
    //     yearOutput.innerHTML = `${yearAge}`;
    //     monthOutput.innerHTML = monthAge;
    //     dayOutput.innerHTML = dayAge;
    // }
    // ageCalculator(birthday);
})
