

const imgFunction = function(constructor:Function){

    console.log(constructor)

}
// Esta función bloquea la posible extensión del objeto PokemonD
const bloqueoDeExpansion = function (constructor:Function){
    // Object.seal(constructor) 
    // Object.seal(constructor.prototype) 
}

// Decorador factory
function CheckValidPkemon(){
// Lo importante aquí es PropertyDescriptor que hace referencia al metodo o función al cuál
// estamos aplicando el decorador . target, key, decriptor lo decidimos nosotros esos nombres
// OJO: PROPERTYDESCRIPTOR SOLO SE RECIBE SI SE TRATA DE UN METODO si vamos aplicar en decorador a una
// propiedad solo se recibe target y setPropertyKey
    return function(target:any, key:string, descriptor:PropertyDescriptor){

        const metodoOriginal = descriptor.value;
        descriptor.value = (id:number)=>{

            if(id <1 || id> 800){

                return console.error('ID no válido')

            }else{

                return metodoOriginal(id)

            }
        }
    }
}
// Decorador a una propiedad
function decoradorPropiedad (escribible: boolean = true):Function{

    return function(target: any, propertyKey: string){

        const descriptor: PropertyDescriptor = {
            //Crea un metodo que no recibe parametros y es llamdao como si fuera una propiedad
            // es decir sin parentesis 
            get() {
                console.log(this)
                return 'Alexander'
            },
            // Crea un metodo set que permite mandar parametros y aplicar programación que se 
            // ejecuta en el momento de la transpilación de la aplicación
            set(this, val) {

                // console.log(this,val);
                Object.defineProperty(this, propertyKey, {

                    value:val,
                    writable: !escribible,
                    enumerable: false

                })

            }

        }

        // Los decoradores se pueden usar para validar o restringir acciones que modifiquen nuestra clase

        return descriptor

    }

}


@bloqueoDeExpansion
@imgFunction

export class PokemonD {

    @decoradorPropiedad()
    public urlPokemons:string = 'https://pokemons.co/'

    constructor(
        name:string
    ){
        console.log(`Mi personaje favorito de POKEMON es ${name}`)
    
    };
    @CheckValidPkemon()
    public idPokemon(id:number){

        console.log(`Pokemon valido con id = ${id}`)

    }
}
