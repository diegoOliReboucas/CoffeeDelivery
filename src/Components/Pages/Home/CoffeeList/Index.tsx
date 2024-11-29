import { useContext, useState } from "react";
import { CartContainer, CoffeeItemContainer, CoffeeTypeContainer, CoffeeTypeItem, ItemPlusInformation, Price, QuantityContainer } from "./Styled";
import { ShoppingCart } from "phosphor-react";
import { CartContext } from "../../../Contexts/CartContext";

interface CoffeeListProps {
    img: string,
    title: string,
    price: number,
    type: string[],
    desc: string,
}

export function CoffeeList({img, title, price, type, desc}: CoffeeListProps) {
    const {  addToCart, cart, setCart } = useContext(CartContext);
//Aqui importamos as variaveis do cartContext, sao as variaveis globais e serao utilizadas nesse componente, por exemplo.
    const [quantity, setQuantity] = useState(1)

    function handleDecreaseQuantity() {
       if(quantity > 1){
        setQuantity(quantity - 1)
       } 
    }
    function handleIncreaseQuantity() {
        setQuantity(quantity + 1)
    }

    const handleAddToCart = (title: string) => {
        const itemAlreadyExist = cart.find(
            (cartItem) => cartItem.titleimgContext === title
        )
        if(itemAlreadyExist){
            const itensWithoutDeleted = cart.filter(item => {
                return item.titleimgContext != title
            })
            setCart(itensWithoutDeleted)

            addToCart({
                ...itemAlreadyExist,
                quantityContext: itemAlreadyExist.quantityContext + quantity
            })
        }else {
            addToCart({
                imgContext: img,
                titleimgContext: title,
                priceimgContext: price,
                quantityContext: quantity
            });
        }
            }

            

    return (
        <CoffeeItemContainer>
            <img src={img} alt="Coffee Image" />
            <CoffeeTypeContainer>
                {type.map((item: string, index: number) => (
                    <CoffeeTypeItem key={index}>
                        <p>{item}</p>
                    </CoffeeTypeItem>
                    ))}
            </CoffeeTypeContainer>
            <h2>{title}</h2>
            <p>{desc}</p>
            <ItemPlusInformation>
                <Price>
                    <span>R$</span><h3>{price.toFixed(2)}</h3>
                </Price>
                <QuantityContainer>
                    <span onClick={handleDecreaseQuantity}>-</span>
                    <p>{quantity}</p>
                    <span  onClick={handleIncreaseQuantity}>+</span>
                </QuantityContainer>
                <CartContainer onClick={() => handleAddToCart(title)}>
                    <ShoppingCart size={22} weight="fill"/>
                </CartContainer>
            </ItemPlusInformation>
        </CoffeeItemContainer>
    )
}