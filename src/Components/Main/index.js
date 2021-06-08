import {
  Container,
  DownThirdContainer,
  DownloadsButton,
  DownlaodThirdContainer,
} from "./style";

const Main = () => {
  return (
    <Container>
      <h2>O que é o CRUZADEX?</h2>
      <p>
        Um novo conceito em palavras cruzadas, o CRUZADEX é um game app com
        criptomoedas integradas (chamadas “Duron”) e sistema de ranking
        (competição) entre os jogadores. Um dos jogos mais queridos do mundo, de
        uma forma que você nunca viu!
      </p>
      <h3>Para quem é o CRUZADEX?</h3>
      <DownThirdContainer>
        <DownlaodThirdContainer>
          <img src="./images/young.svg" alt="young" />
          <h4>JOVEM</h4>
          <p>
            Já familiarizados com jogos diversos, podem desfrutar do CRUZADEX
            como passatempo educativo, para adquirir novos conhecimentos,
            inclusive ampliar o vocabulário.
          </p>
          <DownloadsButton>DOWNLOAD</DownloadsButton>
        </DownlaodThirdContainer>

        <DownlaodThirdContainer>
          <img src="./images/professionals.svg" alt="professionals" />
          <h4>PROFISSIONAIS</h4>
          <p>
            Excelente ferramenta para exercitar o raciocínio rápido, a memória e
            o vocabulário, o CRUZADEX pode auxiliar no desenvolvimento de skills
            essenciais para o mercado.
          </p>
          <DownloadsButton>DOWNLOAD</DownloadsButton>
        </DownlaodThirdContainer>

        <DownlaodThirdContainer>
          <img src="./images/senior.svg" alt="senior" />
          <h4>IDOSOS</h4>
          <p>
            Acima de um passatempo prazeroso, o CRUZADEX auxilia na saúde mental
            e na qualidade de vida deste público, inclusive como ferramenta para
            combater o mal de Alzheimer.
          </p>
          <DownloadsButton>DOWNLOAD</DownloadsButton>
        </DownlaodThirdContainer>
      </DownThirdContainer>
    </Container>
  );
};
export default Main;
