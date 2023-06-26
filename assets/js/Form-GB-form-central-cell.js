$(function(){
    $(".md-input").on("focus", function(){
        var t = $(this);
        if(!t.parent().hasClass("focus")) {
            t.parent().addClass("focus");
        }
    });
    $(".md-input").on("blur", function(){
        var t = $(this);
        if (t.val() === "") {
            t.parent().removeClass("focus");
        }
    });
    
    
    //ESTA FUNCION SE USA ÚNICAMENTE CUANDO SEA AL BOTÓN EDITAR
    $("#btn-editar-empleado").click(function() {
        $('.md-input-group').each(function(){
            $(this).addClass('focus')
        });
        
    });
    
    //formatter phone number
    $("#numero-telefono").keyup(function(){
      if($(this).val().length == 10) {
          let formatNumber = $(this).val();
          formatNumber = formatNumber.substring(0,3)+"-"+formatNumber.substring(3,6)+"-"+formatNumber.substring(6);
           $(this).val(formatNumber);
      }
    });
})