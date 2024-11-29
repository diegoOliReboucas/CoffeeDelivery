import { createContext, ReactNode, useState } from "react"

interface CartContextProviderProps {
    children: ReactNode
}

export interface CartItem {
    imgContext: string;
    titleimgContext: string;
    priceimgContext: number;
    quantityContext: number;
}

export interface CartContextProps {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    setPayment: (payment: string) => void;
    payment: string,
    setCart: (cart: CartItem[]) => void
    deleteCartItem: (itemToDelete: string) => void,
    increaseCartItem: (itemToIncrease: CartItem) => void,
    decreaseCartItem: (itemToDecrease: CartItem) => void,
  }
  //Aqui é feita a tipagem para ser utilizada no createContext

export const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({children}: CartContextProviderProps) {
    const [payment, setPayment] = useState<string>("");
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (item: CartItem) => {
    setCart((state) => [...state, item]);

};

function deleteCartItem(itemToDelete: string) {
    const itensWithoutDeleted = cart.filter(item => {
        return item.titleimgContext != itemToDelete
    })
    setCart(itensWithoutDeleted)
}

function increaseCartItem(itemToIncrease: CartItem) {
    setCart(cart.map(cartItem => 
        cartItem.titleimgContext === itemToIncrease.titleimgContext 
        ? { ...cartItem, quantityContext: cartItem.quantityContext + 1 } 
        : cartItem
    ));
}

function decreaseCartItem(itemToDecrease: CartItem) {
    if(itemToDecrease.quantityContext > 1) {
        setCart(cart.map(cartItem => 
            cartItem.titleimgContext === itemToDecrease.titleimgContext 
            ? { ...cartItem, quantityContext: cartItem.quantityContext - 1 } 
            : cartItem
        ));
    }
}

    return (
        <CartContext.Provider value={{cart, addToCart, setPayment, payment, deleteCartItem, increaseCartItem, decreaseCartItem, setCart}}>
            {children}
        </CartContext.Provider>
    )
}