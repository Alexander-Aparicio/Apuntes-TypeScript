// import { getPokemon } from "./generics/get-pokemon";

import { PokemonD } from './decoradores/PokemonD';

// getPokemon(4)
//     .then((res)=> console.log(res.name))
//     .catch((error)=> console.log(error) )
//     .finally(()=>console.log('fin de cambios'))

const MiPokemon = new PokemonD('Hash');
// (PokemonD.prototype as any).pareja= 'bulma'
// MiPokemon.idPokemon(3)

const url = PokemonD.prototype.urlPokemons

MiPokemon.urlPokemons = 'hola typescript'
console.log(MiPokemon)