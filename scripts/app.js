; (function ($) {
	var app = $.sammy(function () {
		this.get('/', function () {
			$('#content').load('home.html');
		});

		this.get('#/contactenos', function () {
			$('#content').load('contactenos.html');
		});
		this.get('#/habitaciones', function () {
			$('#content').load('habitaciones.html');
		});
		this.get('#/servicios', function () {
			$('#content').load('servicios.html');
		});
		this.get('#/ubicacion', function () {
			$('#content').load('ubicacion.html');
		});
		this.get('#/galeria', function () {
			$('#content').load('galeria.html');
		});
	});

	$(function () {
		app.run();
	});

	
})(jQuery);

