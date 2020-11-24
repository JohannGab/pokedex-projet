import styled from 'styled-components';

export const ContainerInput = styled.div`
    text-align: center;
    margin: 0 0 2rem 0;
`

export const Input = styled.input`
    padding: 0.5rem 1rem;
    border: solid 2px grey;
    border-radius: 1rem;
    :focus {
        outline:none;
    }
`

export const StyledHome = styled.div`
    display: flex;
    justify-content: center;
`

export const Container = styled.div`
    width: 50%;
    border: solid 1px grey;
    border-radius: 0.3rem;
    margin: 0.5rem;
    padding-right: 1rem;
    display: flex;
    justify-content: space-between;
    background-color: yellowgreen;
    align-items: center;
    &:hover {
        background-color: grey;
        color: white;
    }
    @media screen and (max-width: 640px) {
        width: 100%;
        margin: 0.5rem 0.5rem;
        padding-right: 0.5rem;
    }
`

export const ImagePoke = styled.img`
    width: 15%;
    margin-right: 2rem;
    border: solid 1px grey;
`

export const TitlePoke = styled.p`
    margin-left: -20rem;
    @media screen and (max-width: 640px) {
        margin-left: -12rem;
    }
`

export const IndexPoke = styled.p`
`