<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>NARUTO</title>
    <link rel="icon" href="views/img/intro/favicon.png">
    <link rel="stylesheet" href="views/css/estilo.css" type="text/css" media="">
</head>
<body>
    <div id = "vertical"></div>
    <div id="marco">
    
    </div>

    <div id="contenedor">
        <?php
            if(isset($_GET["validar"])){
                include "modules/inicio.php";

            }else{
                include "modules/ingreso.php";
            }

        ?>
    
    </div>
    <script src="views/js/inicio.js"></script>
</body>
</html>