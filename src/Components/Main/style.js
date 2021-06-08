import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  font-size: 18px;
  justify-content: space-around;
  padding: 35px 0;
  width: 100%;
  h2 {
    font-size: 36px;
    text-align: center;
    width: 90%;
  }
  p {
    text-align: left;
    width: 80%;
  }
  h3 {
    font-size: 24px;
    font-weight: 2;
    text-align: center;
    width: 100%;
  }
`;

export const DownThirdContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 35px 0;
  text-align: center;
  /* width: 100%; */
`;

export const DownlaodThirdContainer = styled.div`
  align-items: center;
  display: flex;
  font-size: 18px;
  flex-direction: column;
  height: 397px;
  justify-content: space-between;
  margin: 25px auto;
  width: 310px;
  h4 {
    width: 90%;
  }
  p {
    margin: 0 auto;
    text-align: center;
    width: 80%;
  }
`;

export const DownloadsButton = styled.button`
  border: none;
  background-color: #000;
  color: #ffff00;
  height: 45px;
  margin-top: 20px;
  width: 145px;
`;