import styled from "styled-components";

export const HomeContainer = styled.div`

`;

export const HomeTopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 34rem;
    align-items: center;
`;

export const TitleAndDesc = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
`;

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 36.75rem;

    h1{
        font-size: 3rem;
        color: ${props => props.theme['base-title']};
        font-family: 'Baloo 2', sans-serif;
        line-height: 130%;
    }
    p{
        font-size: 1.25rem;
        color: ${props => props.theme['base-subtitle']};
    }
`;

export const Desc = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    max-width: 35.43rem;
`;

export const CoffeeListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;

    h1{
        color: ${props => props.theme['base-subtitle']};
        font-size: 2rem;
        font-family: "Baloo 2", sans-serif;
    }
`;

export const CoffeeListItens = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 22rem);
`;

