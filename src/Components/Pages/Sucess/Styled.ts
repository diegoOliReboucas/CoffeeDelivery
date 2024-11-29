import styled from "styled-components";

export const SucessContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

export const SucessTitle = styled.div`
    display: flex;
    flex-direction: column;
    h1{
        color: ${props => props.theme['yellow-dark']};
        font-size: 2rem;
        font-family: 'Baloo 2', sans-serif;
    }
    h2{
        color: ${props => props.theme['base-subtitle']};
        font-size: 1.25rem;
        font-weight: 100;
    }

`;

export const DataAndImage = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const DeliveryData = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    width: 32.87rem;
    padding: 2.5rem;
    border-radius: 6px;
    border-top-right-radius: 2.5rem;
    border-bottom-left-radius: 2.5rem;
    border: 1px solid #DBAC2C;

    & > div{
        display: flex;
        align-items: center;
    }
    p{
        font-size: 1rem;
        color: ${props => props.theme['base-text']};
    }
    `;

export const DeliveryAdress = styled.div`
    display: flex;
    gap: 0.75rem;
    
    & > span{
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${props => props.theme['white']};
        background: ${props => props.theme['purple']};
        border-radius: 1000px;
        width: 2rem;
        height: 2rem;
    }
`;

export const DeliveryAdressDatas = styled.div`
    span{
        font-weight: bold;
    }
`;

export const DeliveryTime = styled.div`
        display: flex;
        gap: 0.75rem;

        & > span{
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${props => props.theme['white']};
        background: ${props => props.theme['yellow']};
        border-radius: 1000px;
        width: 2rem;
        height: 2rem;
    }
`;


export const DeliveryTimeDatas = styled.div`
    span{
        font-weight: bold;
    }
`;

export const DeliveryPayment = styled.div`
        display: flex;
        gap: 0.75rem;

        & > span{
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${props => props.theme['white']};
        background: ${props => props.theme['yellow-dark']};
        border-radius: 1000px;
        width: 2rem;
        height: 2rem;
    }
`;

export const DeliveryPaymentDatas = styled.div`
        span{
        font-weight: bold;
    }
`;