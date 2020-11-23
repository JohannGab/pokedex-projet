import styled from 'styled-components';

export const StyledHome = styled.div`
    display: flex;
    justify-content: center;
`

export const Container = styled.div`
    width: 50%;
    border: solid 1px grey;
    border-radius: 0.3rem;
    margin: 0.5rem;
    padding: 0.2rem 1rem;
    display: flex;
    justify-content: space-between;
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