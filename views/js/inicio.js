var inicio = {
    iniciar: function(){
        
        var identificador="11111";
        var primer_nombre="maria";
        var foto = "views/img/intro/maria.png";

        var xhr = new XMLHttpRequest();
        var url= "views/ajax/usuarios.php";

        xhr.open("POST",url,true);
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xhr.send("identificador="+identificador+"& primer_nombre="+primer_nombre+"& foto="+foto);

        xhr.onreadystatechange=function(){
            //console.log("R:",xhr.readyState);
            //console.log("S:",xhr.status);
            if((xhr.readyState==4)&&(xhr.status==200)){
                console.log("xhr.RT: ",xhr.responseText);
            }
        }
    }
}