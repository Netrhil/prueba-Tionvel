var giCount = 4;

$(document).ready(function() {

   $( "#boton_formulario" ).click( function(evento) {
     evento.preventDefault();
     Validar();
   });

});

function Validar(){

  var fechasValidas = true;
  var diasValidos = true;

  $("tr[id^=tr]").each( function () {
    console.log($(this));
    var id_error_fecha = $(this).attr("id")+"-error-fecha";

    if ($(this).find("input[id^=fecha-]").val() == "") {
        fechasValidas = false;
        $("#"+ id_error_fecha).remove();
        $($(this).find("td[id^=td-fecha-]")).removeClass('has-success');
				$($(this).find("td[id^=td-fecha-]")).addClass("has-error");
				$(this).find("td[id^=td-fecha-]").append( "<span id="+ id_error_fecha + ">El campo fecha es obligatorio.</span>" );
				$(this).focus();
      }
    else {
      $($(this).find("td[id^=td-fecha-]")).removeClass('has-error');
      $($(this).find("td[id^=td-fecha-]")).addClass('has-success');
      $("#"+ id_error_fecha).remove();
    }
  });

  $("tr[id^=tr]").each( function () {
      var id_error_dias = $(this).attr("id")+"-error-dias";

      if ($(this).find("input[id^=dias-]").val() <= 0) {
          diasValidos = false;
          $("#"+ id_error_dias).remove();
          $($(this).find("td[id^=td-dias-]")).removeClass('has-success');
  				$($(this).find("td[id^=td-dias-]")).addClass("has-error");
  				$(this).find("td[id^=td-dias-]").append( "<span id="+ id_error_dias + ">El campo días esta vacío o es inválido.</span>" );
  				$(this).focus();
        }
      else {
        $($(this).find("td[id^=td-dias-]")).removeClass('has-error');
        $($(this).find("td[id^=td-dias-]")).addClass('has-success');
        $("#"+ id_error_dias).remove();
      }
    });

  if (fechasValidas && diasValidos) {
    enviarRequest();
  }

}

function enviarRequest() {
  jsonObj = [];

  $("tr[id^=tr]").each(function () {
    item = {}
    item ["fecha"] = $(this).find("input[id^=fecha-]").val();
    item ["dias"] = $(this).find("input[id^=dias-]").val();

    jsonObj.push(item);

  });

  

}



function agregarLinea() {
    tabla = $('#tabla tr:last').attr('id').match(/[0-9]+/g);
    var rowCount = $('#tabla tr').length;
    giCount++;
    añadirFila($('#tabla'));
}

function eliminarLinea(l) {
    count = parseInt($('#tabla > tbody > tr').length);
    if(count!=4){
        var tr = $('#tr' + l);
        tr.fadeOut(400, function(){
            tr.remove();

        });
        return false;
    }
}

function añadirFila(Tabla){

    Tabla.each(function(){
        var $table = $(this);
        var tds = '<tr id="tr'+ giCount +'">';
        tds += '<td id="td-fecha-'+ giCount +'"><input class="form-control" id="fecha-'+ giCount +'" name="fecha[]" type="date"></td>';
        tds += '<td id="td-dias-'+ giCount +'"><input class="form-control" id="dias-'+ giCount +'" name="dias[]" type="number"></td>';
        tds += '<td><input class="form-control" name="resultado-'+ giCount +'" type="date" disabled></td>';
        tds += '</tr>';

        if($('tbody', this).length > 0){
            $('tbody', this).append(tds);
        }else {
            $(this).append(tds);
        }

    });
}
