var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "axios"], function (require, exports, axios_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getPokemon = void 0;
    axios_1 = __importDefault(axios_1);
    const getPokemon = async (u) => {
        const resp = await axios_1.default.get(`https://pokeapi.co/api/v2/pokemon/${u}`);
        console.log(resp.data.name);
        return resp.data;
    };
    exports.getPokemon = getPokemon;
});
// La interfce nos dice como va lucir la respuesta