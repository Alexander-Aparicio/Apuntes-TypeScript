(()=>{

    const hero: string = 'flash';

    function returnName():string{

        return hero;
    };

    const activateBatisignal = () :string =>{

        return 'Batiseñal activada'
    };

    console.log(typeof activateBatisignal);

    const heroName = returnName();
    // La variable heroName toma el tipo de dato que la función
    // específica 

    const fullName = ( firstName: string, lastName: string ): string => {

        return `${firstName} ${lastName}` 
    };

    fullName('Alex','Meza');

    const fullName2 = ( firstName:string, lastName:(string|boolean)): string => {

        return `${firstName} ${lastName}` 
    };

    fullName2( 'Aparicio', true );

    // En typeScript por default los parametros son obligatrios no opcionales como
    // en JavaScript
    
    const miFuncion = (obligatorio: string , opcional?: (string|boolean) ):string =>{

        return `${obligatorio} ${opcional || '----'}`
    }

    const funcion = miFuncion('Alex');

    console.log({funcion})

    // Función con un parametro con un valor ´por default

    const miFuncion2 = (obligatorio: string , opcional?: (string|boolean), porDefecto: boolean = false ):string =>{

        return `${obligatorio} ${opcional || '----'} ${porDefecto}`
    }

    const funcion2 = miFuncion2('Alex');

    console.log({funcion2})

    // Función con un parametro obligatorio y el resto opcional
    // ARGS REST
    const desayuno = ( leche: string, ...otros: string[] ): string =>{

        return `${leche} ${otros.join(' ')}`
    }

    const Midesayuno = desayuno('queso','pan','jugo','mermelada')

    console.log(Midesayuno)

    // TIPO DE DATO FUNCTION

    const coordernada = (x: number, y:number)=> x+y;
    const text = ( texto: string ) => `Mi texto ${texto}`;
    const msj = () => `Esto es un mensaje`;
    let myFunction: Function;

    // lA VARIABLE myFunction es de tipo función por ende solo aceptará
    // funciones que pueden ser expresadas en variables, la exprsión de ejecución de una 
    // función a menos que retorne una función no es aceptada pues no es el resultado no es función (no confundir)
    myFunction = coordernada
    console.log(myFunction(45,75))
    myFunction = text
    console.log(myFunction('es un curso de typeScript'))
    myFunction = msj
    console.log(myFunction())
    // Si quiero hacer que mi variable myFunction solo pueda tomar funciones que que 
    // retorne un number u otro tipo de dato
    // vamos a usar una nueva varible para mostrar como realizarlo
    let myFunction2 : (r:number,k:number)=> number;
    // Para que acepte a coordenada en la declaración de la variable myFunction2
    // debe especificar que es una función con dos parámetros de lo contrario lo rechazará 
    // por más que coordenada retorne un number
    myFunction2 = coordernada
    console.log(myFunction2(45,75));
    
    let myFunction3 :(f:string)=>string;
    myFunction3 = text;
    console.log(text('Probando'));
    
    //Si necesito que la varible acepte una función que retorne valor undefine
    //Le asigno como tipo de dato una función que retorne un void
    let myFunction4:()=> void;
    myFunction4 = msj
    console.log(myFunction4())


})()