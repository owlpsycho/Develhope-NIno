import { PokemonList } from "./PokemonList"
import './App.css'
import {Routes, Route} from 'react-router-dom'
import HomePokedex from "./HomePokedex"
import { PokemonDetails } from "./PokemonDetails"
import { useContextTheme } from "./Contex/useContextTheme"
import Layout from "./Layout"
import { useState } from "react"


const App = () => {

  const[theme,setTheme]=useState({theme:"light"})

  const handleThemes=(e) => {
    setTheme( prevTheme => { return {...prevTheme,theme:e.target.value}} )
    
  }
  
  return (
    <>
    <useContextTheme.Provider value={theme}>
      <Layout handleTheme={handleThemes}>
        <Routes>
          <Route path='/' element={<HomePokedex />} />
          <Route path="/pokedex" element={<PokemonList />} />
          <Route path="/pokemondetails/:pokemonname" element={<PokemonDetails />} />
        </Routes>
        </Layout>
      </useContextTheme.Provider>
    </>
  )
}

export default App