import styled from "styled-components";

export const CoffeeItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${props => props.theme['base-card']};
    max-width: 16rem;
    height: 19.37rem;
    border-radius: 8px;
    border-top-right-radius: 2.5rem;
    border-bottom-left-radius: 2.5rem;
    padding: 0 1.5rem ;
    gap: 10px;

    img{
        position: absolute;
        margin-top: -20px;
    }
    h2{
        color: ${props => props.theme['base-subtitle']};
        font-size: 1.25rem;
        font-family: "Baloo 2", sans-serif;
    }
    p{
        color: ${props => props.theme['base-label']};
        font-size: 0.875rem;
        max-height: 2rem;
        text-align: center;
    }
`;

export const CoffeeTypeItem = styled.div`
    align-items: center;
    background: ${props => props.theme['yellow-light']};
    border-radius: 100px;
    padding: .25rem .5rem;

    p{
        color: ${props => props.theme['yellow-dark']};
        font-size: 0.625rem;
        line-height: 130%;
        font-weight: bold;
        text-transform: uppercase;
    }
`;

export const CoffeeTypeContainer = styled.div`
    margin-top: 90px;
    display: flex;
    gap: 10px;
`;

export const ItemPlusInformation = styled.div`
    display: flex;
    gap: 1.5rem;

    position: relative;
    top: 35px;
`;

export const Price = styled.div`
    display: flex;
    align-items: center;
    gap: 0.15rem;
    color: ${props => props.theme['base-text']};

    span{
        font-size: 0.875rem;
    }
    h3{
        font-size: 1.5rem;
        font-weight: bold;
        font-family: "Baloo 2", sans-serif;
    }
`;

export const QuantityContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-radius: 6px;

    background: ${props => props.theme['base-button']};
    padding: 0.5rem;

    span{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 0.875rem;
        height: 0.875rem;
        color: ${props => props.theme['purple']};
        font-weight: bold;
        cursor: pointer;

        &:hover{
            color: ${props => props.theme['purple-dark']};
        }
    }
    p{
        color: ${props => props.theme['base-title']};
        font-size: 1rem;
    }
`;

export const CartContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme['purple-dark']};
    padding: 0.5rem;
    border-radius: 6px;
    color: ${props => props.theme['white']};
    cursor: pointer;
    margin-left: -15px;
`;