(()=>{

    // Las interfaces son muy similares a los type  de hecho la diferencia radica en que estas
    // estas son extendibles ,ientras los type no lo son.
    // Una interfaz a diferencia de una clase solo nos dice como debe lucir
    // el objeto
    interface info {
        name:string;
        edad:number;
        gustos:string[];
        yo: ()=>string;
    }

    let Jeyson:info ={
        name:'Jason',
        edad:27,
        gustos:['olluco','makis'],
        yo: ()=> `${Jeyson.name} tiene ${Jeyson.edad} y le gusta ${Jeyson.gustos.join(' y ')}`
    };
    console.log(Jeyson.yo())

    let Alexander: (string| number| info);

    Alexander = 5
    Alexander = 'Alex'
    Alexander = {
        name:'Alex',
        edad:32,
        gustos:['chocolate','programación'],
        yo: ()=> {return 'HOLA'}
    }

    // Al colocar un método está solo debe especificar el tipo de dato
    // de su parametro y su return

    interface Client {
        name: string;
        age?: number;
        address: Address;
        getFullAddress( id:string):String;
    }

    interface Address {
        id:number;
        zip: string;
        city:string;
    }

    const Client: Client = {
        name: 'Alexander',
        age: 32,
        address:{
            id:1415,
            zip:'ggp',
            city:'Lima'
        },
        getFullAddress(id:string){
            return this.address.city
        }
    }

    // Las interfaces pueden poner métodos como las clases pero 
    // ojo una clase no puede extenderse de interfaces pero si puede implementarlas

    interface Profesion {
        carrera: string;
        nivel: string;
        graduado: boolean;
        presentacion(id:void):string
    }

    interface Genero {
        hombre: boolean;
        mujer: boolean;
    }

    class Perfil implements Profesion, Genero {

        constructor(
            public carrera: string,
            public nivel: string,
            public graduado: boolean,
            public hombre: boolean,
            public mujer: boolean
        ){}
        presentacion(id:void){return `Hola soy ${this.carrera} una carrera ${this.nivel}`}
    }
    //  Esto sirve para obligar a que nuestra clase tenga la información o propiedades
    // de las interfaces.
    const Alex = new Perfil('Economista','Universitaria',true,true,false) 

    console.log(Alex.presentacion())

})()