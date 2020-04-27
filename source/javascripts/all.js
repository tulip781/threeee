//= require jquery
//= require bootstrap-sprockets
//= require_tree .


var grid = document.querySelector('.grid')



function debounce(func, wait = 100) {
 let timeout;
 return function(...args) {
   clearTimeout(timeout);
   timeout = setTimeout(() => {
     func.apply(this, args);
   }, wait);
 };
}

function moveShadow(e) {
 let x = ((e.pageX / window.innerWidth) * 30) - 15;
 let y = ((e.pageY / window.innerHeight) * 30) - 15;
 grid.style.transform = `translate(${x}px, ${y}px)`
}


// Start
var debounced = debounce(moveShadow, 10);
// window.addEventListener('resize', debounced);


window.addEventListener('mousemove', debounced);
