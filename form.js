function validateEmail(sEmail) {
		var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		if (filter.test(sEmail))
				return true;
		else
				return false;
}

function validaNombre() {
	var nombre = $('input[name="personal"]').val();
	if (nombre.length < 4 || nombre.length > 15) { //Incorrecto
		$('input[name="personal"]').prev().show();
	} else $('input[name="personal"]').prev().hide();
}

function validaUsername() {
	var username = $('input[name="username"]').val();
	if (username.trim().includes(' ') || username.length == 0) {
		$('input[name="username"]').prev().show();
	} else $('input[name="username"]').prev().hide();
}

function validaEmail() {
	var email = $('input[name="email"]').val();
	if (validateEmail(email)) {
		$('input[name="email"]').prev().hide();
	} else $('input[name="email"]').prev().show();
}

$('input[name="personal"]').focusout(function() {
	validaNombre();
});

$('input[name="username"]').focusout(function() {
	validaUsername();
});

$('input[name="email"]').focusout(function() {
	validaEmail();
});

$('form').submit(function(ev) {
	validaNombre();
	validaUsername();
	validaEmail();
	if($('.error:visible').length > 0) {
		ev.preventDefault();
	}
});

