; (function ($) {
	var app = $.sammy(function () {
		this.get('/', function () {
			$('#main').load('home.html');
		});

		this.get('#/contactenos', function () {
			$('#main').load('contactenos.html');
		});
		this.get('#/constructora', function () {
			$('#main').load('constructora.html');
		});
		this.get('#/estilos', function () {
			$('#main').load('estilos.html');
		});
		this.get('#/trabajosrealizados', function () {
			$('#main').load('trabajosrealizados.html');
		});
		this.get('#/otrosservicios', function () {
			$('#main').load('otrosservicios.html');
		});
		this.get('#/quienessomos', function () {
			$('#main').load('quienessomos.html');
		});
	});

	$(function () {
		app.run();

		$('#fotos').innerfade({
			animationtype: 'fade',
			speed: 750,
			timeout: 4000,
			type: 'random',
			containerheight: '300px'
		});
		
	});

	
})(jQuery);

