import { PokemonList } from "./PokemonList"
import './App.css'
import {Routes, Route} from 'react-router-dom'
import HomePokedex from "./HomePokedex"

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePokedex />} />
        <Route path="/pokedex" element={<PokemonList />} />
      </Routes>
    </>
  )
}

export default App