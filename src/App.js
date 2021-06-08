import { useState } from "react";
import Benefits from "./Components/Benefits";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";

import {
  Container,
  MenuMobile,
  ButtonMobileMenu,
  MenuContainer,
  SocialNetwork,
  ImgLogo,
  Menu,
} from "./style";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Container>
      <MenuMobile>
        <ButtonMobileMenu onClick={handleMenu}>
          <img src="./images/menu_mobile.svg" alt="menu_mobile" />
        </ButtonMobileMenu>
        {showMenu && (
          <MenuContainer>
            <a href="">Vantagens</a>
            <a href="#">Sobre</a>
            <a href="#">Contato</a>
            <a href="#">Público</a>
            <a href="">Contato</a>
          </MenuContainer>
        )}
        <SocialNetwork>
          <a href="#">
            <img src="./images/face_icon.svg" alt="facebook" />
          </a>
          <a href="#">
            <img src="./images/insta_icon.svg" alt="instagram" />
          </a>
        </SocialNetwork>
        <img src="./images/logo.svg" alt="logo" />
      </MenuMobile>

      <Menu>
        <SocialNetwork></SocialNetwork>
        <MenuContainer>
          <SocialNetwork></SocialNetwork>
          <ImgLogo src="./images/logo.svg" alt="logo" />
          <a href="#">
            <img src="./images/face_icon.svg" alt="facebook" />
          </a>
          <a href="#">
            <img src="./images/insta_icon.svg" alt="instagram" />
          </a>
          <a href="#">Vantagens</a>
          <a href="#">Sobre</a>
          <a href="#">Contato</a>
          <a href="#">Público</a>
          <a href="#">Contato</a>
        </MenuContainer>
      </Menu>
      <Header />
      <Benefits />
      <Main />
      <Footer />
    </Container>
  );
};

export default App;
