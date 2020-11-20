import React, { useState, useEffect } from 'react'
import Title from './components/title'
import Home from './components/home'

function App() {
const [pokeData, setPokeData] = useState()

useEffect(() => {
  getDataPokedex()
}, [])

const getDataPokedex = () => {
  fetch("https://pokeapi.co/api/v2/ability/?limit=20&offset=20")
      .then(res => res.json())
      .then(
        (result) => {
          const data = result
          setPokeData(data);
        },
        (error) => {
          console.log(error, 'error');
        }
      )
}

console.log(pokeData, 'base ')


  return (
    <>
      <Title 
        titleName= 'POKEDEX'
        ColorLine= 'white'
        ColorTitle = 'black'
      />
      <Home pokeData={pokeData}/>
  
    </>
  );
}

export default App;
