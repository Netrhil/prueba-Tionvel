//Ejecuta una llamada a la api

urlServer = window.location.href.match(/^(.+):(\/\/)(.+)(\/)/)[0];

var datos = [{"fecha":"2018-02-24","dias":"3"},
             {"fecha":"2018-02-08","dias":"4"},
             {"fecha":"2018-02-16","dias":"5"},
             {"fecha":"2018-02-17","dias":"1"}];

$.ajax({
  url:   urlServer + 'api/ingreso-formulario',
  type: 'GET',
  data: {
    json: JSON.stringify(datos)
  },
  contentType: 'application/json',
  dataType: 'json',
  success: function(resultado) {
   test(resultado);
  }
});


//Funcion encargada de ejecutar la prueba con Qunit
function test(datos){

  QUnit.test( "Test envio de datos a Api", function(assert) {

    var estructuraResponse =  {
      "status": "error ordenamiento",
      "datos": {
          "posError": 1
      }
    };

    //Determina si la estructura propuesta y el response tienen la misma estructura
    assert.deepEqual( estructuraResponse, datos, "Los datos del response son de la estructura esperada" );

  });



}
