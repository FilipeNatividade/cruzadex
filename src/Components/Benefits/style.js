import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: #000;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 35px 0;
  width: 98.5vw;
`;

export const InternalSecondContainer = styled.div`
  align-items: center;
  color: #fff;
  display: flex;
  font-size: 18px;
  font-weight: bold;
  flex-direction: column;
  justify-content: space-around;
  margin: 25px;
  width: 150px;
  p {
    text-align: center;
  }
  span {
    color: #ffff00;
  }
`;
