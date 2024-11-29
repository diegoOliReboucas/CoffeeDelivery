import { DataAndImage, DeliveryAdress, DeliveryAdressDatas, DeliveryData, DeliveryPayment, DeliveryPaymentDatas, DeliveryTime, DeliveryTimeDatas, SucessContainer, SucessTitle } from "./Styled";
import MotoBoy from '../../../assets/Illustration.svg'
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useContext } from "react";
import { AdressContext } from "../../Contexts/AdressContext";
import { CartContext } from "../../Contexts/CartContext";

export function Sucess() {
    const {payment} = useContext(CartContext)
    const {rua, numero, bairro, cidade, uf} = useContext(AdressContext)
    
    return (
        <SucessContainer>
            <SucessTitle>
                <h1>Uhu! Pedido confirmado</h1>
                <h2>Agora é só aguardar que logo o café chegará até você</h2>
            </SucessTitle>
            <DataAndImage>
                <DeliveryData>
                    <DeliveryAdress>
                        <span><MapPin size={16} weight="fill"/></span>
                        <DeliveryAdressDatas>
                            <p>Entrega em <span>Rua {rua}, {numero}</span> </p>
                            <p>{bairro} - {cidade}, {uf}</p>
                        </DeliveryAdressDatas>
                    </DeliveryAdress>

                    <DeliveryTime>
                        <span><Timer size={16} weight="fill"/></span>
                        <DeliveryTimeDatas>
                            <p>Previsão de entrega</p>
                            <p><span>20 min - 30 min</span></p>
                        </DeliveryTimeDatas>
                    </DeliveryTime>

                    <DeliveryPayment>
                        <span><CurrencyDollar size={16} weight="fill"/></span>
                        <DeliveryPaymentDatas>
                            <p>Pagamento na entrega</p>
                            <p><span>{payment}</span></p>
                        </DeliveryPaymentDatas>
                    </DeliveryPayment>
                </DeliveryData>
                <img src={MotoBoy} alt="MotoBoy" />
            </DataAndImage>
        </SucessContainer>
    )
}