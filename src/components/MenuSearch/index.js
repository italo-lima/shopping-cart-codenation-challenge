import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  SearchForm,
  CountItems,
  ButtonIcon,
  DrawerContent,
  Search,
  ListProducts,
  ListProductItem,
  HeaderMenu,
} from "./styles";
import { ArrowToLeft } from "@styled-icons/boxicons-regular";
import { convertToSlug } from "../../utils/convertSlug";
import { filterProducts } from "../../utils/filterProducts";
import Menu from "../Menu";

export default function MenuSearch({ style, toggle, handleSetToggleSearch }) {
  const [searchProducts, setSearchProducts] = useState([]);

  function listProducts(searchProduct, time = 2000) {
    clearTimeout(
      time,
      (time = setTimeout(async () => {
        const products = await filterProducts(searchProduct);
        setSearchProducts(products);
      }, 2000))
    );
  }

  const CardProduct = (product) => {
    return (
      <Link
        style={{ color: "inherit" }}
        key={product.code_color}
        to={{
          pathname: `/produto/${convertToSlug(product.name)}`,
          state: product,
        }}
      >
        <ListProductItem>
          <div>
            <figure>
              <img
                src={
                  product.image
                    ? product.image
                    : process.env.REACT_APP_URL_PRODUCT_NOT_FOUND
                }
                alt={product.name}
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
    );
  };

  return (
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
            <input
              placeholder="Digite sua busca..."
              onChange={(e) => listProducts(e.target.value)}
            />
          </SearchForm>
          <CountItems>{searchProducts.length} itens</CountItems>
          <ListProducts>
            {searchProducts.length ? (
              searchProducts.map((product) => CardProduct(product))
            ) : (
              <h1
                style={{
                  textAlign: "center",
                  color: "#a7a7a7",
                  fontSize: "1rem",
                }}
              >
                Nenhum Produto Encontrado
              </h1>
            )}
          </ListProducts>
        </Search>
      </DrawerContent>
    </Menu>
  );
}
