$('.toggle').click(function () {
	
    $('.formulario').animate({        
        height: "toggle",
        'paddin-top': 'toggle',
        'padding-bottom': 'toggle',
		opacity: 'toggle'		
	},"slow");

	// var textoSpan = $('span.text').text();
	// if(textoSpan=="Crear cuenta"){
	// 	console.log("valor...............",textoSpan);
	// 	$('.texto').text( $(this).val('Iniciar sesión') );
	// }else if(textoSpan=="Iniciar sesión"){
	// 	$('.texto').text( $(this).val('Crear cuenta') );
	// };
	
});


var statSend = false;
function validarLogin(){
	var usuario, contrasena;

	usuario = document.getElementById('usuario').value;
	contrasena = document.getElementById('contrasena').value;

    if (usuario === "") {
		alert("Debe ingresar su usuario de usuario");
		document.getElementById('usuario').focus();
		document.getElementById('usuario').value = "";
		return false;
	} else if (contrasena === "") {
		alert("Debe ingresar su contraseña");
		document.getElementById('contrasena').focus();
		document.getElementById('contrasena').value = "";
		return false;
	} else if (contrasena.length < 7) {
		alert("Verifique los datos, son incorrectos");
		document.getElementById('contrasena').focus();
		return false;
	}
	if (!statSend) {
		statSend = true;
		return true;
	}else{
		alert("Su login fué exitoso");
		$("form input[type=text] ,form input[type=password]").each(function() { this.value = '' });
		return false;
	}
	
}

var statSendCrear = false;
function validarCrear(){
	var usuario, contrasena,telefono,correo;

	usuario = document.getElementById('usuarioC').value;
    contrasena = document.getElementById('contrasenaC').value;
    telefono = document.getElementById('telefono').value;
    correo = document.getElementById('correo').value;

    var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;

    if (!(regex.test(correo))) {
       alert('La direccón de correo no es válida');
		document.getElementById('correo').focus();
		return false;
    }else if (telefono === "") {
		alert("Debe ingresar su número telefonico");
		document.getElementById('telefono').focus();
		document.getElementById('telefono').value = "";
		return false;
	} else if (telefono.length > 11) {
		alert("El tamaño maximo del telefóno es de 11 caracteres");
		document.getElementById('telefono').focus();
        return false;
    }else if (isNaN(telefono)) {
		alert("Solo caracteres numericos");
		document.getElementById('telefono').focus();
		document.getElementById('telefono').value = "";
		return false;
	}else if (usuario === "") {
		alert("Debe ingresar su  nombre de usuario");
		document.getElementById('usuarioC').focus();
		document.getElementById('usuarioC').value = "";
		return false;
	} else if (contrasena === "") {
		alert("Debe ingresar su contraseña");
		document.getElementById('contrasenaC').focus();
		document.getElementById('contrasenaC').value = "";
		return false;
	} else if (contrasena.length < 7) {
		alert("La contraseña no cumple con el tamaño minimo de 7 caracteres");
		document.getElementById('contrasenaC').focus();
		return false;
	} 
	if (!statSendCrear) {
		statSendCrear = true;
		return true;
	}else{
		alert("Su registro fué exitoso");
		$("form input[type=text], form input[type=password]").each(function() { this.value = '' });
		return false;
	}
	
}