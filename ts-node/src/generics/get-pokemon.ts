import axios from "axios";
import { Pokemon } from './interface';

const getPokemon =  async (u:number): Promise<Pokemon> => {

    const resp = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${u}`)
    console.log(resp.data.name)

    return resp.data

}

export { getPokemon }
// La interfce nos dice como va lucir la respuesta