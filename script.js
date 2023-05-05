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
    // if (!dayInput){
    //     dayInput.classList.add('error');
    // }
})