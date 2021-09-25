"use strict";
(function () {
    var hero = 'flash';
    function returnName() {
        return hero;
    }
    ;
    var activateBatisignal = function () {
        return 'Batiseñal activada';
    };
    console.log(typeof activateBatisignal);
    var heroName = returnName();
    // La variable heroName toma el tipo de dato que la función
    // específica 
    var fullName = function (firstName, lastName) {
        return firstName + " " + lastName;
    };
    fullName('Alex', 'Meza');
    var fullName2 = function (firstName, lastName) {
        return firstName + " " + lastName;
    };
    fullName2('Aparicio', true);
    // En typeScript por default los parametros son obligatrios no opcionales como
    // en JavaScript
    var miFuncion = function (obligatorio, opcional) {
        return obligatorio + " " + (opcional || '----');
    };
    var funcion = miFuncion('Alex');
    console.log({ funcion: funcion });
    // Función con un parametro con un valor ´por default
    var miFuncion2 = function (obligatorio, opcional, porDefecto) {
        if (porDefecto === void 0) { porDefecto = false; }
        return obligatorio + " " + (opcional || '----') + " " + porDefecto;
    };
    var funcion2 = miFuncion2('Alex');
    console.log({ funcion2: funcion2 });
    // Función con un parametro obligatorio y el resto opcional
    // ARGS REST
    var desayuno = function (leche) {
        var otros = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            otros[_i - 1] = arguments[_i];
        }
        return leche + " " + otros.join(' ');
    };
    var Midesayuno = desayuno('queso', 'pan', 'jugo', 'mermelada');
    console.log(Midesayuno);
    // TIPO DE DATO FUNCTION
    var coordernada = function (x, y) { return x + y; };
    var text = function (texto) { return "Mi texto " + texto; };
    var msj = function () { return "Esto es un mensaje"; };
    var myFunction;
    // lA VARIABLE myFunction es de tipo función por ende solo aceptará
    // funciones que pueden ser expresadas en variables, la exprsión de ejecución de una 
    // función a menos que retorne una función no es aceptada pues no es el resultado no es función (no confundir)
    myFunction = coordernada;
    console.log(myFunction(45, 75));
    myFunction = text;
    console.log(myFunction('es un curso de typeScript'));
    myFunction = msj;
    console.log(myFunction());
    // Si quiero hacer que mi variable myFunction solo pueda tomar funciones que que 
    // retorne un number u otro tipo de dato
    // vamos a usar una nueva varible para mostrar como realizarlo
    var myFunction2;
    // Para que acepte a coordenada en la declaración de la variable myFunction2
    // debe especificar que es una función con dos parámetros de lo contrario lo rechazará 
    // por más que coordenada retorne un number
    myFunction2 = coordernada;
    console.log(myFunction2(45, 75));
    var myFunction3;
    myFunction3 = text;
    console.log(text('Probando'));
    //Si necesito que la varible acepte una función que retorne valor undefine
    //Le asigno como tipo de dato una función que retorne un void
    var myFunction4;
    myFunction4 = msj;
    console.log(myFunction4());
})();
