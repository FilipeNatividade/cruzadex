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
  padding: 25px 0;
  width: 99vw;
  @media only screen and (min-width: 601px) {
    background-color: transparent;
    margin: 0;
    max-width: 450px;
    width: 80vw;
  }
`;

export const FirstDiv = styled.div`
  background-color: #fff;
  min-height: 150px;
  max-width: 420px;
  width: 80%;
`;

export const ContainerButtonsRightHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 95%;
`;

export const ContainerButtonQRcode = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

export const ButtonStore = styled.button`
  background-color: transparent;
  border: none;
  margin: 0 auto;
`;

export const ImgButtonStore = styled.img`
  margin: 0 auto 5px;
  min-width: 100px;
  max-width: 195px;
  width: 30vw;
`;

export const QrCode = styled.img`
  height: 30vw;
  min-height: 75px;
  max-height: 125px;
`;
