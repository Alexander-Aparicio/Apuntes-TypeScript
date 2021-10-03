var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PokemonD = void 0;
    const bloqueoDeExpansion = function (constructor) {
        Object.seal(constructor);
        Object.seal(constructor.prototype);
    };
    let PokemonD = class PokemonD {
        constructor(name) {
            this.urlPokemons = 'https://pokemons.co/';
            console.log(`Mi personaje favorito de POKEMON es ${name}`);
        }
    };
    PokemonD = __decorate([
        bloqueoDeExpansion
    ], PokemonD);
    exports.PokemonD = PokemonD;
});
