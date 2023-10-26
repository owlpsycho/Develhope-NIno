import useSWR from "swr";
import axios from 'axios'

export const useFetchPokemonDetails = (name) => {
    const fetcher = url => axios.get(url).then(res => res.data)
  const { data, error, isLoading } = useSWR(`https://pokeapi.co/api/v2/pokemon/${name}`, fetcher);
  return { data, error, isLoading }
};
