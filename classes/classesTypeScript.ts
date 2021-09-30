(()=>{

    class profesional {

        static institucion:string = 'Universidad'
        // método:
        static presentacion(){
            return this.name
            // this.name hace referencia al nombre de la clase
            // Y SOLO  se puede llamar haciendo referencia a la clase y no a la instancia
        }
        public saludo(){
            return `Hola te saluda un ${this.profesion}`
        }
        // Los metodos privados: no se pueden acceder a ellos de manera externa
    
        // PROPIEDADES:
        constructor(
            public profesion:string, 
            private sexo:string, 
            public postgrado:boolean,
            institucion:string ='uni'
        ) {
            profesional.institucion = institucion
        }
        
    }
    // Alexander es una instancia de la clase profesional 
    const Alexander:profesional = new profesional('Economista','Masculino', true)
    console.log(Alexander)
    console.log(Alexander.saludo())

    class desarrolloWeb {

        static html:string = 'Html'
        static css:string = 'Css'
        
        constructor(

            public lenguaje:string, 
            public ide:string, 
            public version:number, 
            private year:number

        ){}

        public tech (){

            return `Mi lenguaje de programación favorito es ${this.lenguaje} del ${this.year}`
        }
        protected metodologia (){

            return `Mi metodología es ser muy estratégico con ${this.lenguaje} del ${this.year}`
        }
    }

    const Alex:desarrolloWeb = new desarrolloWeb('TypeScript','Visual Studio', 14.5,2015) 
    // Podemos acceder a las propiedades y alos metodos públicos
    console.log(Alex.lenguaje)
    console.log(Alex.tech())
    // No se puede acceder a un metodo privado o prtegido desde afuera
    // console.log(Alex.metodologia())

    
    class desarrolloProfesional extends desarrolloWeb {

        constructor(

            lenguaje:string, 
            ide:string, 
            version:number, 
            year:number,
            public framework: string

        ) {
            super(lenguaje,ide,version,year)
            console.log()
        }

        
        public get MyFramework() {
            return ` Mi framework favorito es ${this.framework}`
        }
        
        
        public set MyFramework(v : string) {
            this.framework = v;
        }
        

        public msj(){
            return `${this.metodologia()}`
        }
        
    }

    const Aparicio : desarrolloProfesional = new desarrolloProfesional('Python','Brackets', 2016,2020,'React')

    console.log(Aparicio.msj())
    // set es una especie de método propiedad que recibe necesariamente un solo parametro que se puede usar 
    // de la siguiente manera
    Aparicio.MyFramework = 'Angular'
    // get es una especie de método que se manda a llamar como si fuera una propiedad
    console.log(Aparicio.MyFramework)

    // CLASES ABSTRACTAS
    // Sirven para crear otras clases  a partir de ellas, no para crear instancias (ejm: const mivar = new claseAbstracta)

    abstract class perfil {
        constructor( public name: string, public age: number) {}
    }

    class  presentation extends perfil {
        public myPresentation(){
            return `Hola soy ${this.name} y tengo ${this.age} años`
        }
    }

    const Alejandro :presentation = new presentation('Alejandro',32)

    console.log(Alejandro.myPresentation())

    const bienvenida = (pedro:presentation)=>{

        console.log(pedro.age) 

    }

    bienvenida(Alejandro)


})()
