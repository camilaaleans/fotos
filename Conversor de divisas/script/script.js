function convertir()
{
  var valor=parseFloat(document.getElementById("cantidad").value);
  document.getElementById("valor").innerHTML=valor;
  var de=document.getElementById("de").value;
  var a=document.getElementById("a").value;
  var dolar=3832;
  var Peso_mexicano =192.64;
  var Euro=4530;
  var LibraEsterlina=5303;
  resultado=0;


//Peso Colombiano a dolar 
   if(de==1&&a==2){
   resultado=valor/dolar
   }
//Peso a Peso Méxicano
   else if (de==1&&a==3){
   resultado=valor/Peso_mexicano;
   }
//Peso a Euro
   else if (de==1&&a==4)
   {resultado=valor/Euro;
   }
//Peso a Libra Esterlina
   else if (de==1&&a==5)
   {resultado=valor/LibraEsterlina;
   }
//Dolar a peso Colombiano 
   else if(de==2&&a==1){
    resultado=valor*dolar;
    }
//Peso Méxicano a peso Colombiano 
    else if(de==3&&a==1){
    resultado=valor*Peso_mexicano;
    }
//Euro a peso Colombiano 
else if(de==4&&a==1){
    resultado=valor*Euro;
    }
//Libra Esterlina a peso Colombiano 
else if(de==5&&a==1){
    resultado=valor*LibraEsterlina;
    }
  //Dolar a peso Mexicano
else if(de==2&&a==3){
    resultado=valor*dolar/Peso_mexicano;
    }

    //Dolar a Euro
else if(de==2&&a==4){
    resultado=valor*dolar/Euro;
    }
    //Dolar a Libra Esterlina
else if(de==2&&a==5){
    resultado=valor*dolar/LibraEsterlina;
    }
    //Peso Mexicano a Peso colombiano
else if(de==3&&a==1){
    resultado=valor*Peso_mexicano/valor;
    }
    //Peso Mexicano a dolar
else if(de==3&&a==2){
    resultado=valor*Peso_mexicano/dolar;
    }
    //Peso Mexicano a Euro
else if(de==3&&a==4){
    resultado=valor*Peso_mexicano/Euro;
    }
    //Peso Mexicano a Libra Esterlina
else if(de==3&&a==5){
    resultado=valor*Peso_mexicano/LibraEsterlina;
    }
    //Euro a Libra Esterlina
else if(de==4&&a==2){
    resultado=valor*Euro/dolar;
    }
    //Euro a Peso mexicano
else if(de==4&&a==3){
    resultado=valor*Euro/Peso_mexicano;
    }
    //Euro a Libra Esterlina
else if(de==4&&a==5){
    resultado=valor*Euro/LibraEsterlina;
    }
    // Libra Esterlina a Dolar
else if(de==5&&a==2){
    resultado=valor*LibraEsterlina/dolar;
    }
    // Libra Esterlina a Peso mexicano
else if(de==5&&a==3){
    resultado=valor*LibraEsterlina/Peso_mexicano;
    }
    // Libra Esterlina a Euro
else if(de==5&&a==4){
    resultado=valor*LibraEsterlina/Euro;
    }
    // Dolar a peso mexicano
else if(de==2&&a==3){
    resultado=valor*dolar/Peso_mexicano;
    }
    // Dolar a Euro
else if(de==2&&a==4){
    resultado=valor*dolar/Euro;
    }
    // Dolar a Libra Esterlina
else if(de==2&&a==4){
    resultado=valor*dolar/LibraEsterlina;
    }
    // peso a peso, dolar a dolar, libra estirla a libra esterlina y euro a euro
else{ 
    resultado=valor;
}


document.getElementById("Resultado").innerHTML="Resultado: $"+ resultado;
}


