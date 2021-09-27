(()=>{

    let Usuario:{name:string, edad:number, gustos:string[], yo: ()=> string} = {

        name:'Nombre',
        edad:0,
        gustos:[],
        yo(){return `Hola soy`}
    
    };
    
    Usuario = {
        name:'Alexander',
        edad:32,
        gustos:['Tenis de mesa','Programación','Economía'],
        yo(){ return this.name}
    }
    
    console.log(Usuario.edad)
    console.log(Usuario.gustos)
    console.log(Usuario.name)
    console.log(Usuario.yo())

// Podemos crear un type que viene a ser un tipo de objeto definiddo el cual typescript
// tomará en cuenta para validar

    type info ={
        name:string,
        edad:number,
        gustos:string[],
        yo: ()=>string
    }

    let Jeyson:info ={
        name:'Jason',
        edad:27,
        gustos:['olluco','makis'],
        yo: ()=> {return `${Jeyson.name} tiene ${Jeyson.edad} y le gusta ${Jeyson.gustos.join(', ')}}`
    }}
    console.log(Jeyson.yo())

    // Podemos definir una variable para que tome más de un tipo de dato 

    let Alexander: (string| number| info);

    Alexander = 5
    Alexander = 'Alex'
    Alexander = {
        name:'Alex',
        edad:32,
        gustos:['chocolate','programación'],
        yo: ()=> {return 'HOLA'}
    }
    
})()

