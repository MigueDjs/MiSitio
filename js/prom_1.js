console.log('Inprimir resulatdo: ');

//Funciones en JavaScript
function sumarUno(numero, callback){
    //Simulando función asincrona
    setTimeout(function(){
        callback(numero +1);
    }, 1500);
    
}

sumarUno(5, function(numeroValor){
    console.log(numeroValor);
    sumarUno(numeroValor, function(numeroValor2){
        console.log(numeroValor2);
        sumarUno(numeroValor2, function(numeroValor3){
            console.log(numeroValor3);
        });
    });
});

