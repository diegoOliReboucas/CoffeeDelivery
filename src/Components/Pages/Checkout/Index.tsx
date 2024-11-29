import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { CheckoutContainer, CompleteOrder, Delivery, DeliveryAdress, DeliveryAdressInputs, DeliveryAdressTitle, DeliveryAdressTitleRight, PaymentMethod, PaymentMethodButtons, PaymentMethodTitle, PaymentMethodTop, SelectedCoffees, SelectedCoffeesContainer, SelectedCoffeesDetails, TotalItens, TotalMoney } from "./Styled";
import { Input } from "../../Input/Index";
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AdressContext } from "../../Contexts/AdressContext";
import { CartContext } from "../../Contexts/CartContext";
import { CheckoutSelectedItens } from "./CheckoutSelectedItens/Index";

export function Checkout() {
    const { cart, setPayment, payment, setCart} = useContext(CartContext);
    const {setBairro, setCidade, setNumero, setRua, setUf, rua, numero, bairro, cidade, uf} = useContext(AdressContext)
    const deliveryCost = 3.50
    const [totalItensCost, setTotalItensCost] = useState(0)
    const [disabledButton, setDisabledButton] = useState(true)

    const [cep, setCep] = useState('')
    const [complemento, setComplemento] = useState('')

     useEffect(() => {
        const total = cart.reduce((acc, item) => {
            return acc + item.priceimgContext * item.quantityContext;
        }, 0)
        setTotalItensCost(total)
     },[cart])

     useEffect(() => {
        if(rua.length < 1 || numero == 0 || bairro.length < 1 || uf.length < 1 || cidade.length < 1 || payment.length < 1){
            setDisabledButton(true)
        }else {

            setDisabledButton(false)
        }
     }, [rua, numero, bairro, cidade, uf, payment])

    function setDeliveryPayment(item: string) {
    setPayment(item)
    }

    function handleClearInputs() {
        setCart([])
    }
   

    return (
        <CheckoutContainer>
            <CompleteOrder>
                <h1>Complete seu pedido</h1>
                <DeliveryAdress>
                    <DeliveryAdressTitle>
                       <span><MapPinLine size={22}/></span>
                        <DeliveryAdressTitleRight>
                            <h3>Endereço de entrega</h3>
                            <p>Informe o endereço onde deseja receber o seu pedido</p>
                        </DeliveryAdressTitleRight>
                    </DeliveryAdressTitle>

                    <DeliveryAdressInputs>
                       <Input type="text" placeholder="CEP" width="12.5rem" value={cep} onChange={(e) => setCep(e.target.value)}/>
                       <Input type="text" placeholder="Rua" width="35rem" value={rua} onChange={(e) => setRua(e.target.value)}/>
                       <div>
                            <Input type="number" placeholder="Número" width="12.5rem" value={numero} onChange={(e) => setNumero(+e.target.value)}/>
                            <Input type="text" placeholder="Complemento" width="21.75rem" value={complemento} onChange={(e) => setComplemento(e.target.value)}/>
                       </div>
                        <div>
                            <Input type="text" placeholder="Bairro"  width="12.5rem" value={bairro} onChange={(e) => setBairro(e.target.value)}/>
                            <Input type="text" placeholder="Cidade"  width="17.25rem" value={cidade} onChange={(e) => setCidade(e.target.value)}/>
                            <Input type="text" placeholder="UF"      width="3.75rem" value={uf} onChange={(e) => setUf(e.target.value)}/>
                        </div>
                    </DeliveryAdressInputs>
                </DeliveryAdress>

                <PaymentMethod>
                    <PaymentMethodTop>
                        <span><CurrencyDollar size={22}/></span>
                        <PaymentMethodTitle>
                        <h3>Pagamento</h3>
                        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </PaymentMethodTitle>
                    </PaymentMethodTop>

                    <PaymentMethodButtons>
                        <button onClick={() => setDeliveryPayment("Cartão de credito")}>
                            <span><CreditCard/></span>
                            <p>Cartão de credito</p>
                        </button>
                        <button onClick={() => setDeliveryPayment("Cartão de debito")}>
                            <span><Bank/></span>
                            <p>Cartão de debito</p>
                        </button>
                        <button onClick={() => setDeliveryPayment("Dinheiro")}>
                            <span><Money/></span>
                            <p>Dinheiro</p>
                        </button>
                    </PaymentMethodButtons>
                </PaymentMethod>
            </CompleteOrder>
            
            <SelectedCoffees>
                <h1>Cafés selecionados</h1>
                <SelectedCoffeesContainer>    
                    <CheckoutSelectedItens />
                    <SelectedCoffeesDetails>
                        <TotalItens>
                            <p>Total de itens</p>
                            <span>R$ {totalItensCost.toFixed(2)}</span>
                        </TotalItens>
                        <Delivery>
                            <p>Entrega</p>
                            <span>R$ {deliveryCost.toFixed(2)}</span>
                        </Delivery>
                        <TotalMoney>
                            <h3>Total</h3>
                            <span>R$ {(totalItensCost + deliveryCost).toFixed(2)}</span>
                        </TotalMoney>
                        <NavLink to='/sucess'><button onClick={handleClearInputs} disabled={disabledButton}>Confirmar Pedido</button></NavLink> 
                    </SelectedCoffeesDetails>
                </SelectedCoffeesContainer>
            </SelectedCoffees>
        </CheckoutContainer>
    )
}