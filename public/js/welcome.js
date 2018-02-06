var giCount = 4;

$(document).ready(function() {


   $("form").submit(function(evento){
     evento.preventDefault();
     Validar();
   });

});

  function Validar(){

    var fechasValidas = true;
    var diasValidos = true;

  $.each( $("tr[id^=tr]"), function () {
      var id_error_c = $(this).attr("id")+"-error-fecha";

      if ($(this).find("input[id^=fecha-]").val() == "") {
          fechasValidas = false;
          $("#"+ id_error_c).remove();
          $($(this).find("td[id^=td-fecha-]")).removeClass('has-success');
  				$($(this).find("td[id^=td-fecha-]")).addClass("has-error");
  				$(this).find("td[id^=td-fecha-]").append( "<span id="+ id_error_c + ">El campo fecha es obligatorio.</span>" );
  				$(this).focus();
        }
      else {
        $($(this).find("td[id^=td-fecha-]")).removeClass('has-error');
        $($(this).find("td[id^=td-fecha-]")).addClass('has-success');
        $("#"+ id_error_c).remove();
      }
    });

    $.each( $("tr[id^=tr]"), function () {
        var id_error_d = $(this).attr("id")+"-error-dias";

        if ($(this).find("input[id^=dias-]").val() == "") {
            diasValidos = false;
            $("#"+ id_error_d).remove();
            $($(this).find("td[id^=td-dias-]")).removeClass('has-success');
    				$($(this).find("td[id^=td-dias-]")).addClass("has-error");
    				$(this).find("td[id^=td-dias-]").append( "<span id="+ id_error_d + ">El campo días es obligatorio.</span>" );
    				$(this).focus();
          }
        else {
          $($(this).find("td[id^=td-dias-]")).removeClass('has-error');
          $($(this).find("td[id^=td-dias-]")).addClass('has-success');
          $("#"+ id_error_d).remove();
        }
      });
  console.log(fechasValidas);
  console.log(diasValidos);

  }



  function agregarLinea() {
      tabla = $('#tabla tr:last').attr('id').match(/[0-9]+/g);
      var rowCount = $('#tabla tr').length;
      giCount++;
      addTableRow($('#tabla'));
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

  function addTableRow(Tabla){
      numero = $('#tabla tr:last').attr('id').match(/[0-9]+/g);

      Tabla.each(function(){
          var $table = $(this);
          var tds = '<tr id="tr'+ giCount +'">';
          tds += '<td><input class="form-control" id="fecha-'+ giCount +'" name="fecha[]" type="date"></td>';
          tds += '<td><input class="form-control" id="dias-'+ giCount +'" name="dias[]" type="number"></td>';
          tds += '<td><input class="form-control" name="resultado-'+ giCount +'" type="date" disabled></td>';
          tds += '</tr>';

          if($('tbody', this).length > 0){
              $('tbody', this).append(tds);
          }else {
              $(this).append(tds);
          }

      });
  }
