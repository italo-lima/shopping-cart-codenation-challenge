import React from "react"
import { useSelector } from "react-redux"

import {ArrowToLeft} from "@styled-icons/boxicons-regular"
import {AddCircleOutline, RemoveCircleOutline} from "@styled-icons/material"

import {
    ButtonIcon, 
    HeaderMenu, 
    ListProductItem, 
    ListProducts, 
    RemoveButton, 
    ProductInfo, 
    ActionsProduct,
    Prices,
    Container,
    CardProducts,
    Footer
} from "./styles"
import Menu from "../Menu"

export default function Cart({handleSetToggleCart}){

    const productsCart = useSelector(state => state.cart);

    const CardProduct = product => {
        console.log(product.code_color+product.sizeProductSelected)
        return <ListProductItem key={product.code_color+product.sizeProductSelected}>
                    <div>
                        <figure>
                            <img 
                            src={product.image ?
                                product.image :
                                "https://d3l7rqep7l31az.cloudfront.net/images/products/20002605_615_catalog_1.jpg?1460136912"
                            }
                            alt="Produto"
                        />
                        </figure>
                        <ProductInfo>
                            <p>{product.name}</p>
                            <span>Tam: {product.sizeProductSelected}</span>
                            <ActionsProduct>
                                <button type="button">
                                    <RemoveCircleOutline size={24} color="#000"/>
                                </button>
                                <h3>{product.amount}</h3>
                                <button type="button">
                                    <AddCircleOutline size={24} color="#000"/>
                                </button>
                            </ActionsProduct>
                        </ProductInfo>
                        <Prices>
                            <div>{product.actual_price}</div>
                            <div>{product.installments}</div>
                        </Prices>
                    </div>
                    <div>
                        <RemoveButton type="submit">Remover Produto</RemoveButton>
                    </div>
                </ListProductItem>
    }

    return(
        <Menu>
            <HeaderMenu>
                <ButtonIcon onClick={handleSetToggleCart}>
                    <ArrowToLeft size={26} />
                </ButtonIcon>
                <div>{`Salcola (${productsCart.length})`}</div>
            </HeaderMenu>
            <Container>
                <CardProducts>
                    <ListProducts>
                        {productsCart.length ? 
                            productsCart.map(product => CardProduct(product)) :
                            <h1 style={{textAlign: "center", color: "#a7a7a7", fontSize: "1rem", paddingTop: '1rem'}}>
                                Nenhum Produto no Carrinho
                            </h1>  
                        }
                    </ListProducts>
                    <Footer>
                        <div>Subtotal - R$ 149,90 </div>
                    </Footer>
                </CardProducts>
            </Container>
        </Menu>
    )
}