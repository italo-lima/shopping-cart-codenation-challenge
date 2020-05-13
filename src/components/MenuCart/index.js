import React from "react"
import { useSelector, useDispatch } from "react-redux"

import {ArrowToLeft} from "@styled-icons/boxicons-regular"
import {AddCircleOutline, RemoveCircleOutline} from "@styled-icons/material"
import {countProducts} from "../../utils/countProducts"
import {formatPrice} from "../../utils/formatPrice"

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
import * as CartAction from "../../store/modules/cart/actions"

export default function Cart({toggle, handleSetToggleCart}){
    const dispacth = useDispatch()
    const productsCart = useSelector(state => state.cart);
    const sizeProducts = countProducts(productsCart)
    const total = useSelector(state => formatPrice(
        state.cart.reduce((total, product) => {
        const [,price] = product.actual_price.split("R$")

        return total + (parseFloat(price) * product.amount)
    }, 0))
    )

    function increment(product){
        dispacth(CartAction.updateAmount(product.code_color, product.sizeProductSelected, product.amount+1))
    }

    function decrement(product){
        dispacth(CartAction.updateAmount(product.code_color, product.sizeProductSelected, product.amount-1))
    }

    const CardProduct = product => {
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
                                <button type="submit" onClick={() => decrement(product)}>
                                    <RemoveCircleOutline size={24} color="#000"/>
                                </button>
                                <h3>{product.amount}</h3>
                                <button type="submit" onClick={() => increment(product)}>
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
                        <RemoveButton onClick={() => dispacth(
                                                    CartAction.removeFromCart(product.code_color, product.sizeProductSelected))
                                                }
                                      type="submit" >
                            Remover Produto
                        </RemoveButton>
                    </div>
                </ListProductItem>
    }

    return(
        <Menu toggle={toggle}>
            <HeaderMenu>
                <ButtonIcon onClick={handleSetToggleCart}>
                    <ArrowToLeft size={26} />
                </ButtonIcon>
                <div>{`Salcola (${sizeProducts})`}</div>
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
                    <div>{`Subtotal - R$ ${total}`}</div>
                    </Footer>
                </CardProducts>
            </Container>
        </Menu>
    )
}