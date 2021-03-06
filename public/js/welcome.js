var filaCount = 4;

$(document).ready(function() {

  $("#boton_formulario").click(function(evento) {
    Validar();
  });

});


/**
 Lee cada fila de la tabla, si encuentra algun campo de fecha o
 dias vacío ,impide que se mande el formulario a la api.
**/

function Validar() {

  var fechasValidas = true;
  var diasValidos = true;

  $("tr[id^=tr]").each(function() {
    var id_error_fecha = $(this).attr("id") + "-error-fecha";

    //Si encuentra datos vacios en la fecha, adjunta un mensaje y agregar color al input.
    if ($(this).find("input[id^=fecha-]").val() == "") {
      fechasValidas = false;
      $("#" + id_error_fecha).remove();
      $($(this).find("td[id^=td-fecha-]")).removeClass('has-success');
      $($(this).find("td[id^=td-fecha-]")).addClass("has-error");
      $(this).find("td[id^=td-fecha-]").append("<span id=" + id_error_fecha + ">El campo fecha es obligatorio.</span>");
      $(this).focus();
    } else {
      $($(this).find("td[id^=td-fecha-]")).removeClass('has-error');
      $($(this).find("td[id^=td-fecha-]")).addClass('has-success');
      $("#" + id_error_fecha).remove();
    }
  });

  //Si encuentra datos vacios en los dias, adjunta un mensaje y agregar color al input.
  $("tr[id^=tr]").each(function() {
    var id_error_dias = $(this).attr("id") + "-error-dias";

    if ($(this).find("input[id^=dias-]").val() <= 0) {
      diasValidos = false;
      $("#" + id_error_dias).remove();
      $($(this).find("td[id^=td-dias-]")).removeClass('has-success');
      $($(this).find("td[id^=td-dias-]")).addClass("has-error");
      $(this).find("td[id^=td-dias-]").append("<span id=" + id_error_dias + ">El campo días esta vacío o es inválido.</span>");
      $(this).focus();
    } else {
      $($(this).find("td[id^=td-dias-]")).removeClass('has-error');
      $($(this).find("td[id^=td-dias-]")).addClass('has-success');
      $("#" + id_error_dias).remove();
    }
  });

  if (fechasValidas && diasValidos) {
    enviarRequest();
  }

}

//Toma todos los pares fecha/dia y los envia a la api en formato json.
function enviarRequest() {
  datosJson = [];

  $("tr[id^=tr]").each(function() {
    item = {}
    item["fecha"] = $(this).find("input[id^=fecha-]").val();
    item["dias"] = $(this).find("input[id^=dias-]").val();

    datosJson.push(item);

  });

  $.ajax({
    url:  window.location.href + 'api/ingreso-formulario',
    type: 'GET',
    data: {
      json: JSON.stringify(datosJson)
    },
    contentType: 'application/json',
    dataType: 'json',
    success: function(data) {
      console.log(data);
      procesarResponse(data);
    }
  });


}

function agregarLinea() {
  tabla = $('#tabla tr:last').attr('id').match(/[0-9]+/g);
  var rowCount = $('#tabla tr').length;
  filaCount++;
  añadirFila($('#tabla'));
}

function eliminarLinea(linea) {
  count = parseInt($('#tabla > tbody > tr').length);
  if (count != 4) {
    var tr = $('#tr' + linea);
    tr.fadeOut(400, function() {
      tr.remove();
    });
    return false;
  }
}

function añadirFila(Tabla) {

  Tabla.each(function() {
    var $table = $(this);
    var tds = '<tr id="tr' + filaCount + '">';
    tds += '<td class="text-center"><b>' + filaCount + '</b></td>'
    tds += '<td id="td-fecha-' + filaCount + '"><input class="form-control" id="fecha-' + filaCount + '" name="fecha[]" type="date"></td>';
    tds += '<td id="td-dias-' + filaCount + '"><input class="form-control" id="dias-' + filaCount + '" name="dias[]" type="number"></td>';
    tds += '<td id="td-result-' + filaCount + '" align="center"></td>';
    tds += '</tr>';

    if ($('tbody', this).length > 0) {
      $('tbody', this).append(tds);
    } else {
      $(this).append(tds);
    }

  });
}

/**
  Procesa el response y muestra las fechas calculadas, en el caso
  de haber errores de de ordenamiento , muestra una alerta indicando
  en que fila ocurrio.
**/
function procesarResponse(Response) {

  if (Response["status"] == "OK") {
    $("tr[id^=tr]").removeClass("has-error");

    for (var cont in Response["datos"]) {
      $("#alertas").empty();
      $("#alertas").append('<div class="alert alert-success"><strong>Éxito!</strong> Las fechas han sido calculadas satisfactoriamente</div>');

      filaEnString = String(parseInt(cont) + 1);
      $("#td-result-" + filaEnString).empty();
      $("#td-result-" + filaEnString).append("<b>" + Response["datos"][cont] + " </b>");
    }
  } else {
    $("#alertas").empty();
    $("#alertas").append('<div class="alert alert-danger"><strong>Ups!</strong> Hay problemas de ordenamiento en la fila <b>' + Response["datos"]["posError"] + '</b></div>');

    $("td[id^=td-result-]").empty();
    $("tr[id^=tr]").removeClass("has-error");
    $("#tr" + Response["datos"]["posError"]).addClass("has-error");
  }


}
