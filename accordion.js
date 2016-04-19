
/**
 * Al hacer click en el botón, desplegar su listado. Al volver a hacer click, cerrar el listado.
 * Además, esconder otros listados a parte del que se despliega.
 *
 * 1.- Encontrar el boton
 * 2.- Vincular evento click
 * 	2.1- Mostrar el .inner (.slideDown())
 * 	2.2- Ocultarlo si se está mostrando (.slideToggle()) 
 */ 
$('.toggle').click(function(e) {
	if ($(this).siblings().is(':visible')) {
		$(this).siblings().slideUp();
		$(this).siblings().find('.inner:visible').slideUp();
	} else {
		$(this).parent().parent().find('.inner:visible').slideUp();
		$(this).siblings().slideToggle();
	}
});
