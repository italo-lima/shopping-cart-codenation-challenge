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
  padding-right: 2rem;
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

export const ListProducts = styled.div`
display: flex;
flex-direction: column;
padding-bottom: 1rem;
`;

export const Container = styled.div`
    padding-top: 4rem;
    width: 100%;
    background: #f9f9f9;
    overflow-y: auto;
    height: 100vh;
`;

export const CardProducts = styled.div`
    width: 100%;
    padding-bottom: 5rem;
`;

export const ListProductItem = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 1rem;
    padding-bottom: 1rem;
    box-shadow: 0 1px 0 0 rgba(0,0,0,.08);
    width: 100%;

    >div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: .5rem;

    figure {
        width: 25%;

        img {
        width: 100%;
        }
    }
    }
`;

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;   
    width: 50%; 
    padding: 0 0 0 .5rem;
    
    >p{
    font-size: .8rem;
    margin: 0 0 .6rem 0;
    font-weight: 600;
    }

    >span {
        font-size: .7rem;
        color: #a7a7a7;
    }
`;

export const ActionsProduct = styled.div`
    display flex;
    margin: .8rem 0;
    align-items: center;

    >button{
        padding: 0 1rem;
        background: transparent;
        border: none;
    }

    >button:nth-child(1){
        padding-left: 0;
    }
`;

export const Prices = styled.div`
display: flex;
flex-direction: column;
text-align: right;
width: 25%;

    div:nth-child(1){
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: .6rem;
    }

    div:nth-child(2) {
        font-size: .8rem;
        color: #a7a7a7;
    }
`;

export const RemoveButton = styled.button`
font-size: .8rem;
color: #cf3838;
-webkit-tap-highlight-color: transparent;
background: transparent;
border: none;
box-shadow: none;
cursor: pointer;
outline: none;
position: relative;
`;

export const Footer = styled.div`
    backface-visibility: hidden;
    background: #212529;
    bottom: 0;
    box-shadow: 0 -0.2rem 2rem 0 rgba(0,0,0,.08);
    color: #fff;
    display: inline-block;
    padding: 0.5rem 1rem;
    position: fixed;
    width: 100%;

    div {
        font-size: 0.9rem;
        font-weight: 600;
        display: inline-block;
        padding-top: .4rem;
        padding-bottom: .4rem;
         margin: 0 auto; 
    }
`;