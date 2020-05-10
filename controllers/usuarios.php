<?php 
class GestorUsuariosController{
    static public function guardarUsuariosController($datos){
    	$respuestaInsertar = "";

        $datosController = array("identificador"=>$datos["identificador"] , "primer_nombre"=>$datos["primer_nombre"] , "foto" => $datos["foto"], "nivel1" => "ok", "puntaje_nivel1" => 0);

        $respuestaSeleccionar= GestorUsuariosModel::seleccionarUsuariosModel($datosController);

        if(!$respuestaSeleccionar){
        	$respuestaInsertar =GestorUsuariosModel::guardarUsuariosModel($datosController);
        }

        if($respuestaSeleccionar || $respuestaInsertar == "ok"){

        	session_start();

            $_SESSION["validar"] = true;
            $_SESSION["primer_nombre"]= $respuestaSeleccionar["primer_nombre"];
            $_SESSION["foto"]= $respuestaSeleccionar["foto"];
            $_SESSION["nivel1"]= $respuestaSeleccionar["nivel1"];
            $_SESSION["puntaje_nivel1"]= $respuestaSeleccionar["puntaje_nivel1"];
            $_SESSION["nivel2"]= $respuestaSeleccionar["nivel2"];
            $_SESSION["puntaje_nivel2"]= $respuestaSeleccionar["puntaje_nivel2"];
            $_SESSION["nivel3"]= $respuestaSeleccionar["nivel3"];
            $_SESSION["puntaje_nivel3"]= $respuestaSeleccionar["puntaje_nivel3"];
            
            echo "ok";
        }       
       	
    }
}
