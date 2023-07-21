let estadoLicua = "apagada";
let slicua = document.getElementById("sond-licua")
let sboton = document.getElementById("sond-boton")
let licuadora = document.getElementById( "licua" )

function motor() {
    if ( estadoLicua == "apagada" ) {
        estadoLicua = "encendido";
        sonido();
        licuadora.classList.add("active");
        console.log("me prendiste"); 
    } else{
        estadoLicua = "apagada"
        sonido();
        licuadora.classList.remove("active");
        console.log("me apagaste");
    }
}
function sonido() {
    if( slicua.paused ){
        sboton.play();
        slicua.play();
    } else{
        sboton.play();
        slicua.pause();
    }
}