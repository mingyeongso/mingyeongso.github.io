
/* scroll */
window.addEventListener('scroll', function() {
  var el = document.querySelector('.nav');

  if(window.scrollY >= 400) el.classList.add('shown');
  else el.classList.remove('shown');
});

window.addEventListener('scroll', function() {
  var cover = document.querySelector('.project-cover');

  if(window.scrollY >= 200) cover.classList.add('hide');
  else cover.classList.remove('hide');
});




window.addEventListener('scroll', function() {
  var el = document.querySelector('.needs-text');
  
  if(window.scrollY >= 500) el.classList.add('text-shown');
  else el.classList.remove('text-shown');
});






