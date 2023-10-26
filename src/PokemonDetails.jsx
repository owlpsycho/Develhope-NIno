import { useNavigate, useParams } from "react-router-dom";
import { useFetchPokemonDetails } from "./useFetchPokemonDetails";
import { useContext } from "react";
import { useContextName } from "./Contex/useContexName";

export const PokemonDetails = () => {
  const navigate = useNavigate();
  const { pokemonname } = useParams();
  const { data, error, isLoading } = useFetchPokemonDetails(pokemonname);
  const name = useContext(useContextName)
  console.log(name);
  console.log(data);
  const handleGoHome = () => {
    navigate("/pokedex");
  };

  return (
    <>
      <h1>Pokemon Details</h1>
      {isLoading && <h1>Sta caricando...</h1>}
        {data && <div>
            <img src={data.sprites.front_default} />
            <h1>{data.name}</h1>
            {data.abilities.map(item => item.is_hidden ? <p key={item.ability.name}>{item.ability.name}</p> : "")}

        </div>}
      <button onClick={handleGoHome}>Home</button>
    </>
  );
};
