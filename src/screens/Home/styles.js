import styled from "styled-components"

export const Products = styled.section`
  padding: 1rem 0;
`;

export const Container = styled.div`
  padding: 0 0.5rem;
  margin: 0 auto;
  width: 100%;

  &>div:nth-child(1){
    color: #a7a7a7;
    font-size: 1rem;
    font-weight: 400;
    display: inline-block;
    padding-top: .7rem;
    padding-bottom: .7rem;
    margin: 0 auto;
}

@media only screen and (min-width: 1280px){
    width: 1280px;
    
    &>div:nth-child(1){
      -webkit-transform: translate3d(calc(-50% - 30px),0,0);
      transform: translate3d(calc(-50% - 30px),0,0);
    }
  }
`;

export const GridCatalog = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
