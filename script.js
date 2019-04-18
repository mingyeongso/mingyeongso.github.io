
/* javascript */
window.addEventListener('scroll', function() {
  var el = document.querySelector('.nav');
  
  if(window.scrollY >= 680) el.classList.add('shown');
  else el.classList.remove('shown');
});

window.addEventListener('scroll', function() {
  var el = document.querySelector('.main');
  
  if(window.scrollY >= 100) el.classList.add('shown');
  else el.classList.remove('shown');
});