let mensaje = `De los 8 mil millones de personas en el mundo… terminé encontrándote a ti.
Y entre tantas rutas posibles, el destino decidió que nuestros caminos coincidieran. 

Fue como si el tiempo caminara más despacio solo para que pudiera verte llegar.

Porque entre infinitas posibilidades,
mi coincidencia favorita… sigues siendo tú. ❤️`;
let i = 0;

function escribir(){
    if(i < mensaje.length){
        document.getElementById("frase").textContent += mensaje[i];
        i++;
        setTimeout(escribir,300);
    }
}

escribir();


// 👇 CAMBIA ESTA FECHA
let fechaInicio = new Date("2022-08-17");

function actualizarContador(){

    let hoy = new Date();
    let diferencia = hoy - fechaInicio;

    let dias = Math.floor(diferencia / (1000*60*60*24));

    document.getElementById("contador").textContent =
    dias + " días desde que empezó mi parte favorita de la vida.";
}

actualizarContador();


function revelar(){
    document.getElementById("final").textContent =
    "Y si el destino me preguntara otra vez... te elegiría sin dudarlo. ❤️";
}



