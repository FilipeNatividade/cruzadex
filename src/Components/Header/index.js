import {
  Container,
  LeftHeader,
  RightHeader,
  FirstDiv,
  ButtonStore,
  ButtonsRightHeader,
  SecondaryDiv,
} from "./style";

const Header = () => {
  return (
    <Container>
      <LeftHeader />
      <RightHeader>
        <FirstDiv></FirstDiv>
        <p>Baixe e teste grátis</p>
        <ButtonsRightHeader>
          <ButtonStore>
            <img src="./images/google_play.svg" alt="google_play" />
            <SecondaryDiv></SecondaryDiv>
          </ButtonStore>
          <ButtonStore>
            <img src="./images/apple_store.svg" alt="apple_store" />
            <SecondaryDiv></SecondaryDiv>
          </ButtonStore>
        </ButtonsRightHeader>
      </RightHeader>
    </Container>
  );
};
export default Header;
