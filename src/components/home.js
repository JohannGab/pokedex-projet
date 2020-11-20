import React from 'react';
import {StyledHome, Container, Title, ImagePoke} from './home.style'

const Home = ({ pokeData }) => {
    return (
        <>
            {pokeData.results.map(res => 
                <StyledHome>
                    <Container>
                        <ImagePoke 
                            url='https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png' 
                            alt=''
                        />
                        <Title>{res.name}</Title>
                    </Container>
                </StyledHome> 
            )}
        </>
    )
}

export default Home