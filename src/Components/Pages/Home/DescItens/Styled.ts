import styled from "styled-components";

export const DescItemContainer = styled.div`
    display: flex;
    gap: 0.75rem;
    align-items: center;

    p{
        font-size: .9rem;
        color: ${props => props.theme['base-text']};
    }
`;

const BACKGROUND_COLOR = {
    yellowDark: 'yellow-dark',
    yellow: 'yellow',
    gray: 'base-text',
    purple: 'purple',
}

interface BackgroundProps {
    background: keyof typeof BACKGROUND_COLOR;
}

export const ImgContainer = styled.div<BackgroundProps>`
    display: flex;
    height: 2rem;
    width: 2rem;
    align-items: center;
    justify-content: center;
    border-radius: 1000px;
    background: ${(props) => props.theme[BACKGROUND_COLOR[props.background]]};

    span{
        color: ${props => props.theme['white']};
        margin-top: 5px;
    }
`;