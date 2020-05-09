<?php 
class GestorUsuariosController{
    static public function guardarUsuariosController($datos){
    	$respuestaInsertar = "";

        $datosController = array("identificador"=>$datos["identificador"] , "primer_nombre"=>$datos["primer_nombre"] , "foto" => $datos["foto"]);

        $respuestaSeleccionar= GestorUsuariosModel::seleccionarUsuariosModel($datosController);

        if(!$respuestaSeleccionar){
        	$respuestaInsertar =GestorUsuariosModel::guardarUsuariosModel($datosController);
        }


       
       	var_dump($respuestaSeleccionar);
    }
}
