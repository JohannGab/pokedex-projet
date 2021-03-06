import styled from 'styled-components';

export const StyledDetails = styled.div`  
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
`
export const ContainerImg = styled.div`
    border: solid 1px grey;
    display: flex;
    align-items: center;
    margin-right: 4rem;
    width: 25rem;
    justify-content: center;
    @media screen and (max-width: 640px) {
        width: 10rem;
        margin-right: 1rem;
    }
`

export const ImagePoke = styled.img`
    width: 100%;
` 

export const ContainerDetails = styled.div`
`

export const Name = styled.p``

export const Type = styled.p`
`

export const HeightAndWeight = styled.p`
`

export const Capacity = styled.p`
    text-align: center;
    border: solid 1px grey;
    border-radius: 0.3rem;
    padding: 1rem 15rem;
    @media screen and (max-width: 640px) {
        padding: 0.5rem;
    }
`
export const RetourHome = styled.div`
    margin-top: 5rem;
    text-align: center;
`
export const LinkRetourHome = styled.a`
    border: solid 1px black;
    border-radius: 0.2rem;
    background-color: grey;
    color: white;
    padding: 1rem 2rem;
    text-decoration: none;
    &:hover {
        background-color: yellow;
        color: grey;
    }
`