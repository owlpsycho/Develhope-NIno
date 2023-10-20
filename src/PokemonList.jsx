import { useState, useEffect } from "react";
import { PokemonInfo } from "./PokemonInfo";



export function PokemonList() {

    const [pokemonData, setPokemonData] = useState([]);


    const FetchData = async () => {
        const data = await fetch("https://pokeapi.co/api/v2/pokemon/")
        const dataJson = await data.json()
        
        dataJson.results.map(async (pokemon) => {
            const response = await fetch(pokemon.url)

            const responseJson = await response.json()
            
            setPokemonData(prev=>[...prev,responseJson])

        }

        )
        return dataJson
    }

    useEffect(() => {
        try {
            FetchData()

        } catch (error) {
            console.error(error);
        }

    }, [])
        console.log(pokemonData);
    return (
        <div className="container">
            {pokemonData.length > 0 && pokemonData.map(pokemon=>
            <PokemonInfo key={pokemon.id} name={pokemon.name} img={pokemon.sprites.front_default} />)
                }
            
        </div>
    )
}