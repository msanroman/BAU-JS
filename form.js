function validateEmail(sEmail) {
		var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		if (filter.test(sEmail))
				return true;
		else
				return false;
}

$('form').submit(function(ev) {
		ev.preventDefault();
		var nombre = $('input[name="personal"]').val();
		if (nombre.length < 4 || nombre.length > 15) { //Incorrecto
			$('input[name="personal"]').prev().show();
		}
});

