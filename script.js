const inputs = document.querySelectorAll('input');
const submitIcon = document.querySelector('.icon');

const form = document.querySelector('form');

const dayInput = document.querySelector('#day');
const monthInput = document.querySelector('#month');
const yearInput = document.querySelector('#year');

// dayInput.addEventListener('input', (e) => {
//     const input = e.target.value;
//     const numbersOnly = input.replace(/[^0-9]/g, '');
//     e.target.value = numbersOnly;
// })
const submitForm = () => {
    form.submit();
}

submitIcon.addEventListener('click', function(){
    if (!dayInput.value){
        inputs[0].classList.add('error');
    }
    submitForm();
})