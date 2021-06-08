import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 99vw;
  @media only screen and (min-width: 601px) {
    background-image: url("./images/header_img_original.svg");
    background-position: left;
    background-repeat: no-repeat;
    background-size: cover;
    align-items: flex-end;
    height: 80vh;
    justify-content: flex-end;
    padding-top: 50px;
  }
  @media only screen and (min-width: 999px) {
    height: 50vh;
  }
`;

export const LeftHeader = styled.div`
  background-image: url("./images/header_img_original.svg");
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  height: 50vh;
  width: 100%;
  @media only screen and (min-width: 601px) {
    display: none;
  }
`;
export const RightHeader = styled.div`
  align-items: center;
  background-color: #b5b5b5;
  display: flex;
  font-weight: bold;
  flex-direction: column;
  font-size: 20px;
  font-weight: 200;
  margin: 0 auto;
  width: 99vw;
  @media only screen and (min-width: 601px) {
    background-color: transparent;
    margin: 0;
    width: 50vw;
  }
`;

export const FirstDiv = styled.div`
  background-color: #fff;
  height: 150px;
  margin-top: 30px;
  max-width: 420px;
  width: 80%;
`;

export const SecondaryDiv = styled.div`
  background-color: #fff;
  height: 100px;
  margin: 10px auto;
  width: 100px;
`;

export const ButtonsRightHeader = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto 30px;
  width: 95%;
`;

export const ButtonStore = styled.button`
  background-color: transparent;
  border: none;
  margin: 10px auto;
  img {
    width: 150px;
  }
  @media only screen and (min-width: 601px) {
    img {
      width: 100px;
    }
  }
  @media only screen and (min-width: 999px) {
    img {
      width: 150px;
    }
  }
`;
