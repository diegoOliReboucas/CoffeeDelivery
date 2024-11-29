import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 2rem 0;

    img{
        cursor: pointer;
    }
`

export const LocationAndCar = styled.header`
    display: flex;
    gap: 0.75rem;
`

export const LocationContainer = styled.header`
    display: flex;
    padding: 1rem;
    height: 2.18rem;
    background: ${props => props.theme['purple-light']};
    gap: .25rem;
    font-size: 0.875rem;
    align-items: center;
    border-radius: 6px;

    span{
        color: ${props => props.theme['purple']};
    }
    p{
        color: ${props => props.theme['purple-dark']};
    }
`

export const CarContainer = styled.header`
position: relative;
    display: flex;
    padding-top: .35rem;
    justify-content: center;
    width: 2.18rem;
    height: 2.18rem;
    background: ${props => props.theme['yellow-light']};
    border-radius: 6px;

    span{
        color: ${props => props.theme['yellow-dark']};
        margin-top: .25rem
    }
`

export const CarItemQuantity = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -0.6rem;
    right: -0.6rem;

    width: 1.25rem;
    height: 1.25rem;
    background: ${props => props.theme['yellow-dark']};
    border-radius: 1000px;

    p{
        font-size: 0.875rem;
        color: ${props => props.theme['white']};
    }
`;