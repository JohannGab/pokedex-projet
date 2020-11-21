import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Title from './title';
import {StyledHome, Container, TitlePoke, ImagePoke, IndexPoke} from './home.style'

const Home = () => {
const [pokeData, setPokeData] = useState([])

useEffect(() => {
  getDataPokedex()
}, [])

const getDataPokedex = () => {
    axios.get(`https://pokeapi.co/api/v2/ability/?limit=20&offset=20`)
        .then(res => {
            const data = res.data.results;
            setPokeData(data)
        }).catch(function (error) {
            // handle error
            console.log(error, 'error');
        });
}

console.log(pokeData, 'base ')
let data = []
pokeData.map(res => res.name)
    .forEach((value, index) => data.push({name: value, id: index}))

console.log(data);

    return (
        <>
            <Title 
                titleName= 'POKEDEX'
                ColorLine= 'white'
                ColorTitle = 'black'
            />
            {data.map(res => 
                <StyledHome  key={res.id}>
                    <Container>
                        <ImagePoke 
                            src='https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png' 
                            alt=''
                        />
                        <TitlePoke>{res.name}</TitlePoke>
                            <IndexPoke>id : {res.id}</IndexPoke>
                    </Container>
                </StyledHome> 
            )}
        </>
    )
}

export default Home