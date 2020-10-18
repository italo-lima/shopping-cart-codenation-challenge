import styled from "styled-components";

export const Card = styled.div`
  width: 50%;
  padding: 1rem 0.5rem;
  display: flex;
  justify-content: center;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #212529;
    width: 100%;
  }

  h3 {
    font-size: 0.8rem;
    font-weight: 600;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  }

  @media only screen and (min-width: 1280px) {
    width: 25%;
  }
`;

export const ImageProduct = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: #fff;
  position: relative;

  img {
    width: 100%;
  }
`;

export const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;

  span:nth-child(1) {
    font-size: ${(props) => props.sale && "0.8rem"};
    color: ${(props) => props.sale && "#a7a7a7"};
    text-decoration: ${(props) => props.sale && "line-through"};
    margin-right: 1rem;
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #212529;
  color: #fff;
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 400;
  padding: 0.2rem;
`;
