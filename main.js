"use strict";
(() => {
    let Jeyson = {
        name: 'Jason',
        edad: 27,
        gustos: ['olluco', 'makis'],
        yo: () => `${Jeyson.name} tiene ${Jeyson.edad} y le gusta ${Jeyson.gustos.join(' y ')}`
    };
    console.log(Jeyson.yo());
    let Alexander;
    Alexander = 5;
    Alexander = 'Alex';
    Alexander = {
        name: 'Alex',
        edad: 32,
        gustos: ['chocolate', 'programación'],
        yo: () => { return 'HOLA'; }
    };
    const Client = {
        name: 'Alexander',
        age: 32,
        address: {
            id: 1415,
            zip: 'ggp',
            city: 'Lima'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
    class Perfil {
        constructor(carrera, nivel, graduado, hombre, mujer) {
            this.carrera = carrera;
            this.nivel = nivel;
            this.graduado = graduado;
            this.hombre = hombre;
            this.mujer = mujer;
        }
        presentacion(id) { return `Hola soy ${this.carrera} una carrera ${this.nivel}`; }
    }
    const Alex = new Perfil('Economista', 'Universitaria', true, true, false);
    console.log(Alex.presentacion());
})();
//# sourceMappingURL=main.js.map