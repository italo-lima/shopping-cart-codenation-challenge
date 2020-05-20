import React,{ useState, useEffect, useCallback} from 'react'
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { useSpring } from "react-spring";

import {Header, Container, HeaderIcons, ButtonIcon} from "./styles"
import {SearchAlt, Basket} from "@styled-icons/boxicons-regular"
import logo from "../../assets/logo-amaro.png"
import MenuSearch from "../../components/MenuSearch"
import MenuCart from "../../components/MenuCart"
import {countProducts} from "../../utils/countProducts"
import { useDispatch } from "react-redux"
import * as CartActions from "../../store/modules/cart/actions"

export default function HeaderApp() {

  const [toggleSearch, setToogleSearch] = useState(false)
  const [toggleCart, setToogleCart] = useState(false)
  const dispatch = useDispatch()

  const animationSearch = useSpring({
    opacity: toggleSearch ? 1 : 0,
    transform: toggleSearch ? `translateX(0)` : `translateX(100%)`
  });

  const animationCart = useSpring({
    transform: toggleCart ? `translateX(0)` : `translateX(100%)`,
    opacity: toggleCart ? 1 : 0
  });

  const loadCart = useCallback(() => {
    const productsCart = JSON.parse(localStorage.getItem("@cartProducts"))

    if(productsCart){
      productsCart.forEach(product => {
        dispatch(CartActions.productsStorage(product))
      });
    }
  })

  useEffect(() => {
    loadCart()
  }, [])

  function handleSetToggleSearch(){
    setToogleSearch(!toggleSearch)
  }

  function handleSetToggleCart(){
    setToogleCart(!toggleCart)
  }

  const products = useSelector(state => state.cart)
  const sizeProducts = countProducts(products)

  return(
    <Header>
      <Container>
        <div>
          <Link to="/">
            <img src={logo} />
          </Link>
          <HeaderIcons>
            <ButtonIcon onClick={handleSetToggleSearch}>
              <SearchAlt size={26} />
            </ButtonIcon>
            <ButtonIcon onClick={handleSetToggleCart}>
            <Basket size={26} />
              <sup><span>{sizeProducts}</span></sup>
            </ButtonIcon>
          </HeaderIcons>
        </div>
      </Container>
      <MenuSearch style={animationSearch} toggle={toggleSearch} handleSetToggleSearch={handleSetToggleSearch}/> 
      <MenuCart style={animationCart} toggle={toggleCart} handleSetToggleCart={handleSetToggleCart}/>
    </Header>
  )
}