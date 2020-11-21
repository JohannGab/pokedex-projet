import React from 'react'
import Title from '../components/title'
import {
    StyledDetails,
    Container,
    ContainerImg,
    ImagePoke,
    ContainerDetails,
    Name,
    Type,
    HeightAndWeight,
    Capacity
} from './pokeDetails.style'

const PokeDetails = () => {
    return (
        <StyledDetails>
            <Title 
                titleName= 'POKEDEX DÉTAILS'
                ColorLine= 'white'
                ColorTitle = 'black'
            />
            <Container>
                <ContainerImg>
                    <ImagePoke
                        src='https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png' 
                        alt='poke'
                    />
                </ContainerImg>
                <ContainerDetails>
                    <Name>Nom: testNane</Name>
                    <Type>Type: testType</Type>
                    <HeightAndWeight>Height : 20</HeightAndWeight>
                    <HeightAndWeight>Weight : 10</HeightAndWeight>
                    <Capacity>test1</Capacity>
                    <Capacity>test2</Capacity>
                    <Capacity>test3</Capacity>
                </ContainerDetails>
            </Container>
        </StyledDetails>
    )
}

export default PokeDetails