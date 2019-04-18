window.addEventListener('scroll', function() {
			  var main = document.querySelector('.main');
			  
			  if(window.scrollY >= 100) main.classList.add('shown');
			  else main.classList.remove('shown');
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


};

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

};

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

};