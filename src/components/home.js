import React from 'react';
import {StyledHome, Container, Title} from './home.style'

const Home = ({ pokeData }) => {

    return (
        <>
            {pokeData.results.map(res => 
                <StyledHome>
                    <Container>
                        <Title>{res.name}</Title>
                    </Container>
                </StyledHome> 
            )}
        </>
    )
}

export default Home