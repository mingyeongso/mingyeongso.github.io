
/* scroll */
window.addEventListener('scroll', function() {
  var el = document.querySelector('.nav');
  var cover = document.querySelector('.project-cover');
  
  if(window.scrollY >= 400) el.classList.add('shown');
  if(window.scrollY >= 400) cover.classList.add('hide');
  else el.classList.remove('shown');
  else cover.classList.remove('hide');
});

window.addEventListener('scroll', function() {
  var el = document.querySelector('.main');
  
  if(window.scrollY >= 100) el.classList.add('shown');
  else el.classList.remove('shown');
});

// window.addEventListener('scroll', function() {
//   var el = document.querySelector('.project-cover');
  
//   if(window.scrollY >= 200) el.classList.add('hide');
//   else el.classList.remove('hide');
// });


window.addEventListener('scroll', function() {
  var el = document.querySelector('.needs-text');
  
  if(window.scrollY >= 500) el.classList.add('text-shown');
  else el.classList.remove('text-shown');
});






/* chip */


function button2_click() {
	var chip01 = document.querySelector('.chip01');
	var chip02 = document.querySelector('.chip02');
	var chip03 = document.querySelector('.chip03');
	var row01 = document.querySelector('.row01');
	var row02 = document.querySelector('.row02');

	chip01.classList.remove('active');
	chip01.classList.add('disabled');
	chip02.classList.add('active');
	chip02.classList.remove('disabled');
	chip03.classList.remove('active');
	chip03.classList.add('disabled');
	row02.classList.add('hide');
	row01.classList.remove('hide');


}

function button3_click() {
	var chip01 = document.querySelector('.chip01');
	var chip02 = document.querySelector('.chip02');
	var chip03 = document.querySelector('.chip03');
	var row01 = document.querySelector('.row01');
	var row02 = document.querySelector('.row02');

	chip01.classList.remove('active');
	chip01.classList.add('disabled');
	chip02.classList.remove('active');
	chip02.classList.add('disabled');
	chip03.classList.add('active');
	chip03.classList.remove('disabled');
	row01.classList.add('hide');
	row02.classList.remove('hide');

}

function button1_click() {
	var chip01 = document.querySelector('.chip01');
	var chip02 = document.querySelector('.chip02');
	var chip03 = document.querySelector('.chip03');
	var row01 = document.querySelector('.row01');
	var row02 = document.querySelector('.row02');

	chip01.classList.remove('disabled');
	chip01.classList.add('active');
	chip02.classList.remove('active');
	chip02.classList.add('disabled');
	chip03.classList.remove('active');
	chip03.classList.add('disabled');
	row01.classList.remove('hide');
	row02.classList.remove('hide');

}