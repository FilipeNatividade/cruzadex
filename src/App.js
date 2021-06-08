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
            <a href="#vantagens">Vantagens</a>
            <a href="#publico">Sobre</a>
            <a href="#publico">Público</a>
            <a href="#contato">Contato</a>
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
          <a href="#vantagens">Vantagens</a>
          <a href="#publico">Sobre</a>
          <a href="#publico">Público</a>
          <a href="#contato">Contato</a>
        </MenuContainer>
      </Menu>
      <Header />
      <a name="vantagens">
        <Benefits />
      </a>
      <a name="publico">
        <Main />
      </a>
      <a name="contato">
        <Footer />
      </a>
    </Container>
  );
};

export default App;
