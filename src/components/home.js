import React, {useEffect, useState} from 'react';
import axios from 'axios';
import PokeDetails from '../Pages/pokeDetails';
import AllPoke from './AllPoke'

const Home = () => {
const [pokeData, setPokeData] = useState([])
const [pokeId, setPokeId] = useState([])
const [pokeDetails, setPokeDetails] = useState({types: []})
const [pokeAbility, setPokeAbility] = useState({abilities: []})
const [pokeImage, setPokeImage] = useState([])
const [openAndClose, setOpenAndClose] = useState(false)

useEffect((id) => {
    getDataPokedex()
    if(id) {
        getDataPokedexId(id)
        getDataPokeDetails(id)
        getDataPokeImages(id)
    }
}, [])

const getDataPokedex = async () => {
    await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`)
        .then(res => {
            const data = res.data.results;
            setPokeData(data)
        }).catch(function (error) {
            // handle error
            console.log(error, 'error');
        });
}

const getDataPokedexId = async (id) => {
   await axios.get(`https://pokeapi.co/api/v2/ability/${id}`)
        .then(res => {
            const data = res.data;
            setPokeId(data)
        }).catch(function (error) {
            // handle error
            console.log(error, 'error');
        });
}

const getDataPokeDetails = async (id) =>{
    await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => {
        const data = res.data;
        setPokeDetails(data)
        setPokeAbility(data)
    }).catch(function (error) {
        // handle error
        console.log(error, 'error');
    });
}

const getDataPokeImages = async (id) =>{
    await axios.get(`https://pokeapi.co/api/v2/pokemon-form/${id}`)
    .then(res => {
        const data = res.data.sprites.front_default;
        setPokeImage(data)
    }).catch(function (error) {
        // handle error
        console.log(error, 'error');
    });
}

const activatOpenAndClose = (id) => {
    getDataPokedexId(id)
    getDataPokeDetails(id)
    getDataPokeImages(id)
    setOpenAndClose(!openAndClose)
}

let data = []
pokeData.map(res => res.name)
    .forEach((value, index) => data.push({name: value, id: index}))

    return (
        <>
            {openAndClose 
            ?
                <PokeDetails
                    pokeId={pokeId}
                    pokeDetails={pokeDetails}
                    pokeAbility={pokeAbility}
                    pokeImage={pokeImage}
                />
            : 
                <AllPoke data={data} activatOpenAndClose={activatOpenAndClose}/>
            }
        </>
    )
}

export default Home