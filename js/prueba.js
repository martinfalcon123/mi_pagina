$(document).ready(function(){
	//mouseOver mouseOuta 
	var caja = $("#caja");
	
	function cambiaRojo(){
		$(this).css("background","red");
	}
	function cambiaVerder(){
		$(this).css("background","green");
	}
	 function cambiarTamaño(){
		 $(this).css("padding","400px");
	 }

	caja.hover(cambiaRojo, cambiaVerder);
	caja.hover(cambiarTamaño);
	

	//click

	caja.click(function(){
		$(this).css("background","blue")
			   .css("color", "white");
	});
		caja.dblclick(function(){
		$(this).css("background","pink")
			   .css("color", "yellow");
	});


		//focus blur

		var nombre = $("#nombre")
		var datos = $("datos")
		nombre.focus(function(){
			$(this).css("border","2px solid green");
		});
		nombre.blur(function(){
			$(this).css("border","1px solid #ccc");

			
			datos.text($(this).val()).show();
		});

		//mausedown y mauseup

		datos.mousedown(function(){
			$(this).css("border-color","gray");
		});

		datos.mouseup(function(){
			$(this).css("border-color","black");
		});


		caja.click(function(){
			$(this).css ("padding","500px");

		});

	
});