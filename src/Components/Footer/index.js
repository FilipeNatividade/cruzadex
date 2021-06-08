import {
  Container,
  ButtonStore,
  ButtonsRightHeader,
  InputsContainer,
  DownloadsButtonFooter,
} from "./style";

const Footer = () => {
  return (
    <Container>
      <h2>Preencha o formulário a seguir para entrar em contato conosco</h2>
      <InputsContainer>
        <input placeholder="Nome" />
        <input placeholder="Email" />
        <input placeholder="Whatsapp" />
        <input placeholder="Assunto" />
      </InputsContainer>
      <textarea placeholder="Qual a sua dúvida?" />
      <DownloadsButtonFooter>DOWNLOAD</DownloadsButtonFooter>
      <h4>Baixe e teste grátis</h4>
      <ButtonsRightHeader>
        <ButtonStore>
          <img src="./images/google_play.svg" alt="google_play" />
        </ButtonStore>
        <ButtonStore>
          <img src="./images/apple_store.svg" alt="apple_store" />
        </ButtonStore>
      </ButtonsRightHeader>
      <small>Powered by Mercadata Digital - 2021</small>
    </Container>
  );
};
export default Footer;
