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
          <div class="col-md-8">
            <form id="formulario" name="formulario-id" action="">
            <table id="tabla" class="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th width="30%">Fecha</th>
                        <th width="30%">Días a sumar</th>
                        <th width="30%">Resultado</th>
                    </tr>
                </thead>
                <tbody>
                  <tr id="tr1">
                        <td id="td-fecha-1">
                            <input class="form-control" id="fecha-1" name="fecha[]" type="date">
                        </td>
                        <td id="td-dias-1">
                            <input class="form-control" id="dias-1" name="dias[]" type="number">
                        </td>
                        <td>
                            <input class="form-control" name="resultado-1" type="date" disabled>
                        </td>
                  </tr>
                  <tr id="tr2">
                        <td id="td-fecha-2">
                            <input class="form-control" id="fecha-2" name="fecha[]" type="date">
                        </td>
                        <td id="td-dias-2">
                            <input class="form-control" id="dias-2" name="dias[]" type="number">
                        </td>
                        <td>
                            <input class="form-control" name="resultado-2" type="date" disabled>
                        </td>
                  </tr>
                  <tr id="tr3">
                        <td id="td-fecha-3">
                            <input class="form-control" id="fecha-3" name="fecha[]" type="date">
                        </td>
                        <td id="td-dias-3">
                            <input class="form-control" id="dias-3" name="dias[]" type="number">
                        </td>
                        <td>
                            <input class="form-control" name="resultado-3" type="date" disabled>
                  </tr>
                  <tr id="tr4">
                        <td id="td-fecha-4">
                            <input class="form-control" id="fecha-4" name="fecha[]" type="date">
                        </td>
                        <td id="td-dias-4">
                            <input class="form-control" id="dias-4" name="dias[]" type="number">
                        </td>
                        <td>
                            <input class="form-control" name="resultado-4" type="date" disabled>
                        </td>
                  </tr>
                </tbody>
            </table>
              <div class="row">
              <div class="col-md-6">
                <a href="javascript:agregarLinea();" title="Agregar Linea" class="btn btn-primary"><i class="fa fa-plus"></i> Agregar linea</a>
              </div>
              <div class="col-md-6">
                <button class="btn btn-success pull-right" title="Guardar" type="submit" id="boton_formulario"><i class="fa fa-check"></i> Enviar formulario</button>
              </div>
          </form>

            </div>
          </div>

        </div>
    </div>
    </body>
    <script src="{{asset('js/app.js')}}" type="text/javascript"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jquery-validation@1.17.0/dist/jquery.validate.js"></script>
    <script src="{{asset('js/welcome.js')}}" type="text/javascript"></script>
</html>
