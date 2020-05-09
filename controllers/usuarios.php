<?php 
class GestorUsuariosController{
    static public function guardarUsuariosController($datos){
    	$respuestaInsertar = "";

        $datosController = array("identificador"=>$datos["identificador"] , "primer_nombre"=>$datos["primer_nombre"] , "foto" => $datos["foto"]);

        $respuestaSeleccionar= GestorUsuariosModel::seleccionarUsuariosModel($datosController);

        if(!$respuestaSeleccionar){
        	$respuestaInsertar =GestorUsuariosModel::guardarUsuariosModel($datosController);
        }

        if($respuestaSeleccionar || $respuestaInsertar == "ok"){

        	session_start();

            $_SESSION["validar"] = true;
            $_SESSION["primer_nombre"]= $respuestaSeleccionar["primer_nombre"];
            $_SESSION["foto"]= $respuestaSeleccionar["foto"];
            
            echo "ok";
        }       
       	
    }
}
