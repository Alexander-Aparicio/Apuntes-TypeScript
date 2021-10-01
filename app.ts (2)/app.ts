// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto:batimovil ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

interface batimovil {
  encender:boolean;
  velocidadMaxima:number;
  acelear:()=> void
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface guason {
  reir?: true,
  comer?:true,
  llorar?:false
}

const reir = ( guason:guason ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion
interface CiudadGotica {
 ( ciudadanos:string[]):number
}

const ciudadGotica:CiudadGotica = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

interface Usuario {
  nombre:string,
  edad:number,
  sexo:string,
  estadoCivil:string,
  imprimirBio(): void 
}

class Persona implements Usuario {
  nombre:'Alexander';
  edad:32;
  sexo:'M';
  estadoCivil: 'S';
  imprimirBio(){console.log(`Hola soy ${this.nombre}`)}
}