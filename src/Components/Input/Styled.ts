import styled from "styled-components";

export const InputContainer = styled.div`
    input{
        background: ${props => props.theme['base-input']};
        height: 2.625rem;
        border: none;
        padding: 0.75rem;
        border-radius: 4px;

        &:focus{
            border: 1px solid ${props => props.theme['purple']};;
        }
    }
`;