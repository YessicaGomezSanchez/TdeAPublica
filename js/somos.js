$(document).ready(function () {

    $('#misions').click(function () {
        $('#cargar').load('./archivos/mision.html');
    });
    $('#visions').click(function () {
        $('#cargar').load('./archivos/vision.html');
    });
    $('#valoress').click(function () {
        $('#cargar').load('./archivos/valores.html');
    });

});