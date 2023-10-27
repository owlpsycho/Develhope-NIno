import { useNavigate, useParams } from "react-router-dom";
import { useFetchPokemonDetails } from "./useFetchPokemonDetails";
import { useContext } from "react";
import { useContextTheme } from "./Contex/useContextTheme";
import ButtonPokemon from "./ButtonPokemon";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const PokemonDetails = () => {
  const navigate = useNavigate();
  const { pokemonname } = useParams();
  const { data, error, isLoading } = useFetchPokemonDetails(pokemonname);
  const name = useContext(useContextTheme)
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
      <ButtonPokemon handleButton={handleGoHome}   >
        <ArrowBackIcon/>
      </ButtonPokemon>
    </>
  );
};
