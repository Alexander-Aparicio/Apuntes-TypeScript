"use strict";
(function () {
    var Usuario = {
        name: 'Nombre',
        edad: 0,
        gustos: [],
        yo: function () { return "Hola soy"; }
    };
    Usuario = {
        name: 'Alexander',
        edad: 32,
        gustos: ['Tenis de mesa', 'Programación', 'Economía'],
        yo: function () { return this.name; }
    };
    console.log(Usuario.edad);
    console.log(Usuario.gustos);
    console.log(Usuario.name);
    console.log(Usuario.yo());
    var Jeyson = {
        name: 'Jason',
        edad: 27,
        gustos: ['olluco', 'makis'],
        yo: function () {
            return Jeyson.name + " tiene " + Jeyson.edad + " y le gusta " + Jeyson.gustos.join(', ') + "}";
        }
    };
    console.log(Jeyson.yo());
    // Podemos definir una variable para que tome más de un tipo de dato 
    var Alexander;
    Alexander = 5;
    Alexander = 'Alex';
    Alexander = {
        name: 'Alex',
        edad: 32,
        gustos: ['chocolate', 'programación'],
        yo: function () { return 'HOLA'; }
    };
})();
