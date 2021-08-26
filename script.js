let pasword = 123;
let input = document.querySelector('.inp');
const btn = document.querySelector('.btn');
let nm = document.querySelector('.nm');
let p = document.querySelector('.p-place');
const form = document.querySelector('form');
let namePlace = document.querySelector('.name-place');
const exit = document.querySelector('.exit');

p.style.display = 'none';
exit.style.display = 'none';

btn.addEventListener('click', () => {
    let username = nm.value;
    if (input.value != pasword) {
        alert('Wrong!');
    } else if (input.value == pasword) {
        form.style.display = 'none';
        p.style.display = 'block';
        namePlace.innerHTML = username;
        exit.style.display = 'block';
    }
});

exit.addEventListener('click', () => {
    form.style.display = 'block';
    input.value = '';
    nm.value = '';
    p.style.display = 'none';
    p.style.display = 'none';
    namePlace.innerHTML = '';
    exit.style.display = 'none';
});
