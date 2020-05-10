var inicio = {
    iniciar: function(){
        
        var identificador="1";
        var primer_nombre="pedro";
        var foto = "views/img/intro/pedro.png";

        var xhr = new XMLHttpRequest();
        var url= "views/ajax/usuarios.php";

        xhr.open("POST",url,true);
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xhr.send("identificador="+identificador+"& primer_nombre="+primer_nombre+"& foto="+foto);

        xhr.onreadystatechange=function(){
            //console.log("R:",xhr.readyState);
            //console.log("S:",xhr.status);
            if((xhr.readyState==4)&&(xhr.status==200)){
                if(xhr.responseText == "ok"){
                    window.location= "index.php?validar=inicio";
                }
            }
        }
    },


    elegirNivel: function(event){
        datos.nivel= event.getAttribute("nivel");
        inicio.inicioNiveles(datos.nivel);

    },


    inicioNiveles:function(nivel){
        document.querySelector("#inicio").parentNode.removeChild(document.querySelector("#inicio"));
        console.log(nivel);

        canvas = document.querySelector("#lienzo");
        ctx = canvas.getContext("2d");
        document.querySelector("#lienzo").style.display = "block";


        ////////// Plano3 ///////////
        datos.plano3 = new Image();
        datos.plano3.src = "views/img/nivel"+nivel+"/plano3.png";

        datos.plano3.onload= function(){
            ctx.drawImage(datos.plano3, 0, 0, datos.plano3.naturalWidth, datos.plano3.naturalHeight);
            ctx.drawImage(datos.plano3, 1000, 0, datos.plano3.naturalWidth, datos.plano3.naturalHeight);
            ctx.drawImage(datos.plano3, 2000, 0, datos.plano3.naturalWidth, datos.plano3.naturalHeight);
        }


        ////////// Plano2 ///////////
        datos.plano2 = new Image();
        datos.plano2.src = "views/img/nivel"+nivel+"/plano2.png";

        datos.plano2.onload= function(){
            ctx.drawImage(datos.plano2, 0, 0, datos.plano2.naturalWidth, datos.plano2.naturalHeight);
            ctx.drawImage(datos.plano2, 1000, 0, datos.plano2.naturalWidth, datos.plano2.naturalHeight);
            ctx.drawImage(datos.plano2, 2000, 0, datos.plano2.naturalWidth, datos.plano2.naturalHeight);
        }


        ////////// Plano1 ///////////
        datos.plano1 = new Image();
        datos.plano1.src = "views/img/nivel"+nivel+"/plano1.png";

        datos.plano1.onload= function(){
            ctx.drawImage(datos.plano1, 0, 0, datos.plano1.naturalWidth, datos.plano1.naturalHeight);
            ctx.drawImage(datos.plano1, 1000, 0, datos.plano1.naturalWidth, datos.plano1.naturalHeight);
            ctx.drawImage(datos.plano1, 2000, 0, datos.plano1.naturalWidth, datos.plano1.naturalHeight);
        }


      ///////////////////plataforma1///////////////

        datos.texturaPlataforma= new Image();
        datos.texturaPlataforma.src = "views/img/nivel"+nivel+"/texturaPlataforma.jpg";

        if(nivel == 1){
            datos.bloques = [{"x":0, "y":338, "ancho":66, "alto":162},
                            {"x":160, "y":278, "ancho":66, "alto":222},
                            {"x":227, "y":294, "ancho":66, "alto":206},
                            {"x":0, "y":389, "ancho":223, "alto":111},
                            {"x":160, "y":356, "ancho":223, "alto":144},
                            {"x":435, "y":245, "ancho":66, "alto":255},
                            {"x":522, "y":350, "ancho":67.388, "alto":150},
                            {"x":401, "y":393, "ancho":66, "alto":107},
                            {"x":589, "y":265, "ancho":200, "alto":235},
                            {"x":864, "y":414, "ancho":66, "alto":86},
                            {"x":921, "y":387, "ancho":66, "alto":113},
                            {"x":1078, "y":387, "ancho":173, "alto":113},
                            {"x":1251, "y":357, "ancho":173, "alto":143},
                            {"x":1518, "y":357, "ancho":79, "alto":143},
                            {"x":1690, "y":357, "ancho":117, "alto":143},
                            {"x":1807, "y":281, "ancho":69, "alto":219},
                            {"x":1921, "y":368, "ancho":155, "alto":132},
                            {"x":2145, "y":307, "ancho":69, "alto":193},
                            {"x":2320, "y":205, "ancho":155, "alto":295},
                            {"x":2436, "y":125.984, "ancho":155, "alto":374.016},
                            {"x":2280, "y":364.082, "ancho":155, "alto":135.918},
                            {"x":2690, "y":0, "ancho":310, "alto":156},
                            {"x":2690, "y":288, "ancho":310, "alto":212}]
        }


        if(nivel == 2){
            datos.bloques = [{"x":0, "y":373, "ancho":333, "alto":127},
                            {"x":333, "y":373, "ancho":333, "alto":127},
                            {"x":666, "y":373, "ancho":333, "alto":127},
                            {"x":1665, "y":373, "ancho":333, "alto":127},
                            {"x":1332, "y":373, "ancho":333, "alto":127},
                            {"x":999, "y":373, "ancho":333, "alto":127},
                            {"x":2664, "y":373, "ancho":333, "alto":127},
                            {"x":2331, "y":373, "ancho":333, "alto":127},
                            {"x":1998, "y":373, "ancho":333, "alto":127},
                            {"x":504.014, "y":279.368, "ancho":85, "alto":46},
                            {"x":648.133, "y":234.222, "ancho":85, "alto":46},
                            {"x":1161.014, "y":279.368, "ancho":85, "alto":46},
                            {"x":1319.014, "y":279.368, "ancho":85, "alto":46},
                            {"x":1492.014, "y":279.368, "ancho":85, "alto":46},
                            {"x":2154.014, "y":279.368, "ancho":85, "alto":46},
                            {"x":2304.192, "y":234.058, "ancho":85, "alto":46},
                            {"x":2628.014, "y":279.368, "ancho":85, "alto":46}]

        }

        if(nivel==3){
            datos.bloques=[{"x":0, "y":450, "ancho":50, "alto":50},
                          {"x":50, "y":450, "ancho":50, "alto":50},
                          {"x":150, "y":450, "ancho":50, "alto":50},
                          {"x":100, "y":450, "ancho":50, "alto":50},
                          {"x":350, "y":450, "ancho":50, "alto":50},
                          {"x":300, "y":450, "ancho":50, "alto":50},
                          {"x":200, "y":450, "ancho":50, "alto":50},
                          {"x":250, "y":450, "ancho":50, "alto":50},
                          {"x":750, "y":450, "ancho":50, "alto":50},
                          {"x":700, "y":450, "ancho":50, "alto":50},
                          {"x":600, "y":450, "ancho":50, "alto":50},
                          {"x":650, "y":450, "ancho":50, "alto":50},
                          {"x":400, "y":450, "ancho":50, "alto":50},
                          {"x":450, "y":450, "ancho":50, "alto":50},
                          {"x":550, "y":450, "ancho":50, "alto":50},
                          {"x":500, "y":450, "ancho":50, "alto":50},
                          {"x":800, "y":450, "ancho":50, "alto":50},
                          {"x":850, "y":450, "ancho":50, "alto":50},
                          {"x":900, "y":450, "ancho":50, "alto":50},
                          {"x":950, "y":450, "ancho":50, "alto":50},
                          {"x":0, "y":300, "ancho":50, "alto":50},
                          {"x":0, "y":250, "ancho":50, "alto":50},
                          {"x":0, "y":150, "ancho":50, "alto":50},
                          {"x":0, "y":200, "ancho":50, "alto":50},
                          {"x":0, "y":100, "ancho":50, "alto":50},
                          {"x":0, "y":50, "ancho":50, "alto":50},
                          {"x":0, "y":0, "ancho":50, "alto":50},
                          {"x":50, "y":0, "ancho":50, "alto":50},
                          {"x":150, "y":0, "ancho":50, "alto":50},
                          {"x":100, "y":0, "ancho":50, "alto":50},
                          {"x":350, "y":0, "ancho":50, "alto":50},
                          {"x":300, "y":0, "ancho":50, "alto":50},
                          {"x":200, "y":0, "ancho":50, "alto":50},
                          {"x":250, "y":0, "ancho":50, "alto":50},
                          {"x":750, "y":0, "ancho":50, "alto":50},
                          {"x":700, "y":0, "ancho":50, "alto":50},
                          {"x":600, "y":0, "ancho":50, "alto":50},
                          {"x":650, "y":0, "ancho":50, "alto":50},
                          {"x":400, "y":0, "ancho":50, "alto":50},
                          {"x":450, "y":0, "ancho":50, "alto":50},
                          {"x":550, "y":0, "ancho":50, "alto":50},
                          {"x":500, "y":0, "ancho":50, "alto":50},
                          {"x":800, "y":0, "ancho":50, "alto":50},
                          {"x":850, "y":0, "ancho":50, "alto":50},
                          {"x":900, "y":0, "ancho":50, "alto":50},
                          {"x":950, "y":0, "ancho":50, "alto":50},
                          {"x":950, "y":300, "ancho":50, "alto":50},
                          {"x":950, "y":250, "ancho":50, "alto":50},
                          {"x":950, "y":150, "ancho":50, "alto":50},
                          {"x":950, "y":200, "ancho":50, "alto":50},
                          {"x":950, "y":350, "ancho":50, "alto":50},
                          {"x":950, "y":400, "ancho":50, "alto":50},
                          {"x":300, "y":250, "ancho":50, "alto":50},
                          {"x":300, "y":300, "ancho":50, "alto":50},
                          {"x":300, "y":400, "ancho":50, "alto":50},
                          {"x":300, "y":350, "ancho":50, "alto":50},
                          {"x":50, "y":300, "ancho":50, "alto":50},
                          {"x":100, "y":300, "ancho":50, "alto":50},
                          {"x":150, "y":300, "ancho":50, "alto":50},
                          {"x":300, "y":200, "ancho":50, "alto":50},
                          {"x":300, "y":150, "ancho":50, "alto":50},
                          {"x":250, "y":150, "ancho":50, "alto":50},
                          {"x":200, "y":150, "ancho":50, "alto":50},
                          {"x":150, "y":150, "ancho":50, "alto":50},
                          {"x":450, "y":50, "ancho":50, "alto":50},
                          {"x":450, "y":250, "ancho":50, "alto":50},
                          {"x":450, "y":200, "ancho":50, "alto":50},
                          {"x":450, "y":100, "ancho":50, "alto":50},
                          {"x":450, "y":150, "ancho":50, "alto":50},
                          {"x":450, "y":300, "ancho":50, "alto":50},
                          {"x":600, "y":250, "ancho":50, "alto":50},
                          {"x":600, "y":300, "ancho":50, "alto":50},
                          {"x":600, "y":400, "ancho":50, "alto":50},
                          {"x":600, "y":350, "ancho":50, "alto":50},
                          {"x":600, "y":200, "ancho":50, "alto":50},
                          {"x":600, "y":150, "ancho":50, "alto":50},
                          {"x":750, "y":50, "ancho":50, "alto":50},
                          {"x":750, "y":250, "ancho":50, "alto":50},
                          {"x":750, "y":200, "ancho":50, "alto":50},
                          {"x":750, "y":100, "ancho":50, "alto":50},
                          {"x":750, "y":150, "ancho":50, "alto":50},
                          {"x":750, "y":300, "ancho":50, "alto":50},
                          {"x":800, "y":200, "ancho":50, "alto":23},
                          {"x":900, "y":150, "ancho":50, "alto":22},
                          {"x":900, "y":377, "ancho":50, "alto":23},
                          {"x":250, "y":375, "ancho":50, "alto":25},
                          {"x":50, "y":227, "ancho":50, "alto":23},
                          {"x":400, "y":200, "ancho":50, "alto":24},
                          {"x":350, "y":327, "ancho":50, "alto":23},
                          {"x":550, "y":377, "ancho":50, "alto":23},
                          {"x":500, "y":300, "ancho":50, "alto":23},
                          {"x":550, "y":200, "ancho":50, "alto":23},
                          {"x":1950, "y":450, "ancho":50, "alto":50},
                          {"x":1900, "y":450, "ancho":50, "alto":50},
                          {"x":1800, "y":450, "ancho":50, "alto":50},
                          {"x":1850, "y":450, "ancho":50, "alto":50},
                          {"x":1600, "y":450, "ancho":50, "alto":50},
                          {"x":1650, "y":450, "ancho":50, "alto":50},
                          {"x":1750, "y":450, "ancho":50, "alto":50},
                          {"x":1700, "y":450, "ancho":50, "alto":50},
                          {"x":1200, "y":450, "ancho":50, "alto":50},
                          {"x":1250, "y":450, "ancho":50, "alto":50},
                          {"x":1350, "y":450, "ancho":50, "alto":50},
                          {"x":1300, "y":450, "ancho":50, "alto":50},
                          {"x":1550, "y":450, "ancho":50, "alto":50},
                          {"x":1500, "y":450, "ancho":50, "alto":50},
                          {"x":1400, "y":450, "ancho":50, "alto":50},
                          {"x":1450, "y":450, "ancho":50, "alto":50},
                          {"x":1150, "y":450, "ancho":50, "alto":50},
                          {"x":1100, "y":450, "ancho":50, "alto":50},
                          {"x":1050, "y":450, "ancho":50, "alto":50},
                          {"x":1000, "y":450, "ancho":50, "alto":50},
                          {"x":1950, "y":300, "ancho":50, "alto":50},
                          {"x":1950, "y":250, "ancho":50, "alto":50},
                          {"x":1950, "y":150, "ancho":50, "alto":50},
                          {"x":1950, "y":200, "ancho":50, "alto":50},
                          {"x":1950, "y":100, "ancho":50, "alto":50},
                          {"x":1950, "y":50, "ancho":50, "alto":50},
                          {"x":1950, "y":0, "ancho":50, "alto":50},
                          {"x":1900, "y":0, "ancho":50, "alto":50},
                          {"x":1800, "y":0, "ancho":50, "alto":50},
                          {"x":1850, "y":0, "ancho":50, "alto":50},
                          {"x":1600, "y":0, "ancho":50, "alto":50},
                          {"x":1650, "y":0, "ancho":50, "alto":50},
                          {"x":1750, "y":0, "ancho":50, "alto":50},
                          {"x":1700, "y":0, "ancho":50, "alto":50},
                          {"x":1200, "y":0, "ancho":50, "alto":50},
                          {"x":1250, "y":0, "ancho":50, "alto":50},
                          {"x":1350, "y":0, "ancho":50, "alto":50},
                          {"x":1300, "y":0, "ancho":50, "alto":50},
                          {"x":1550, "y":0, "ancho":50, "alto":50},
                          {"x":1500, "y":0, "ancho":50, "alto":50},
                          {"x":1400, "y":0, "ancho":50, "alto":50},
                          {"x":1450, "y":0, "ancho":50, "alto":50},
                          {"x":1150, "y":0, "ancho":50, "alto":50},
                          {"x":1100, "y":0, "ancho":50, "alto":50},
                          {"x":1050, "y":0, "ancho":50, "alto":50},
                          {"x":1000, "y":0, "ancho":50, "alto":50},
                          {"x":1000, "y":300, "ancho":50, "alto":50},
                          {"x":1000, "y":250, "ancho":50, "alto":50},
                          {"x":1000, "y":150, "ancho":50, "alto":50},
                          {"x":1000, "y":200, "ancho":50, "alto":50},
                          {"x":1000, "y":350, "ancho":50, "alto":50},
                          {"x":1000, "y":400, "ancho":50, "alto":50},
                          {"x":1650, "y":250, "ancho":50, "alto":50},
                          {"x":1650, "y":300, "ancho":50, "alto":50},
                          {"x":1650, "y":400, "ancho":50, "alto":50},
                          {"x":1650, "y":350, "ancho":50, "alto":50},
                          {"x":1900, "y":300, "ancho":50, "alto":50},
                          {"x":1850, "y":300, "ancho":50, "alto":50},
                          {"x":1800, "y":300, "ancho":50, "alto":50},
                          {"x":1650, "y":200, "ancho":50, "alto":50},
                          {"x":1650, "y":150, "ancho":50, "alto":50},
                          {"x":1700, "y":150, "ancho":50, "alto":50},
                          {"x":1750, "y":150, "ancho":50, "alto":50},
                          {"x":1800, "y":150, "ancho":50, "alto":50},
                          {"x":1500, "y":50, "ancho":50, "alto":50},
                          {"x":1500, "y":250, "ancho":50, "alto":50},
                          {"x":1500, "y":200, "ancho":50, "alto":50},
                          {"x":1500, "y":100, "ancho":50, "alto":50},
                          {"x":1500, "y":150, "ancho":50, "alto":50},
                          {"x":1500, "y":300, "ancho":50, "alto":50},
                          {"x":1350, "y":250, "ancho":50, "alto":50},
                          {"x":1350, "y":300, "ancho":50, "alto":50},
                          {"x":1350, "y":400, "ancho":50, "alto":50},
                          {"x":1350, "y":350, "ancho":50, "alto":50},
                          {"x":1350, "y":200, "ancho":50, "alto":50},
                          {"x":1350, "y":150, "ancho":50, "alto":50},
                          {"x":1200, "y":50, "ancho":50, "alto":50},
                          {"x":1200, "y":250, "ancho":50, "alto":50},
                          {"x":1200, "y":200, "ancho":50, "alto":50},
                          {"x":1200, "y":100, "ancho":50, "alto":50},
                          {"x":1200, "y":150, "ancho":50, "alto":50},
                          {"x":1200, "y":300, "ancho":50, "alto":50},
                          {"x":1150, "y":250, "ancho":50, "alto":23},
                          {"x":1050, "y":150, "ancho":50, "alto":22},
                          {"x":1050, "y":327, "ancho":50, "alto":23},
                          {"x":1700, "y":375, "ancho":50, "alto":25},
                          {"x":1900, "y":227, "ancho":50, "alto":23},
                          {"x":1550, "y":200, "ancho":50, "alto":24},
                          {"x":1300, "y":377, "ancho":50, "alto":23},
                          {"x":1450, "y":300, "ancho":50, "alto":23},
                          {"x":1250, "y":200, "ancho":50, "alto":23},
                          {"x":2000, "y":450, "ancho":50, "alto":50},
                          {"x":2050, "y":450, "ancho":50, "alto":50},
                          {"x":2150, "y":450, "ancho":50, "alto":50},
                          {"x":2100, "y":450, "ancho":50, "alto":50},
                          {"x":2350, "y":450, "ancho":50, "alto":50},
                          {"x":2300, "y":450, "ancho":50, "alto":50},
                          {"x":2200, "y":450, "ancho":50, "alto":50},
                          {"x":2250, "y":450, "ancho":50, "alto":50},
                          {"x":2750, "y":450, "ancho":50, "alto":50},
                          {"x":2700, "y":450, "ancho":50, "alto":50},
                          {"x":2600, "y":450, "ancho":50, "alto":50},
                          {"x":2650, "y":450, "ancho":50, "alto":50},
                          {"x":2400, "y":450, "ancho":50, "alto":50},
                          {"x":2450, "y":450, "ancho":50, "alto":50},
                          {"x":2550, "y":450, "ancho":50, "alto":50},
                          {"x":2500, "y":450, "ancho":50, "alto":50},
                          {"x":2800, "y":450, "ancho":50, "alto":50},
                          {"x":2850, "y":450, "ancho":50, "alto":50},
                          {"x":2900, "y":450, "ancho":50, "alto":50},
                          {"x":2950, "y":450, "ancho":50, "alto":50},
                          {"x":2000, "y":300, "ancho":50, "alto":50},
                          {"x":2000, "y":250, "ancho":50, "alto":50},
                          {"x":2000, "y":150, "ancho":50, "alto":50},
                          {"x":2000, "y":200, "ancho":50, "alto":50},
                          {"x":2000, "y":100, "ancho":50, "alto":50},
                          {"x":2000, "y":50, "ancho":50, "alto":50},
                          {"x":2000, "y":0, "ancho":50, "alto":50},
                          {"x":2050, "y":0, "ancho":50, "alto":50},
                          {"x":2150, "y":0, "ancho":50, "alto":50},
                          {"x":2100, "y":0, "ancho":50, "alto":50},
                          {"x":2350, "y":0, "ancho":50, "alto":50},
                          {"x":2300, "y":0, "ancho":50, "alto":50},
                          {"x":2200, "y":0, "ancho":50, "alto":50},
                          {"x":2250, "y":0, "ancho":50, "alto":50},
                          {"x":2750, "y":0, "ancho":50, "alto":50},
                          {"x":2700, "y":0, "ancho":50, "alto":50},
                          {"x":2600, "y":0, "ancho":50, "alto":50},
                          {"x":2650, "y":0, "ancho":50, "alto":50},
                          {"x":2400, "y":0, "ancho":50, "alto":50},
                          {"x":2450, "y":0, "ancho":50, "alto":50},
                          {"x":2550, "y":0, "ancho":50, "alto":50},
                          {"x":2500, "y":0, "ancho":50, "alto":50},
                          {"x":2800, "y":0, "ancho":50, "alto":50},
                          {"x":2850, "y":0, "ancho":50, "alto":50},
                          {"x":2900, "y":0, "ancho":50, "alto":50},
                          {"x":2950, "y":0, "ancho":50, "alto":50},
                          {"x":2950, "y":300, "ancho":50, "alto":50},
                          {"x":2950, "y":250, "ancho":50, "alto":50},
                          {"x":2950, "y":150, "ancho":50, "alto":50},
                          {"x":2950, "y":200, "ancho":50, "alto":50},
                          {"x":2950, "y":350, "ancho":50, "alto":50},
                          {"x":2950, "y":400, "ancho":50, "alto":50},
                          {"x":2300, "y":250, "ancho":50, "alto":50},
                          {"x":2300, "y":300, "ancho":50, "alto":50},
                          {"x":2300, "y":400, "ancho":50, "alto":50},
                          {"x":2300, "y":350, "ancho":50, "alto":50},
                          {"x":2050, "y":300, "ancho":50, "alto":50},
                          {"x":2100, "y":300, "ancho":50, "alto":50},
                          {"x":2150, "y":300, "ancho":50, "alto":50},
                          {"x":2300, "y":200, "ancho":50, "alto":50},
                          {"x":2300, "y":150, "ancho":50, "alto":50},
                          {"x":2250, "y":150, "ancho":50, "alto":50},
                          {"x":2200, "y":150, "ancho":50, "alto":50},
                          {"x":2150, "y":150, "ancho":50, "alto":50},
                          {"x":2450, "y":50, "ancho":50, "alto":50},
                          {"x":2450, "y":250, "ancho":50, "alto":50},
                          {"x":2450, "y":200, "ancho":50, "alto":50},
                          {"x":2450, "y":100, "ancho":50, "alto":50},
                          {"x":2450, "y":150, "ancho":50, "alto":50},
                          {"x":2450, "y":300, "ancho":50, "alto":50},
                          {"x":2600, "y":250, "ancho":50, "alto":50},
                          {"x":2600, "y":300, "ancho":50, "alto":50},
                          {"x":2600, "y":400, "ancho":50, "alto":50},
                          {"x":2600, "y":350, "ancho":50, "alto":50},
                          {"x":2600, "y":200, "ancho":50, "alto":50},
                          {"x":2600, "y":150, "ancho":50, "alto":50},
                          {"x":2750, "y":50, "ancho":50, "alto":50},
                          {"x":2750, "y":250, "ancho":50, "alto":50},
                          {"x":2750, "y":200, "ancho":50, "alto":50},
                          {"x":2750, "y":100, "ancho":50, "alto":50},
                          {"x":2750, "y":150, "ancho":50, "alto":50},
                          {"x":2750, "y":300, "ancho":50, "alto":50},
                          {"x":2900, "y":240, "ancho":50, "alto":23},
                          {"x":2900, "y":150, "ancho":50, "alto":22},
                          {"x":2900, "y":377, "ancho":50, "alto":23},
                          {"x":2250, "y":375, "ancho":50, "alto":25},
                          {"x":2050, "y":227, "ancho":50, "alto":23},
                          {"x":2400, "y":200, "ancho":50, "alto":24},
                          {"x":2350, "y":327, "ancho":50, "alto":23},
                          {"x":2550, "y":377, "ancho":50, "alto":23},
                          {"x":2500, "y":300, "ancho":50, "alto":23},
                          {"x":2550, "y":200, "ancho":50, "alto":23},
                          {"x":800, "y":300, "ancho":50, "alto":23},
                          {"x":1250, "y":300, "ancho":50, "alto":23},
                          {"x":1550, "y":300, "ancho":50, "alto":24},
                          {"x":1601, "y":380, "ancho":50, "alto":23},
                          {"x":2800, "y":300, "ancho":50, "alto":23}]
        }


        datos.texturaPlataforma.onload=function(){
            for(var i = 0 ; i< datos.bloques.length; i++){
                ctx.drawImage(datos.texturaPlataforma, datos.bloques[i].x,datos.bloques[i].y,datos.bloques[i].ancho,datos.bloques[i].alto);
            }
        }

        ////////////jugador//////////

        datos.imgJugador = new Image();
        datos.imgJugador.src= "views/img/jugador/stop_right.png";
        datos.imgJugador.onload=function(){
            ctx.drawImage(datos.imgJugador,0,0,100,100,datos.jugador_x,datos.jugador_y,datos.jugador_ancho,datos.jugador_alto);
        }



        ////////// Plano0 ///////////
        datos.plano0 = new Image();
        datos.plano0.src = "views/img/nivel"+nivel+"/plano0.png";

        datos.plano0.onload= function(){
            ctx.drawImage(datos.plano0, 0, 0, datos.plano0.naturalWidth, datos.plano0.naturalHeight);
            ctx.drawImage(datos.plano0, 1000, 0, datos.plano0.naturalWidth, datos.plano0.naturalHeight);
            ctx.drawImage(datos.plano0, 2000, 0, datos.plano0.naturalWidth, datos.plano0.naturalHeight);
        }

    }
}