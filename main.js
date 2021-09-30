"use strict";
(() => {
    class profesional {
        constructor(profesion, sexo, postgrado, institucion = 'uni') {
            this.profesion = profesion;
            this.sexo = sexo;
            this.postgrado = postgrado;
            profesional.institucion = institucion;
        }
        static presentacion() {
            return this.name;
        }
        saludo() {
            return `Hola te saluda un ${this.profesion}`;
        }
    }
    profesional.institucion = 'Universidad';
    const Alexander = new profesional('Economista', 'Masculino', true);
    console.log(Alexander);
    console.log(Alexander.saludo());
    class desarrolloWeb {
        constructor(lenguaje, ide, version, year) {
            this.lenguaje = lenguaje;
            this.ide = ide;
            this.version = version;
            this.year = year;
        }
        tech() {
            return `Mi lenguaje de programación favorito es ${this.lenguaje} del ${this.year}`;
        }
        metodologia() {
            return `Mi metodología es ser muy estratégico con ${this.lenguaje} del ${this.year}`;
        }
    }
    desarrolloWeb.html = 'Html';
    desarrolloWeb.css = 'Css';
    const Alex = new desarrolloWeb('TypeScript', 'Visual Studio', 14.5, 2015);
    console.log(Alex.lenguaje);
    console.log(Alex.tech());
    class desarrolloProfesional extends desarrolloWeb {
        constructor(lenguaje, ide, version, year, framework) {
            super(lenguaje, ide, version, year);
            this.framework = framework;
            console.log();
        }
        get MyFramework() {
            return ` Mi framework favorito es ${this.framework}`;
        }
        set MyFramework(v) {
            this.framework = v;
        }
        msj() {
            return `${this.metodologia()}`;
        }
    }
    const Aparicio = new desarrolloProfesional('Python', 'Brackets', 2016, 2020, 'React');
    console.log(Aparicio.msj());
    Aparicio.MyFramework = 'Angular';
    console.log(Aparicio.MyFramework);
    class perfil {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    class presentation extends perfil {
        myPresentation() {
            return `Hola soy ${this.name} y tengo ${this.age} años`;
        }
    }
    const Alejandro = new presentation('Alejandro', 32);
    console.log(Alejandro.myPresentation());
    const bienvenida = (pedro) => {
        console.log(pedro.age);
    };
    bienvenida(Alejandro);
})();
//# sourceMappingURL=main.js.map