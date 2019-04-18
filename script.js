
/* scroll */
window.addEventListener('scroll', function() {
  var el = document.querySelector('.nav');
  
  if(window.scrollY >= 400) el.classList.add('shown');
  else el.classList.remove('shown');
});

window.addEventListener('scroll', function() {
  var el = document.querySelector('.main');
  
  if(window.scrollY >= 100) el.classList.add('shown');
  else el.classList.remove('shown');
});


window.addEventListener('scroll', function() {
  var el = document.querySelector('.project-cover');
  
  if(window.scrollY >= 50) el.classList.add('hide');
  else el.classList.remove('hide');
});

window.addEventListener('scroll', function() {
  var el = document.querySelector('.project-cover');
  
  if(window.scrollY >= 50) el.classList.add('show');
  else el.classList.remove('show');
});