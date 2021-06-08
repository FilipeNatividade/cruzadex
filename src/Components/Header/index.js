import {
  Container,
  LeftHeader,
  RightHeader,
  FirstDiv,
  ContainerButtonsRightHeader,
  ContainerButtonQRcode,
  ButtonStore,
  ImgButtonStore,
  QrCode,
} from "./style";

const Header = () => {
  return (
    <Container>
      <LeftHeader />
      <RightHeader>
        <FirstDiv></FirstDiv>
        <p>Baixe e teste grátis</p>
        <ContainerButtonsRightHeader>
          <ContainerButtonQRcode>
            <ButtonStore>
              <ImgButtonStore src="./images/google_play.svg" alt="google_play" />
            </ButtonStore>
            <QrCode src="/images/qrcode_mercadatadigital.png" />
          </ContainerButtonQRcode>
          <ContainerButtonQRcode>
            <ButtonStore>
              <ImgButtonStore src="./images/apple_store.svg" alt="apple_store" />
            </ButtonStore>
            <QrCode src="/images/qrcode_mercadatadigital.png" />
          </ContainerButtonQRcode>
        </ContainerButtonsRightHeader>
      </RightHeader>
    </Container>
  );
};
export default Header;
