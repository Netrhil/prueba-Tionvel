<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Carbon\Carbon;

class ApiController extends Controller
{
    public function ingresoFormulario(Request $request)
    {
      date_default_timezone_set('america/santiago');

      $arregloJson = collect(json_decode($request->json, true));
      $Resultado[] = array();
      $fechasValidas = true;

      $arregloJsonParse = $arregloJson->map(function($parDiaFecha){
         return ["fecha" => Carbon::createFromFormat('Y-m-d', $parDiaFecha["fecha"]), "dias" => (int)$parDiaFecha["dias"]];
      });

      for ($i = 0; $i < count($arregloJsonParse) - 1 ; $i++) {
        if ($arregloJsonParse[$i]["fecha"] > $arregloJsonParse[$i+1]["fecha"]) {
          $fechasValidas = false;
          break;
        }
      }

      foreach ($arregloJsonParse as $parDiaFecha) {
        $dias = $parDiaFecha["dias"];
        $fecha = $parDiaFecha["fecha"];

        while ($dias > 0) {
          if ($fecha->isWeekend() or $this->esFeriadoIrrenunciable( $fecha )) {
            $fecha->addDays(2);
          }
          else {
            $fecha->addDays(1);
          }
          $dias--;
        }
        array_push($Resultado, $fecha);
      }

      return response()->json(json_encode($arregloJson));;


    }

    public function esFeriadoIrrenunciable( $Fecha )
    {
      $diasFeriados = collect([["mes" => 1, "dia" => 1],
                                ["mes" => 5, "dia" => 1],
                                ["mes" => 9, "dia" => 18],
                                ["mes" => 9, "dia" => 19],
                                ["mes" => 12, "dia" => 25]]);

      $esFeriado = $diasFeriados->search(function ($feriado) use ($Fecha)  {
          return $Fecha->month == $feriado["mes"] and $Fecha->day == $feriado["dia"];
        });

      if ($esFeriado) {
        return true;
      }
      else {
        return false;
      }

    }
}
