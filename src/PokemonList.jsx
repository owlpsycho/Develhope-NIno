import { useState, useEffect } from "react";
import { PokeCard } from "./PokeCard";
import Pagination from '@mui/material/Pagination';

export function PokemonList() {
    const [pokemonData, setPokemonData] = useState([]);
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(0);

    const fetchData = async () => {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${page}`)
        const dataJson = await data.json()
        console.log(dataJson);
        setCount(dataJson.count)
        
        dataJson.results.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            const responseJson = await response.json();
            setPokemonData(prev=>[...prev, responseJson]);
        }
        )
    }

    useEffect(() => {
        try {
            fetchData();
        } catch (error) {
            console.error(error);
        }
    }, [page])

    const handlePage = (_event, value) => {
        setPage(value);
        setPokemonData([]);
    }

    return (
        <div className="container">
            {!pokemonData ? <h1>Catching Pokemons...</h1> : pokemonData.map(pokemon=>
                <div>
                    <PokeCard key={pokemon.id} name={pokemon.name} img={pokemon.sprites.front_default} details={pokemon}/>
                </div>)
            }
            <Pagination count={Math.ceil(count / 20)} page={page} onChange={handlePage} />
        </div>
    )
}