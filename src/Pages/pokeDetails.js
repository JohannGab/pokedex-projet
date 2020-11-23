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
    Capacity,
    RetourHome,
    LinkRetourHome
} from './pokeDetails.style'


const PokeDetails = ({ pokeId, pokeDetails, pokeAbility, pokeImage }) => {
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
                        src={pokeImage} 
                        alt='poke'
                    />
                </ContainerImg>
                <ContainerDetails>
                    <Name>Nom: {pokeId.name}</Name>
                    <Type>Type: {pokeDetails.types.map(res => res.type.name).join(' ')}</Type>
                    <HeightAndWeight>Height : {pokeDetails.height}</HeightAndWeight>
                    <HeightAndWeight>Weight : {pokeDetails.weight}</HeightAndWeight>
                    {pokeAbility.abilities.map(res => 
                        <Capacity key={res.ability.name}>Capacité : {res.ability.name}</Capacity>)}
                </ContainerDetails>
            </Container>
            <RetourHome>
                <LinkRetourHome href="/">Retour page Home</LinkRetourHome>
            </RetourHome>
        </StyledDetails>
    )
}

export default PokeDetails