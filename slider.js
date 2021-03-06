$(document).ready(function() {
	$('#slide-1').show();
	$('#nav-1').addClass('active-cd');
	

	function siguienteSlide() {
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

		actual.fadeOut(500);
		circuloActual.removeClass('active-cd');
		siguiente.fadeIn(500);
		siguienteCirculo.addClass('active-cd');
	}
	
	var intervalo = setInterval(siguienteSlide, 1000);

	$('.slideshow').mouseenter(function() {
		clearInterval(intervalo);
	});

	$('.slideshow').mouseleave(function() {
		intervalo = setInterval(siguienteSlide, 1000);
	});

	$('.next').click(siguienteSlide);
	$('.prev').click(function() {
		var actual = $('.slides li:visible');
		var anterior = actual.prev();
		var circuloActual = $('.active-cd');
		var circuloAnterior = circuloActual.prev();

		if (anterior.length == 0) {
			anterior = $('#slide-4');
		}
		if (circuloAnterior.length == 0) {
			circuloAnterior = $('#nav-4');
		}

		actual.hide();
		anterior.show();
		circuloActual.removeClass('active-cd');
		circuloAnterior.addClass('active-cd');
	});

	$('.nav li').click(function() {
		$('.active-cd').removeClass('active-cd');
		$('.slides li:visible').hide();
		$(this).addClass('active-cd');
		var indice = $(this).data('cd');
		$('.slides li[data-n='+indice+']').show();
	});
});








