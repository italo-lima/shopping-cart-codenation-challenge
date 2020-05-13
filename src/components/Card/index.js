import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"

import {Card, ImageProduct,Price, Badge} from "./styles"

export default function CardProduct({element}){
  const [selected, setSelected] = useState({})

  useEffect(() => {
    setSelected(element)
  }, [element])

  return(
    <Card>
      {selected.name && 
        <Link to={{pathname:`/produto/${element.slug}`, state: element}} >
          <ImageProduct>
          {element.on_sale && <Badge> -{element.discount_percentage}</Badge>}
            <img 
              src={element.image ? 
                element.image :
                "https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível" 
              }
              title={element.name} 
              />
          </ImageProduct>
          <h3>{element.name}</h3>
          <Price sale={element.on_sale}>
            <span>{element.regular_price}</span>
            {element.on_sale && <span>{element.actual_price}</span>}
          </Price>
        </Link>}
    </Card>
  )
}