/*const decrease = document.getElementById('decrease');
const reset = document.getElementById('number');
const increase = document.getElementById('increase');

let counter = 0;

decrease.addEventListener('click', function(){
  counter -=1;
  number.innerHtml = counter;
});

reset.addEventListener('click', function(){
  counter = 0;
  number.innerHtml = counter;
});

increase.addEventListener('click', function(){
  counter +=1;
  number.innerHtml = counter;
});*/


/*const reset = document.getElementById('number');
const increaser = document.getElementById('increase');
const decreaser = document.getElementById('decrease');


increaser.addEventListener('click', function() {
  reset.stepUp();
}, false);

decreaser.addEventListener('click', function() {
  reset.stepDown();
  reset.innerHTML.fontcolor = red;
}, false);*/

let incBtn = document.querySelector('#increase');
let decBtn = document.querySelector('#decrease');
let inputEl = document.querySelector('#number');

let counter = 0;

incBtn.addEventListener('click', (e) => {
    e.preventDefault()
    counter += 1;
    inputEl.value = counter;
})


decBtn.addEventListener('click', (e) => {
    e.preventDefault()
    counter -= 1;
    inputEl.value = counter;
    if (counter < 0) {
      inputEl.innerHTML.fontcolor = 'red';
    }
})
