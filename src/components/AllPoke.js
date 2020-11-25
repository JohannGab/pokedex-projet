import React, { useEffect, useState } from 'react'
import Title from './title';
import {
    ContainerInput,
    Input,
    StyledHome,
    Container,
    TitlePoke, 
    ImagePoke,
    IndexPoke,
 } from './home.style'

const AllPoke = ({ data, activatOpenAndClose }) => {
    const [filterPoke, setFilterPoke] = useState(data)
    useEffect(() => {
        setFilterPoke(data)
    }, [data])
    const defaultImg = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'
    const searchPoke = ({ listName = [], value = '' }) => listName
    .filter(name => name.name.toLowerCase().indexOf(value.toLowerCase()) !== -1)

    const handleSearch = (value) => {
        try {
            const res = searchPoke({
                listName: data,
                value
            })
            if (value) {
                setFilterPoke(res)
            } 
            else {
                return setFilterPoke(data)
            }
            } catch(err) {
                return null
            }
        }

    return (
        <div>
            <Title 
                titleName= 'POKEDEX'
                ColorLine= 'white'
                ColorTitle = 'black'
            />
            <ContainerInput>
                <Input onChange={(e) => handleSearch(e.target.value)}></Input>
            </ContainerInput>
            {filterPoke.map(res => 
                <StyledHome  key={res.id}>
                    <Container onClick={() => activatOpenAndClose(res.id +1)}>
                        <ImagePoke 
                            src= {res.id +1
                                ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${res.id +1}.png` 
                                : defaultImg}
                            alt='poke'
                        />
                        <TitlePoke>{res.name}</TitlePoke>
                            <IndexPoke>id : {res.id +1}</IndexPoke>
                    </Container>
                </StyledHome> 
            )}
        </div>
    )
}

export default AllPoke