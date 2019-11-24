$(document).ready(function() {
    "use strict";

     /*caragar pagina inicio*/
    $(function() {
        $('#cargar').load('./archivos/home.html');
    });

    /*funciones menu*/
    $('#inicio').click(function() {
        $('#cargar').load('./archivos/home.html');        
    });
    $('#quienesSomos').click(function() {
        $('#cargar').load('./archivos/quienesSomos.html');
    });
    
    $('#publica').click(function() {
        $('#cargar').load('./archivos/publica.html');
    });
    $('#servicios').click(function() {
        $('#cargar').load('./archivos/servicios.html');
    });
    $('#contactenos').click(function() {
        $('#cargar').load('./archivos/contactenos.html');        
    });   
    $('#mision').click(function() {
        $('#cargar').load('./archivos/mision.html');        
    }); 
    $('#vision').click(function() {
        $('#cargar').load('./archivos/vision.html');        
    }); 
    $('#valores').click(function() {
        $('#cargar').load('./archivos/valores.html');        
    }); 
    $('#otros').click(function() {
        $('#cargar').load('./archivos/otros.html');        
    }); 
    $('#arriendos').click(function() {
        $('#cargar').load('./archivos/arriendos.html');        
    }); 
    $('#transporte').click(function() {
        $('#cargar').load('./archivos/transporte.html');        
    }); 
    
    $('#documentos').click(function() {
        $('#cargar').load('./archivos/documentos.html');        
    }); 

    // $(".submenu").click(function(){  
    //     $(this).children("ul").slideToggle('slow');
    //   });

    //   $(".submenu").click(function(){
    //     $(this).children("ul").slideUp();
    //   });
        $("#submenu").click(function(){  
        $(this).children("ul").show('slow');
      });

      $("ul").click(function(stopSlide){
        stopSlide.stopPropagation();
      });

});

