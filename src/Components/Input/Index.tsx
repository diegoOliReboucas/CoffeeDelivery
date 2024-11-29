import { InputContainer } from "./Styled"

interface InputProps {
    type: string,
    placeholder: string,
    width?: string,
    value: string | number,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({type, placeholder, width, value, onChange} : InputProps) {
    return (
        <InputContainer>
            <input type={type} placeholder={placeholder} style={{width: width}} value={value} onChange={onChange}/>
        </InputContainer>
    )
}