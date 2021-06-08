import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 35px 0;
  width: 100%;
  h2 {
    text-align: center;
    width: 80%;
  }
  textarea {
    height: 150px;
    max-width: 850px;
    width: 79%;
  }
  h4 {
    font-size: 18px;
    font-weight: 200;
    margin: 50px auto;
  }
  small {
    background-color: transparent;
    color: #fff;
    font-size: 12px;
    margin-top: 30px;
  }
`;

export const ButtonStore = styled.button`
  background-color: transparent;
  border: none;
  margin: 10px auto;
  @media only screen and (min-width: 769px) {
    margin: 0 auto;
  }
  img {
    width: 150px;
  }
`;

export const ButtonsRightHeader = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto 30px;
  width: 100%;
  @media only screen and (min-width: 769px) {
    margin: 0 auto;
  }
`;


export const InputsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin: 25px auto;
  max-width: 850px;
  width: 80%;
  input {
    height: 45px;
    margin: 5px auto;
    width: 100%;
  }
  @media only screen and (min-width: 500px) {
    input {
    width: 47%;
  }
  }
`;

export const DownloadsButtonFooter = styled.button`
  border: none;
  background-color: #ffff00;
  color: #000;
  height: 45px;
  margin-top: 20px;
  width: 145px;
`;
