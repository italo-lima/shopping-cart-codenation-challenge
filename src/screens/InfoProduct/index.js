import React, {useState} from "react"

import {Container, ProductContent, TitleProduct, PricingProduct, SizeProduct,ProductAction} from "./styles"

import { useDispatch } from "react-redux"

export default function InfoProduct({ location: { state }}){

  const [sizeProductSelected, setSizeProductSelected] = useState(null)
  const [display, setDisplay] = useState("none")

  const dispatch = useDispatch();

  const handleAddProduct = (product) => {
    if(sizeProductSelected == null){
      setDisplay('block')
      return;
    }
    
    dispatch({
      type: 'ADD_TO_CART',
      product,
      sizeProductSelected
    })
  }

  return (
    <>
    <Container>
      <figure>
        <img 
        src={state.image ?
            state.image :
            "https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível" 
        }
        alt={state.name} 
      />
      </figure>
      <ProductContent>
        <TitleProduct>{state.name}</TitleProduct>
        <PricingProduct>
          <span>{state.actual_price}</span>
          <span>em até {state.installments}</span>
        </PricingProduct>
        <SizeProduct>
          <p>Escolha o tamanho</p>
          {<p style={{display: `${display}`, color: "#cf3838", fontSize: ".9rem", marginBottom: "1.5rem"}}>É necessário escolher um tamanho</p>}
          {state.sizes.map(({available, size}) => {
            if(available) {
              return <button 
                        key={size} 
                        value={size} type='button' 
                        onClick={(e) => setSizeProductSelected(e.target.value)}
                        style={sizeProductSelected === size ? { backgroundColor: "#000", color: "#fff"} : {}}
                      >
                        {size}
                      </button>
                } 
          })}
        </SizeProduct>
        {}
        <ProductAction>
          <button type='button' onClick={() => handleAddProduct(state)}>
            Adicionar à Sacola
            <canvas height="0" width="0"></canvas>
          </button>
        </ProductAction>
      </ProductContent>
    </Container>
    </>
  )
}