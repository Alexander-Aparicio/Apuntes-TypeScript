"use strict";
(function () {
    var msg = 'hola mundo';
    // Tipos de datos => Los de javascript + adicionales
    // Primitivos : string , number, boolean, symbol,null, undefine
    // Compuestos : objetos literales, funciones, clases, arreglos
    //Adicionales : Interfaces, Genericos, Tuplas
    var a = 10;
    // a: es reconocido por typescript como 10
    var b = 10;
    //b: no es reconocido con un valor especifico es decir 10 , solo lo reconoce como number
    var d;
    // d: es reconocido como any es decir puede ser cualquier cosa
    var e;
    // e: es reconocido como string y por ende solo permitira valores string
    // Buenas practicas para evitar errores:
    var m;
    var k;
    // las constantes requieren declararse con un valor necesariamente
    var mn = 10;
    var gg = '10';
    // ------------------------------------
    function HolaMundo(msg) {
        console.log(msg + ' ' + 'Alexander');
    }
})();
(function () {
    var isSuperman = true;
    var isBatman = false;
    console.log({ isSuperman: isSuperman });
    isBatman = (isSuperman) ? true : false;
    console.log(isBatman);
    // OJO No se recomienda usar any
    var avenger = 123;
    avenger = 'Alex';
    //Por buena practica si llegas a usar any debes usar casteo  
    console.log(avenger.charAt(0));
    // Otra forma de casteo
    avenger = 235.65;
    console.log(avenger.toFixed(2));
    var numbersA = [1, 2, 3, 4, 5, 6, 7];
    // Typesript nos mandará un error si queremos pasar un 
    // booleano u otro tipo de dato que no sea número pero su 
    // transformación en javascript se realizará y no verá error
    // numbers.push(true) ; console.log(numbersA) mostrará un true dentro del arreglo
    // Entonces la forma correcta de declarar un arreglo como
    // variable es la siguiente:
    var numbersB = [1, 2, 3, 4, 5];
    // Con esta forma especificamos que tipo de arreglo se trata
    console.log(numbersB);
    var frutas = ['papaya', 'fresa', 'mango'];
    frutas.forEach(function (v) { return console.log(v.toUpperCase()); });
    // TUPLAS:
    var usuario = ['Alexander', 32, true];
    console.log(usuario);
    usuario[0] = 'Aparicio';
    usuario[1] = 33;
    usuario[2] = false;
    console.log(usuario);
    // EMUN - Enumeraciones
    // Sirve para establecer valores que se usaran de manera expresiva
    // como volumen máximo, medio y mímimo
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    ;
    var currentAudio = AudioLevel.max;
    console.log(currentAudio);
    console.log(AudioLevel);
    var AudioLevel2;
    (function (AudioLevel2) {
        AudioLevel2[AudioLevel2["min"] = 1] = "min";
        AudioLevel2[AudioLevel2["medium"] = 2] = "medium";
        AudioLevel2[AudioLevel2["max"] = 5] = "max";
    })(AudioLevel2 || (AudioLevel2 = {}));
    ;
    var currentAudio2 = AudioLevel2.max;
    console.log(currentAudio2);
    console.log(AudioLevel2);
    // VOID - vacío
    function callBatman() {
        // console.log('hola')
        // UNA FUNCION VOID NO ACEPTA RETURN
    }
    var a = callBatman;
    console.log(a);
    // NEVER - No puede tener un punto alcanzanble al finalizar la función
    // const error = (message: string):never=>{
    //     throw new Error(message)
    // }
    // console.log('este mensaje no saldrá a la luz')
    // Si queremos que se de la opción de evitar el never es decir
    // que si se logra un punto alcanzable al finalizar la función
    // por ejemplo un return de nos proporcione un número
    var error = function (message) {
        if (false) {
            throw new Error(message);
        }
        return 5;
    };
    // USUALMENTE ESTA función never se trata arrojar un error.
    console.log('este mensaje no saldrá a la luz');
    // Recuerda que :
    null != undefined;
    // Un valor boolean en la actualidad para typescript no puede aceptar
    // ni null ni undefined
    // A menos que en la configuración le demos un valor de false a strickNullChecks
    // si lo hacemos si nos aceptara que una variable boolean pueda tomar un valor null o undefined
})();
