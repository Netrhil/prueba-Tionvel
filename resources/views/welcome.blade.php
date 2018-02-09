<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <link href="{{ asset("plugins/font-awesome/css/font-awesome.css") }}" rel="stylesheet">

        <link href="{{ asset("css/app.css") }}" rel="stylesheet">
        <link href="{{ asset("css/custom.css") }}" rel="stylesheet">

    </head>
    <body>
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-offset-3">
            <div class="row">
                  <div id="alertas"></div>
            </div>

            <table id="tabla" class="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th width="10%" class="text-center">Fila</th>
                        <th width="30%">Fecha</th>
                        <th width="30%">Días a sumar</th>
                        <th width="30%" class="text-center">Resultado</th>
                    </tr>
                </thead>
                <tbody>
                  <tr id="tr1">
                        <td class="text-center">
                            <b>1</b>
                        </td>
                        <td id="td-fecha-1">
                            <input class="form-control" id="fecha-1" name="fecha[]" type="date">
                        </td>
                        <td id="td-dias-1">
                            <input class="form-control" id="dias-1" name="dias[]" type="number">
                        </td>
                        <td id="td-result-1" align="center"></td>
                  </tr>
                  <tr id="tr2">
                        <td class="text-center">
                            <b>2</b>
                        </td>
                        <td id="td-fecha-2">
                            <input class="form-control" id="fecha-2" name="fecha[]" type="date">
                        </td>
                        <td id="td-dias-2">
                            <input class="form-control" id="dias-2" name="dias[]" type="number">
                        </td>
                        <td id="td-result-2" align="center"></td>
                  </tr>
                  <tr id="tr3">
                        <td class="text-center">
                            <b>3</b>
                        </td>
                        <td id="td-fecha-3">
                            <input class="form-control" id="fecha-3" name="fecha[]" type="date">
                        </td>
                        <td id="td-dias-3">
                            <input class="form-control" id="dias-3" name="dias[]" type="number">
                        </td>
                        <td id="td-result-3" align="center"></td>
                  </tr>
                  <tr id="tr4">
                        <td class="text-center">
                            <b>4</b>
                        </td>
                        <td id="td-fecha-4">
                            <input class="form-control" id="fecha-4" name="fecha[]" type="date">
                        </td>
                        <td id="td-dias-4">
                            <input class="form-control" id="dias-4" name="dias[]" type="number">
                        </td>
                        <td id="td-result-4" align="center"></td>
                  </tr>
                </tbody>
            </table>
              <div class="row">
              <div class="col-md-4">
                <a href="javascript:agregarLinea();" title="Agregar Linea" class="btn btn-primary pull-left"><i class="fa fa-plus"></i> Agregar linea</a>
              </div>
              <div class="col-md-4">
                <a target="_blank"  href="{{ url("/test-unitario") }}?coverage" class="btn btn-info" title="Guardar" id="boton-test-unitario"><i class="fa fa-cogs"></i> Test unitario</a>
              </div>
              <div class="col-md-4">
                <button class="btn btn-success pull-right" title="Guardar" id="boton_formulario"><i class="fa fa-check"></i> Enviar formulario</button>
              </div>
            </div>

        </div>

        </div>
        <div id="info-request">

        </div>
    </div>
    </body>
    <script src="{{asset('js/app.js')}}" type="text/javascript"></script>
    <script src="{{asset('js/welcome.js')}}" type="text/javascript"></script>
</html>
