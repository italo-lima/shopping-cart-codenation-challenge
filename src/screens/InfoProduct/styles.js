import styled from "styled-components"

export const Container = styled.div`
  padding-bottom: 2rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  figure {
    width: 100%;
  }

  img {
    width: 100%;
  }

  @media only screen and (min-width: 1280px){
    width: 1280px;
    flex-direction: row;
    padding: 1rem 1rem 2rem 1rem;

    figure {
      width: 50%;
    }
  }
`;

export const ProductContent = styled.div`
  width: 100%;
  padding: 0 1.2rem;

  @media only screen and (min-width: 1280px){
    width: 50%;
  }
`;

export const TitleProduct = styled.h3`
  text-align: left !important;
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 1rem;
  margin-bottom: .5rem;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;

  @media only screen and (min-width: 1280px){
    font-size: 1.5rem;
  }
`;

export const PricingProduct = styled.div`

  span {
    font-size: 1.2rem;
  }

  &>span:nth-child(2){
    font-size: 1rem;
    margin-bottom: .5rem;
    font-weight: 600;
    margin-left: 0.5rem;
    color: #a7a7a7;
}

  @media only screen and (min-width: 1280px){
    span {
    font-size: 1.2rem;
    }
  }
`;

export const SizeProduct = styled.div`
  margin-bottom: 30px;

  &>p{
    color: #a7a7a7;
    font-size: 1rem;
    margin: 0.7rem 0;
  }

  button{
    position: relative;
    font-weight: 600;
    padding: .8rem 1rem;
    border: .1rem solid #dfdfdf;
    margin-right: .8rem;
    background: transparent;
    outline: none;
    border-radius: .5rem;
  }

  @media only screen and (min-width: 1280px){
    margin-bottom: 0px;
    &>p{
      font-size: 1.2rem;
    }

    button{
      cursor: pointer;
    }
  }
`;

export const ProductAction = styled.div`
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 0.8rem 1rem;
    width: 100%;
    z-index: 10;

  button {
    background-color: #212529;
    border-radius: .5rem;
    border: none;
    box-shadow: 0 0.2rem 2rem 0 rgba(0,0,0,.5);
    color: #fff;
    display: inline-block;
    line-height: 1;
    outline: none;
    cursor: pointer;
    padding: 0.8rem;
    position: relative;
    text-align: center;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    width: 100%;

    canvas {
      border-radius: inherit;
      height: 100%;
      left: 0px;
      position: absolute;
      top: 0px;
      width: 100%;
    }
  }

  @media only screen and (min-width: 1280px){
    position: relative;
    z-index: 0;
    padding: 1rem 0;
    width: auto;

    button{
      width: 50%;
    }
  }
`;