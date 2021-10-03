// import { getPokemon } from "./generics/get-pokemon";
define(["require", "exports", "./decoradores/PokemonD"], function (require, exports, PokemonD_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // getPokemon(4)
    //     .then((res)=> console.log(res.name))
    //     .catch((error)=> console.log(error) )
    //     .finally(()=>console.log('fin de cambios'))
    const MiPokemon = new PokemonD_1.PokemonD('Hash');
});
