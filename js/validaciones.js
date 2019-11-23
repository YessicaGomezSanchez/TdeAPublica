
var statSend = false;
function validar(){
	var nombres, apellidos, correo, numero, direccion, inquietud;

	nombres = document.getElementById('nombreContactenos').value;
	apellidos = document.getElementById('apellidosContactenos').value;
	correo = document.getElementById('emailContactenos').value;
	numero = document.getElementById('telefonoContactenos').value;
	direccion = document.getElementById('direccionContactenos').value;
	inquietud = document.getElementById('descripcionContactenos').value;
	
	if (nombres === "") {
		alert("Debe ingresar su(s) nombre(s)");
		document.getElementById('nombreContactenos').focus();
		document.getElementById('nombreContactenos').value = "";
		return false;
	} else if (apellidos === "") {
		alert("Debe ingresar su(s) apellido(s)");
		document.getElementById('apellidosContactenos').focus();
		document.getElementById('apellidosContactenos').value = "";
		return false;
	} else if (correo === "") {
		alert("Debe ingresar su correo electronico");
		document.getElementById('emailContactenos').focus();
		document.getElementById('emailContactenos').value = "";
		return false;
	} else if (numero === "") {
		alert("Debe ingresar su numero telefonico");
		document.getElementById('telefonoContactenos').focus();
		document.getElementById('telefonoContactenos').value = "";
		return false;
	} else if (direccion === "") {
		alert("Debe ingresar su direccion");
		document.getElementById('direccionContactenos').focus();
		document.getElementById('direccionContactenos').value = "";
		return false;
	} else if (inquietud === "") {
		alert("Debe ingresar su inquietud");
		document.getElementById('descripcionContactenos').focus();
		document.getElementById('descripcionContactenos').value = "";
		return false;
	} else if (numero.length > 10) {
		alert("El tamaño maximo es de 10 caracteres");
		document.getElementById('telefonoContactenos').focus();
		return false;
	}  else if (inquietud.length > 300) {
		alert("El tamaño maximo es de 300 caracteres");
		document.getElementById('descripcionContactenos').focus();
		return false;
	} else if (isNaN(numero)) {
		alert("Solo caracteres numericos");
		document.getElementById('telefonoContactenos').focus();
		document.getElementById('telefonoContactenos').value = "";
		return false;
	}
	if (!statSend) {
		statSend = true;
		return true;
	}else{
		alert("El formulario ya se esta enviado...");
		return false;
	}
}