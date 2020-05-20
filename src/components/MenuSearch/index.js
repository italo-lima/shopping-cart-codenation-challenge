import React, {useState} from "react"
import {Link} from "react-router-dom"

import {
    SearchForm,
    CountItems, 
    ButtonIcon, 
    DrawerContent, 
    Search,
    ListProducts,
    ListProductItem,
    HeaderMenu
} from "./styles"
import {ArrowToLeft} from "@styled-icons/boxicons-regular"
import api from "../../services/api"
import {convertToSlug} from "../../utils/convertSlug"
import Menu from "../Menu"

export default function MenuSearch({style, toggle, handleSetToggleSearch}){

    const [searchProducts, setSearchProducts] = useState([])

    let time = null;
    function listProducts(search){
        clearTimeout(time)
        
        time = setTimeout(async () => {
            const {data} = await api.get('/catalog')
            const products = data.filter(product => product.name.toLowerCase().includes(search))
            setSearchProducts(products)
        }, 2000)
    }

    const CardProduct = product => {
        return <Link 
                    style={{color: "inherit"}}
                    key={product.code_color}   
                    to={{pathname:`/produto/${convertToSlug(product.name)}`, state: product}}
                >
                <ListProductItem>
                    <div>
                        <figure>
                            <img 
                            src={ product.image ?
                                product.image :
                                "https://d3l7rqep7l31az.cloudfront.net/images/products/20002605_615_catalog_1.jpg?1460136912"
                            }
                            alt="Produto"
                        />
                        </figure>
                        <p>{product.name}</p>
                        <div>
                            <h3>{product.actual_price}</h3>
                            <h4>{product.installments}</h4>
                        </div>
                    </div>
                </ListProductItem>
            </Link>
    }

    return(
        <Menu style={style} toggle={toggle}>
          <HeaderMenu>
            <ButtonIcon onClick={handleSetToggleSearch}>
                <ArrowToLeft size={26} />
            </ButtonIcon>
              <div>Buscar Produtos</div>
          </HeaderMenu>
          <DrawerContent>
            <Search>
              <SearchForm>
                <input placeholder="Digite sua busca..." onChange={(e) => listProducts(e.target.value)}/>
              </SearchForm>
              <CountItems>
                {searchProducts.length} itens
              </CountItems>
              <ListProducts>
                  {searchProducts.length ? 
                    searchProducts.map(product => CardProduct(product)) 
                    :
                    <h1 style={{textAlign: "center", color: "#a7a7a7", fontSize: "1rem"}}>
                        Nenhum Produto Encontrado
                    </h1>  
                }
              </ListProducts>
            </Search>
          </DrawerContent>
        </Menu>
    )
}