
var statSend = false;
function validar(){
	var nombres, correo, direccion, inquietud;

	nombres = document.getElementById('nombre').value;

	correo = document.getElementById('correo').value;
	// numero = document.getElementById('telefonoContactenos').value;
	direccion = document.getElementById('direccion').value;
	inquietud = document.getElementById('mensaje').value;

	var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;

   if (nombres === "") {
		alert("Debe ingresar su  nombre completo");
		document.getElementById('nombre').focus();
		document.getElementById('nombre').value = "";
		return false;
	} else if (direccion === "") {
		alert("Debe ingresar su dirección");
		document.getElementById('direccion').focus();
		document.getElementById('direccion').value = "";
		return false;
	}else if (correo === "") {
		alert("Debe ingresar su correo electrónico");
		document.getElementById('correo').focus();
		document.getElementById('correo').value = "";
		return false;
	} else if (!(regex.test(correo))) {
		alert('La direccón de correo no es válida');
		 document.getElementById('correo').focus();
		 return false;
	 }else if (inquietud === "") {
		alert("Debe ingresar su inquietud");
		document.getElementById('mensaje').focus();
		document.getElementById('mensaje').value = "";
		return false;
	
	}  else if (inquietud.length > 300) {
		alert("El tamaño maximo es de 300 caracteres");
		document.getElementById('mensaje').focus();
		return false;	
	}
	if (!statSend) {
		statSend = true;
		return true;
	}else{
		alert("El formulario ya se esta enviado...");
		$("form input[type=text] , form textarea,form input[type=password]").each(function() { this.value = '' });
		return false;
	}
	
}
