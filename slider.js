$(document).ready(function() {
	$('#slide-1').show();
	$('#nav-1').addClass('active-cd');
	
	$('.next').click(function() {
		var actual = $('.slides li:visible');
		var siguiente = actual.next();
		var circuloActual = $('.active-cd');
		var siguienteCirculo = circuloActual.next();

		if (siguiente.length == 0) {
			siguiente = $('#slide-1');
		}

		if (siguienteCirculo.length == 0) {
			siguienteCirculo = $('#nav-1');
		}

		actual.hide();
		circuloActual.removeClass('active-cd');
		siguiente.show();
		siguienteCirculo.addClass('active-cd');
	});
	$('.prev').click(function() {
		var actual = $('.slides li:visible');
		var anterior = actual.prev();

		if (anterior.length == 0) {
			anterior = $('#slide-4');
		}

		actual.hide();
		anterior.show();
	});

	$('.nav li').click(function() {
		$('.active-cd').removeClass('active-cd');
		$('.slides li:visible').hide();
		$(this).addClass('active-cd');
		var indice = $(this).data('cd');
		$('.slides li[data-n='+indice+']').show();
	});
});








