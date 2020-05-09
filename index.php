<?php


require_once "controllers/template.php" ;
require_once "controllers/usuarios.php";
require_once "models/usuarios.php";



$template = new TemplateController();
$template-> template();
	

//limpiando Sesion ... por si acaso pe papi...//	
session_destroy();
	
	session_start();
	$_SESSION["validar"]=false;
////////////////////////////////////////////////