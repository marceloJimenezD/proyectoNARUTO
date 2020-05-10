<?php 
class GestorUsuariosController{
    static public function guardarUsuariosController($datos){
    	$respuestaInsertar = "";

        $datosController = array("identificador"=>$datos["identificador"] , "primer_nombre"=>$datos["primer_nombre"] , "foto" => $datos["foto"], "nivel1" => "ok", "puntaje_nivel1" => 0,"nivel2" => "no", "puntaje_nivel2" => 0,"nivel3" => "no", "puntaje_nivel3" => 0);

        $respuestaSeleccionar= GestorUsuariosModel::seleccionarUsuariosModel($datosController);

        if(!$respuestaSeleccionar){
        	$respuestaInsertar =GestorUsuariosModel::guardarUsuariosModel($datosController);
        }

        if($respuestaSeleccionar || $respuestaInsertar == "ok"){
            $respuestaSeleccionar= GestorUsuariosModel::seleccionarUsuariosModel($datosController);

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


    static public function puntajesNivelController($datos){
        $respuesta = GestorUsuariosModel::puntajesNivelModel($datos);

        foreach ($respuesta as $row => $item) {
            if($item[$datos]>0){
                echo '<li>
                        <img src="'.$item["foto"].'">
                        <h3>'.$item["primer_nombre"].'</h3>
                        <h2>'.$item[$datos].'</h2>
                    </li>';
            }
        }
    }
}
