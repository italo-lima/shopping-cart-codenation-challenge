import styled from "styled-components"

export const Header = styled.header`
  height: 3.5rem;
  background-color: #fff;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  box-shadow: 0 0 0.3rem rgba(0,0,0,0.05);
  z-index: 10;
`;

export const Container = styled.div`
  padding: 0 1rem;
  margin: 0 auto;
  height: 100%;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
  }

  img {
    height: 1.8rem;
  }

  @media only screen and (min-width:960px){
    width: 1280px;
  }
`;

export const HeaderIcons = styled.div`
  display: flex;
`;

export const ButtonIcon = styled.button`
  text-decoration: none;
  border: none;
  background-color: transparent;
  margin-right: 15px;
  transaction: opacity 0.2s;

  &:hover{
    opacity: 0.7;
  }

  & + & {
    margin-right: 0px;
  }

    sup {
      overflow: hidden;
      position: absolute;
      right: 0.5rem;
      top: 20px;
      height: 1.3rem;
      border-radius: 50%;
      width: 1.3rem;
      background: #cf3838;
      color: #fff;
      line-height: 1.3rem;
      text-align: center;
      padding: 0;
      font-size: 1rem;
      font-weight: 700;
      white-space: nowrap;
      z-index: 10;

      span {
        height: 1.5rem;
        margin: 0;
      }

      @media only screen and (min-width:960px){
        right: 7.5rem;
  }
    }

    
`;