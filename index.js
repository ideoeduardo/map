(function($) {
	$(document).ready(function(){
		//Mostrar cuadro de correspondencia en cada estado cuando hover.
	    $('#map .state').hover(function(){
			var estado = $(this).attr('data-state');
		    var box_estado = '#box_'+estado;
		    console.log(box_estado);
		    $('.parca .estado').css({'opacity': 0 , 'visibitity':'hidden'});
		    $(box_estado).css({'opacity': 1 , 'visibitity':'visible'});
	    });	
	    $('#map .state').click(function(e){
	    	e.preventDefault();
	    });

	    //Cambiar a selecciÃ³n responsive
		$('#seletory').change(function () {
			$('.parca .estado').css({'opacity': 0 , 'visibitity':'hidden'});
			$('#box_'+$(this).val()).css({'opacity': 1 , 'visibitity':'visible'});
		})

	});
})(jQuery);