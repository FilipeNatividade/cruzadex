import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 98vw;
`;

export const MenuMobile = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 98vw;
  position: absolute;
  z-index: 1;

  img {
    height: 100px;
  }
  @media only screen and (min-width: 601px) {
    display: none;
  }
`;

export const ButtonMobileMenu = styled.button`
  background-color: transparent;
  border: none;
  height: 20px;

  img {
    height: 40px;
    position: relative;
  }
`;

export const MenuContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 40px 0 0 10px;
  padding: 15px;
  position: absolute;
  a {
    margin: 5px auto;
    text-decoration: none;
    color: #000;
    font-weight: bold;
  }
  @media only screen and (min-width: 601px) {
    background-color: transparent;
    flex-direction: row;
    margin: 0;
    position: relative;
    padding: 0;
    a {
      font-size: 0.8rem;
    }
  }
`;

export const ImgLogo = styled.img`
  width: 50px;
  margin-top: -5px;
`;

export const SocialNetwork = styled.div`
  display: flex;
  margin-left: -65px;
  width: 100px;
  a {
    margin: 10px 5px;
  }
  img {
    height: 15px;
  }
  @media only screen and (min-width: 350px) and (max-width: 450px) {
    margin-left: -50%;
  }
  @media only screen and (min-width: 451px) {
    margin-left: -60%;
  }
`;

export const Menu = styled.nav`
  display: none;

  @media only screen and (min-width: 601px) {
    align-items: flex-start;
    display: flex;
    width: 98vw;
    justify-content: flex-end;
    padding: 5px 5px 0 0;
    position: absolute;
  }
`;
