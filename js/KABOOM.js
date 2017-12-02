  /*  //setInterval
    var cronometro;

    function detenerse()
    {
        clearInterval(cronometro);
    }

    function carga()
    {
        contador_s =5;
        contador_m =0;
        s = document.getElementById("segundos");
        m = document.getElementById("minutos");

        cronometro = setInterval(
            function(){
                if(contador_s==0)
                {
                    //contador_s=59;
                    contador_m--;
                    m.innerHTML = contador_m;

                /*    if(contador_m==0)
                    {
                        contador_m=59;
                    }
                    */
                }

                s.innerHTML = contador_s;
                contador_s=contador_s-1;

                if(contador_s==-9)
                {
                    alert("perdiste jajajaajjaajja");
                }

            }
            ,100);
        
    }
  */