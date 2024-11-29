import { CarContainer, CarItemQuantity, HeaderContainer, LocationAndCar, LocationContainer } from "./Styled"

import logo from '../../assets/Logo.svg'
import {MapPin, ShoppingCart} from 'phosphor-react'
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { AdressContext } from "../Contexts/AdressContext"
import { CartContext } from "../Contexts/CartContext"

export function Header() {
    const {cart} = useContext(CartContext)
    const {cidade, uf} = useContext(AdressContext)

    return (
        <HeaderContainer>
           <NavLink to='/'><img src={logo} alt="Logo do site" /></NavLink> 
            <LocationAndCar>
                {cidade.length < 1 || uf.length < 1 ? '' : 
                    <LocationContainer>
                        <span><MapPin size={22} weight="fill"/></span> 
                        <p>{cidade}, {uf}</p>
                    </LocationContainer>
                }
                <CarContainer>
                    {cart.length > 0 ? 
                    <NavLink to='checkout'>
                    <span><ShoppingCart size={22} weight="fill"/></span>
                    {cart.length > 0 ? 
                        <CarItemQuantity><p>{cart.length}</p></CarItemQuantity> :
                        ''
                    }
                    </NavLink> 
                    :
                    <NavLink to='/'><span><ShoppingCart size={22} weight="fill"/></span></NavLink>
                    }

                </CarContainer>
            </LocationAndCar>
        </HeaderContainer>
    )
}