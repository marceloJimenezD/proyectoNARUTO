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

                switch ($_GET["validar"]) {
                    case "inicio":
                        include "modules/inicio.php";     
                    break;
                    case "salir":
                        include "modules/salir.php";     
                    break;
                    
                    default:
                        include "modules/ingreso.php";
                    
                }
                


            }else{
                include "modules/ingreso.php";
            }

        ?>
    
    </div>
    <script src="views/js/var_y_prop.js"></script>
    <script src="views/js/inicio.js"></script>
</body>
</html>