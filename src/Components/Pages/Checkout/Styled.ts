import styled from "styled-components";

export const CheckoutContainer = styled.div`
    display: flex;
    gap: 3rem;
    
    h1{
        font-size: 1.125rem;
        font-family: "Baloo 2", sans-serif;
        color: ${props => props.theme['base-subtitle']};
    }
`;

export const CompleteOrder = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const DeliveryAdress = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    width: 40rem;
    background: ${props => props.theme['base-card']};
    padding: 2.5rem;
    border-radius: 6px;
`;

export const DeliveryAdressTitle = styled.div`
    display: flex;
    gap: 0.25rem;
    span{
        color: ${props => props.theme['yellow-dark']};
    }
`;

export const DeliveryAdressTitleRight = styled.div`
display: flex;
flex-direction: column;
gap: 0.2rem;
    h3{
        color: ${props => props.theme['base-subtitle']};
        font-size: 1rem;
        font-weight: 100;
    }
    p{
        color: ${props => props.theme['base-text']};
        font-size: 0.875;
        font-weight: 100;
    }
`;

export const DeliveryAdressInputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    div{
        display: flex;
        gap: 0.75rem;
    }
`;

export const PaymentMethod = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    width: 40rem;
    background: ${props => props.theme['base-card']};
    padding: 2.5rem;
    border-radius: 6px;
`;

export const PaymentMethodTop = styled.div`
    display: flex;
    gap: 0.25rem;

    span{
        color: ${props => props.theme['purple']};
    }
    h3{
        color: ${props => props.theme['base-subtitle']};
        font-size: 1rem;
        font-weight: 100;
    }
    p{
        color: ${props => props.theme['base-text']};
        font-size: 0.875;
        font-weight: 100;
    }

`;

export const PaymentMethodTitle = styled.div``;

export const PaymentMethodButtons = styled.nav`
    display: flex;
    gap: 0.75rem;

    button{
        display: flex;
        align-items: center;
        gap: 0.3rem;

        padding: 1rem;
        border-radius: 6px;
        background: ${props => props.theme['base-button']};
        border: none;
        cursor: pointer;
        width: 11.125rem;

        p{
        color: ${props => props.theme['base-text']};
        text-transform: uppercase;
        font-size: 0.75rem;
        }
        span{
            color: ${props => props.theme['purple']};
        }
        &:hover{
            background: ${props => props.theme['base-hover']};
        }
        &:active{
            background: ${props => props.theme['purple-light']};
            border: 1px solid ${props => props.theme['purple']};
            padding: 0.937rem;
        }

    }
`;

export const SelectedCoffees = styled.div`
    button{
        width: 24rem;
        background: ${props => props.theme['yellow']};
        color: ${props => props.theme['white']};
        text-transform: uppercase;

        border-radius: 6px;
        padding: 0.5rem 0.75rem;
        height: 2.87rem;
        border: none;

        font-size: 0.875rem;
        font-weight: bold;
        cursor: pointer;

        &:hover{
            background: ${props => props.theme['yellow-dark']};
        }
    }
`;

export const SelectedCoffeesContainer = styled.div`
display: flex;
flex-direction: column;
gap: 1.5rem;
    padding: 2.25rem;
    background: ${props => props.theme['base-card']};
    border-top-right-radius: 2.5rem;
    border-bottom-left-radius: 2.5rem;
    width: 28rem;
`;

export const SelectedCoffeesDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    p{
        font-size: 0.875rem;
        color: ${props => props.theme['base-text']};
    }
    span{
        font-size: 1rem;
        color: ${props => props.theme['base-text']};
    }
`;

export const TotalItens = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Delivery = styled.div`
     display: flex;
     justify-content: space-between;
`;

export const TotalMoney = styled.div`
    display: flex;
    justify-content: space-between;
    h3{
        font-size: 1.25;
        font-weight: bold;
        color: ${props => props.theme['base-subtitle']};
    }
    span{
        font-size: 1.25;
        font-weight: bold;
        color: ${props => props.theme['base-subtitle']};
    }
`;

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