import styled from "styled-components";

export const SelectedCoffeesItem = styled.div`
    display: flex;
    justify-content: space-between;

    padding-bottom: 2rem;
    border-bottom: 1px solid ${props => props.theme['base-button']};

    span{
        font-size: 1rem;
        color: ${props => props.theme['text-base']};
        font-weight: bold;
    }
`;

export const SelectedCoffeesItemDetails = styled.div`
    display: flex;
    gap: 1rem;

    img{
        width: 4rem;
    }
    p{
        font-size: 1rem;
        color: ${props => props.theme['text-subtitle']};
    }
`;

export const TitleAndButtons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const SelectedCoffeesItemButtons = styled.div`
    display: flex;
    gap: 0.5rem;
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

export const DeleteContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0.5rem ;
    border-radius: 6px;
    gap: 0.25rem;
    background: ${props => props.theme['base-button']};
    cursor: pointer;
    span{
        color: ${props => props.theme['purple']};
    }

    &:hover{
        background: ${props => props.theme['base-hover']};
    }
`;