// Responsive Nav
$(function() {
	menu = $('nav ul');

  $('#openup').on('click', function(e) {
    e.preventDefault(); menu.slideToggle();
  });
  
  $(window).resize(function(){
    var w = $(this).width(); if(w > 480 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });
  
  $('nav li').on('click', function(e) {                
    var w = $(window).width(); if(w < 480 ) {
      menu.slideToggle(); 
    }
  });
  $('.open-menu').height($(window).height());
});

$('.cf a').on('click' , function(event) {
	if(this.hash !== '') {
		event.preventDefault();
		const hash = this.hash;
	
	
	$('html , body').animate(
	{
		scrollTop: $(hash).offset().top
	},
	800,
	function() {
		window.location.hash = hash;
	}
	);
	}
});

//Form 
//Variables

const submitBtn = document.querySelector('#submitBtn'),
	  email = document.querySelector('#email'),
	  firstName  = document.querySelector('#first-name'),
	  LastName  = document.querySelector('#last-name'),
	  message= document.querySelector('#message'),
	  resetBtn = document.querySelector('#resetBtn'),
	  sendEmailForm = document.querySelector('#form'),
      country  =  document.querySelector('#country'),
	  mobile = document.querySelector('#mobile');


//Event Listners

eventListners();

function eventListners() {
	//App Init
	
	document.addEventListener('DOMContentLoaded' , appInit);
	
	//Validate the forms
	//Add event Listneres to every field which is neccessary
	email.addEventListener('blur' , validateField);
	firstName.addEventListener('blur' , validateField);
	LastName.addEventListener('blur' , validateField);
	mobile.addEventListener('blur' , validateField);
	country.addEventListener('blur' , validateField);
	message.addEventListener('blur' , validateField);
	
	
	//send email and reset button
	submitBtn.addEventListener('submit', submitForm);
	resetBtn.addEventListener('click', resetForm);
}


//Functions

function appInit() {
	
	//disable the send button
	
	submitBtn.disabled= true;
}

function validateField() {
	
	let errors;
	
	//validate the length of the field
	
	validateLength(this); 
	
	//validate the email
	if(this.type == 'email'){
		validateEmail(this);
	}
	
	//Both will return errors, then check if there are  any erros
	errors = document.querySelectorAll('.error');
	
	//check that the inputs are not empty
	if(email.value !== '' && mobile.value !== '' && message.value !== '' &&firstName.value !== '' &&LastName.value !== '' &&country.value !== '') {
		 if(errors.length=== 0){
			 submitBtn.disabled=false;
		 }
	}
}

function validateLength(field) {
	if(field.value.length > 0){
field.style.borderBottomColor = 'blue';
		field.classList.remove('error');
	}else {
		field.style.borderBottomColor = 'green';
		field.classList.add('error');
	}
}

function validateEmail(field) {
	let emaailText = field.value;
	
	if(emaailText.indexOf('r') == 0) {
		field.style.borderBottomColor = 'blue';
		field.classList.remove('error');
	}else {
		field.style.borderBottomColor = 'red';
		field.classList.add('error');
	}
	};

function resetForm() {
	
	sendEmailForm.reset();
}

function submitForm(e) {
	e.preventDefault();
}