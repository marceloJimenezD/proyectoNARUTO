<?php
	session_start();

	if($_SESSION["validar"] == false){
		header("location:index.php?validar=ingreso");
		
		exit();
	}

?>



<div id="inicio">
	<div id="cerrarSesion">
		<a href="index.php?validar=salir">Cerrar Sesion</a>
	</div>
	<h2 id= "saludo">¡Hola <?php echo $_SESSION["primer_nombre"]; 
		echo ' <img src="'.$_SESSION["foto"].'" style="border-radius: 100%; margin-left: 10px" width="30px"> ';
		?> Bienvenid@ </h2>

	<div id="nivel1" class="niveles">
		<div class="puntaje"><?php echo $_SESSION["puntaje_nivel1"] ?></div>
		<img src="views/img/intro/checkLevel1.svg">
		<center>
			<button>INGRESAR</button>
		</center>
		<div class="puntajes">
			
		</div>
	</div>

	<div id="nivel2" class="niveles">
		<div class="puntaje"><?php echo $_SESSION["puntaje_nivel2"] ?></div>
		<?php
			if($_SESSION["nivel2"] == "ok"){
				echo '<img src="views/img/intro/checkLevel2.svg">
					<center>
					<button>INGRESAR</button>
					</center>
				';
			}else{
				echo '<img src="views/img/intro/blockLevel2.svg">';
			}
		?>

		
		<div class="puntajes">
			
		</div>
	</div>

	<div id="nivel3" class="niveles">
		<div class="puntaje"><?php echo $_SESSION["puntaje_nivel3"] ?></div>

		<?php
			if($_SESSION["nivel3"] == "ok"){
				echo '<img src="views/img/intro/checkLevel3.svg">
					<center>
					<button>INGRESAR</button>
					</center>
				';
			}else{
				echo '<img src="views/img/intro/blockLevel3.svg">';
			}
		?>

		<div class="puntajes">
			
		</div>
	</div>

	
</div>