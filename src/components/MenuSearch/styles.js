import styled from "styled-components"

export const HeaderMenu = styled.header`
backface-visibility: hidden;
background-color: #fff;
height: 4rem;
position: fixed;
display: flex;
width: inherit;
padding: 1rem;
z-index: 10;
box-shadow: 0 0 1rem 0 rgba(0,0,0,.02);

>button {
  padding-right: 0.7rem;
}

> div {
    display: flex;
    align-items: center;
    font-size: 1rem;
    font-weight: 600;

    }
}
`;

export const ButtonIcon = styled.button`
-webkit-tap-highlight-color: transparent;
background: transparent;
border-radius: 100%;
border: none;
box-shadow: none;
cursor: pointer;
font-size: 2rem;
line-height: 0;
outline: none;
padding: 0;
position: relative;
`;

export const ModalOpacity = styled.div`
opacity: .5;
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: 10;
background-color: #000;
`;

export const DrawerContent = styled.div`
padding-top: 4rem;
width: 100%;
background: #f9f9f9;
height: 100vh;
overflow-y: auto;
`;

export const Search = styled.div`
padding-bottom: 4rem;
width: 100%;
`;

export const SearchForm = styled.div`
background: #f6f6f6;
box-shadow: 0 0.2rem 2rem 0 rgba(0,0,0,.1);
color: #fff;
display: inline-block;
padding: .7rem 1.1rem;
width: 100%;

input {
  background: #fff;
  border-radius: 4px;
  border: none;
  box-shadow: 0 0 1px 0 rgba(0,0,0,.2);
  color: #212529;
  font-size: 1rem;
  font-weight: 600;
  height: auto;
  outline: none;
  padding: .7rem;
  width: 100%;
}
`;

export const CountItems = styled.div`
padding: 1rem;
color: #a7a7a7;
font-size: 1rem;
font-weight: 400;
`;

export const ListProducts = styled.div`
padding: .2rem 1rem;
`;

export const ListProductItem = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
padding-top: 1rem;
padding-bottom: 1rem;
box-shadow: 0 1px 0 0 rgba(0,0,0,.08);

div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  figure {
    width: 25%;

    img {
      width: 100%;
    }
  }

  p {
    font-size: .7rem;
    width: 50%;
    padding-left: 1rem;
    padding-right: 1rem;
    font-weight: 600;
  }

  div {
    display: flex;
    flex-direction: column;
    text-align: right;

    h3 {
      font-size: .9rem;
      font-weight: 600;
      margin-bottom: .5rem;
    }

    h4 {
      font-size: .8rem;
      color: #a7a7a7;
    }
  }
}
`;