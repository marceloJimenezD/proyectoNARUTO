<?php
require_once "conexion.php";
class GestorUsuariosModel{


    static public function guardarUsuariosModel($datos){
        $stmt = Conexion::conectar()->prepare("INSERT INTO usuarios(identificador,primer_nombre,foto) VALUES(:identificador,:primer_nombre,:foto)");
        
        $stmt->bindParam(":identificador", $datos["identificador"], PDO::PARAM_INT);
        $stmt->bindParam(":primer_nombre", $datos["primer_nombre"], PDO::PARAM_STR);
        $stmt->bindParam(":foto", $datos["foto"], PDO::PARAM_STR);

        if ($stmt->execute()) {
        	return "ok";
        }else{
        	return "error";
        }
        $stmt->close();
    }

    static public function seleccionarUsuariosModel($datos){
        $stmt = Conexion::conectar()->prepare("SELECT id, primer_nombre, foto FROM usuarios WHERE identificador= :identificador");
        $stmt->bindParam(":identificador", $datos["identificador"], PDO::PARAM_INT);
        $stmt -> execute();
        return $stmt -> fetch();
        $stmt -> close();
    }

}