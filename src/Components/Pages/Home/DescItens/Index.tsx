import { DescItemContainer, ImgContainer } from "./Styled";

interface DescProps {
    descText: string;
    backgroundColorProp: 'yellowDark' | 'yellow' | 'gray' | 'purple';
    Icon: React.ReactNode
}

export function DescItens({descText, backgroundColorProp, Icon}: DescProps) {
    return (
        <DescItemContainer>
            <ImgContainer background={backgroundColorProp}>
            <span>{Icon}</span>
            </ImgContainer> 
            <p>{descText}</p>
        </DescItemContainer>
    )
}