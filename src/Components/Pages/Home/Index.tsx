import { CoffeeListContainer, CoffeeListItens, Desc, HomeContainer, HomeTopContainer, Title, TitleAndDesc } from "./Styled";
import coffeeImg from '../../../assets/CoffeeImg.svg'
import { DescItens } from "./DescItens/Index";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { CoffeeList } from "./CoffeeList/Index";

import CoffeeItem1 from '../../../assets/CoffeeItem1.svg'
import CoffeeItemAmericano from '../../../assets/CoffeeItemAmericano.svg'
import CoffeeItemArabe from '../../../assets/CoffeeItemArabe.svg'
import CoffeeItemCapuccino from '../../../assets/CoffeeItemCapuccino.svg'
import CoffeeItemChocolate from '../../../assets/CoffeeItemChocolate.svg'
import CoffeeItemCremoso from '../../../assets/CoffeeItemCremoso.svg'
import CoffeeItemCubano from '../../../assets/CoffeeItemCubano.svg'
import CoffeeItemGelado from '../../../assets/CoffeeItemGelado.svg'
import CoffeeItemHavaiano from '../../../assets/CoffeeItemHavaiano.svg'
import CoffeeItemIrlandes from '../../../assets/CoffeeItemIrlandes.svg'
import CoffeeItemLatte from '../../../assets/CoffeeItemLatte.svg'
import CoffeeItemLeite from '../../../assets/CoffeeItemLeite.svg'
import CoffeeItemMachiato from '../../../assets/CoffeeItemMachiato.svg'
import CoffeeItemMocaccino from '../../../assets/CoffeeItemMocaccino.svg'

interface CoffeeListProps {
    img: string,
    title: string,
    type: string[],
    desc: string,
    price: number,
}

export function Home() {

    const coffeeItens: CoffeeListProps[] = [
        {   img: CoffeeItem1,
            title: 'Expresso Tradicional',
            type: ['TRADICIONAL'],
            desc: 'O tradicional café feito com água quente e grãos moídos',
            price: 9.90,
            
        },
        {   img: CoffeeItemAmericano,
            title: 'Expresso Americano',
            type: ['TRADICIONAL'],
            desc: 'Expresso diluído, menos intenso que o tradicional',
            price: 9.90,
            
        },
        {   img: CoffeeItemCremoso,
            title: 'Expresso Cremoso',
            type: ['TRADICIONAL'],
            desc: 'Café expresso tradicional com espuma cremosa',
            price: 9.90,
            
        },
        {   img: CoffeeItemGelado,
            title: 'Expresso Gelado',
            type: ['TRADICIONAL', 'GELADO'],
            desc: 'Bebida preparada com café expresso e cubos de gelo',
            price: 9.90,
            
        },
        {   img: CoffeeItemLeite,
            title: 'Café com Leite',
            type: ['TRADICIONAL', 'Com Leite'],
            desc: 'Meio a meio de expresso tradicional com leite vaporizado',
            price: 9.90,
            
        },
        {   img: CoffeeItemLatte,
            title: 'Latte',
            type: ['TRADICIONAL', 'Com Leite'],
            desc: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
            price: 9.90,
            
        },
        {   img: CoffeeItemCapuccino,
            title: 'Capuccino',
            type: ['TRADICIONAL', 'Com Leite'],
            desc: 'Bebida com canela feita de doses iguais de café, leite e espuma',
            price: 9.90,
            
        },
        {   img: CoffeeItemMachiato,
            title: 'Macchiato',
            type: ['TRADICIONAL', 'Com Leite'],
            desc: 'Café expresso misturado com um pouco de leite quente e espuma',
            price: 9.90,
            
        },
        {   img: CoffeeItemMocaccino,
            title: 'Mocaccino',
            type: ['TRADICIONAL', 'Com Leite'],
            desc: 'Café expresso com calda de chocolate, pouco leite e espuma',
            price: 9.90,
            
        },
        {   img: CoffeeItemChocolate,
            title: 'Chocolate Quente',
            type: ['Especial', 'Com Leite'],
            desc: 'Bebida feita com chocolate dissolvido no leite quente e café',
            price: 9.90,
            
        },
        {   img: CoffeeItemCubano,
            title: 'Cubano',
            type: ['Especial', 'alcoólico', 'gelado'],
            desc: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
            price: 9.90,
            
        },
        {   img: CoffeeItemHavaiano,
            title: 'Havaiano',
            type: ['Especial'],
            desc: 'Bebida adocicada preparada com café e leite de coco',
            price: 9.90,
            
        },
        {   img: CoffeeItemArabe,
            title: 'Árabe',
            type: ['Especial'],
            desc: 'Bebida preparada com grãos de café árabe e especiarias',
            price: 9.90,
            
        },
        {   img: CoffeeItemIrlandes,
            title: 'Irlandês',
            type: ['Especial', 'alcoólico'],
            desc: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
            price: 9.90,
            
        },
    ]

    return (
            <HomeContainer>
            <HomeTopContainer>
                <TitleAndDesc>
                    <Title>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    </Title>
                    <Desc>
                        <DescItens Icon={<ShoppingCart weight="fill"/>} backgroundColorProp="yellowDark" descText="Compra simples e segura"/>
                        <DescItens Icon={<Package weight="fill"/>} backgroundColorProp="gray" descText="Embalagem mantém o café intacto"/>
                        <DescItens Icon={<Timer weight="fill"/>} backgroundColorProp="yellow" descText="Entrega rápida e rastreada"/>
                        <DescItens Icon={<Coffee weight="fill"/>} backgroundColorProp="purple" descText="O café chega fresquinho até você"/>
                    </Desc>
                </TitleAndDesc>
                <img src={coffeeImg} alt="Coffee Image" />
            </HomeTopContainer>
            <CoffeeListContainer>
                <h1>Nossos Cafés</h1>  
                <CoffeeListItens>
                    {coffeeItens.map((item, index) => (
                        <CoffeeList key={index}
                           img={item.img}
                           title={item.title}
                           type={item.type}
                           price={item.price}
                           desc={item.desc}
                        />
                    ))}
                </CoffeeListItens>
  
            </CoffeeListContainer>
        </HomeContainer>
    )
}