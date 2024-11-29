import { useContext } from "react";
import { CartContext, CartItem } from "../../../Contexts/CartContext";
import { DeleteContainer, QuantityContainer, SelectedCoffeesItem, SelectedCoffeesItemButtons, SelectedCoffeesItemDetails, TitleAndButtons } from "../Styled";
import { Trash } from "phosphor-react";
import { useNavigate } from "react-router-dom";

export function CheckoutSelectedItens() {
    const { cart, decreaseCartItem, increaseCartItem, deleteCartItem} = useContext(CartContext);
    const navigate = useNavigate()

    function handleDeleteItem(itemToDelete: string) {
        deleteCartItem(itemToDelete)
    }

    function handleIncreaseItem(itemToIncrease: CartItem) {
        increaseCartItem(itemToIncrease)
    }

    function handleDecreaseItem(itemToDecrease: CartItem) {
        decreaseCartItem(itemToDecrease)
        if(cart.length < 1){
            navigate('/')
        }
    }

    return (
        <div>
            {cart.map((item, index) => (
        <SelectedCoffeesItem key={index}>
        <SelectedCoffeesItemDetails key={index}>
            <img src={item.imgContext} alt={`Café ${item.titleimgContext}`} />
            <TitleAndButtons>
                <p>{item.titleimgContext}</p>
                <SelectedCoffeesItemButtons>
                    <QuantityContainer>
                        <span onClick={() => handleDecreaseItem(item)}>-</span>
                        <p>{item.quantityContext}</p>
                        <span onClick={() => handleIncreaseItem(item)}>+</span>
                    </QuantityContainer>
                    <DeleteContainer onClick={() => handleDeleteItem(item.titleimgContext)}>
                        <span><Trash size={16} /></span>
                        <p>Remover</p>
                    </DeleteContainer>
                </SelectedCoffeesItemButtons>
            </TitleAndButtons>
        </SelectedCoffeesItemDetails>

            <span>R$ {(item.priceimgContext * item.quantityContext).toFixed(2)}</span>
        </SelectedCoffeesItem>
    ))}
        </div>
    )
}