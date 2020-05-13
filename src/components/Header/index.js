import React,{ useState} from 'react'
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

import {Header, Container, HeaderIcons, ButtonIcon} from "./styles"
import {SearchAlt, Basket} from "@styled-icons/boxicons-regular"
import logo from "../../assets/logo-amaro.png"
import MenuSearch from "../../components/MenuSearch"
import MenuCart from "../../components/MenuCart"
import {countProducts} from "../../utils/countProducts"

export default function HeaderApp() {

  const [toggleSearch, setToogleSearch] = useState(false)
  const [toggleCart, setToogleCart] = useState(false)

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
      {toggleSearch && <MenuSearch handleSetToggleSearch={handleSetToggleSearch}/> }
      {toggleCart && <MenuCart handleSetToggleCart={handleSetToggleCart}/> }
    </Header>
  )
}