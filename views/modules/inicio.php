<?php
	session_start();

	if($_SESSION["validar"] == false){
		header("location:index.php?validar=ingreso");
		
		exit();
	}

?>



<div id="inicio">
	<div id="cerrarSesion">
		<a href="">Cerrar Sesion</a>
	</div>
	<h2 id= "saludo">Hola <img src="views/img/intro/maria.png" style="border-radius: 100%; margin-left: 10px" width="30px">  Bienvenid@ </h2>

	<div id="nivel1" class="niveles">
		<div class="puntaje">100pts</div>
		<img src="views/img/intro/checkLevel1.svg">
		<center>
			<button>INGRESAR</button>
		</center>
		<div class="puntajes">
			
		</div>
	</div>

	<div id="nivel2" class="niveles">
		<div class="puntaje">0pts</div>
		<img src="views/img/intro/blockLevel2.svg">
		<div class="puntajes">
			
		</div>
	</div>

	<div id="nivel3" class="niveles">
		<div class="puntaje">0pts</div>
		<img src="views/img/intro/blockLevel3.svg">

		<div class="puntajes">
			
		</div>
	</div>

	
</div>