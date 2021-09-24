(()=>{

    const msg: string = 'hola mundo';
    // Tipos de datos => Los de javascript + adicionales
    // Primitivos : string , number, boolean, symbol,null, undefine
    // Compuestos : objetos literales, funciones, clases, arreglos
    //Adicionales : Interfaces, Genericos, Tuplas
    const a = 10;
    // a: es reconocido por typescript como 10
    let b = 10;
    //b: no es reconocido con un valor especifico es decir 10 , solo lo reconoce como number
    let d;
    // d: es reconocido como any es decir puede ser cualquier cosa
    let e:string;
    // e: es reconocido como string y por ende solo permitira valores string
    
    // Buenas practicas para evitar errores:
    let m: string;
    let k: number;
    // las constantes requieren declararse con un valor necesariamente
    const mn: number = 10
    const gg: string = '10'
    // ------------------------------------
    
    function HolaMundo (msg:string){
    
        console.log(msg + ' ' + 'Alexander')
    }

})();

(()=>{

    let isSuperman:boolean = true;
    let isBatman: boolean = false;

    console.log({isSuperman})

    isBatman = (isSuperman) ? true : false;

    console.log(isBatman)

    // OJO No se recomienda usar any
    let avenger:any = 123;
    avenger = 'Alex';
    //Por buena practica si llegas a usar any debes usar casteo  
    console.log((avenger as string).charAt(0));
    // Otra forma de casteo
    avenger = 235.65;
    console.log((<number>avenger).toFixed(2))

    const numbersA = [1,2,3,4,5,6,7];
    // Typesript nos mandará un error si queremos pasar un 
    // booleano u otro tipo de dato que no sea número pero su 
    // transformación en javascript se realizará y no verá error
    // numbers.push(true) ; console.log(numbersA) mostrará un true dentro del arreglo
    // Entonces la forma correcta de declarar un arreglo como
    // variable es la siguiente:

    const numbersB: number[] = [1,2,3,4,5];
    // Con esta forma especificamos que tipo de arreglo se trata
    console.log(numbersB)

    const frutas =['papaya','fresa','mango']

    frutas.forEach(v=> console.log(v.toUpperCase()))
    
    // TUPLAS:
    const usuario: [string,number,boolean] = ['Alexander',32,true]

    console.log(usuario);

    usuario[0] = 'Aparicio';
    usuario[1] = 33;
    usuario[2] = false;

    console.log(usuario)

    // EMUN - Enumeraciones
    // Sirve para establecer valores que se usaran de manera expresiva
    // como volumen máximo, medio y mímimo

    enum AudioLevel {

        min,
        medium,
        max

    };

    let currentAudio = AudioLevel.max;

    console.log(currentAudio);
    console.log(AudioLevel);

    enum AudioLevel2 {

        min = 1,
        medium,
        max =5

    };

    let currentAudio2 = AudioLevel2.max;

    console.log(currentAudio2);
    console.log(AudioLevel2);

    // VOID - vacío

    function callBatman():void{
        // console.log('hola')
        // UNA FUNCION VOID NO ACEPTA RETURN
    }

    const a = callBatman
    console.log(a)

    // NEVER - No puede tener un punto alcanzanble al finalizar la función

    // const error = (message: string):never=>{

    //     throw new Error(message)

    // }

    // console.log('este mensaje no saldrá a la luz')

    // Si queremos que se de la opción de evitar el never es decir
    // que si se logra un punto alcanzable al finalizar la función
    // por ejemplo un return de nos proporcione un número

    const error = (message: string):(never | number)=>{

        if(false){

            throw new Error(message)
        }

        return 5
        
    }
    // USUALMENTE ESTA función never se trata arrojar un error.

    console.log('este mensaje no saldrá a la luz')

    // Recuerda que :
    null != undefined
    // Un valor boolean en la actualidad para typescript no puede aceptar
    // ni null ni undefined
    // A menos que en la configuración le demos un valor de false a strickNullChecks
    // si lo hacemos si nos aceptara que una variable boolean pueda tomar un valor null o undefined

})()


