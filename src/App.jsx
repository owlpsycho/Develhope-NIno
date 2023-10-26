import { PokemonList } from "./PokemonList"
import './App.css'
import {Routes, Route} from 'react-router-dom'
import HomePokedex from "./HomePokedex"
import { PokemonDetails } from "./PokemonDetails"
import { useContextName } from "./Contex/useContexName"

const App = () => {
  
  return (
    <>
    <useContextName.Provider value={{name: "pippo"}}>
        <Routes>
          <Route path='/' element={<HomePokedex />} />
          <Route path="/pokedex" element={<PokemonList />} />
          <Route path="/pokemondetails/:pokemonname" element={<PokemonDetails />} />
        </Routes>
      </useContextName.Provider>
    </>
  )
}

export default App