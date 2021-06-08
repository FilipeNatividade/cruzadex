import {
    Container,
    InternalSecondContainer
  } from "./style";
  
  const Benefits = () => {
    return (
        <Container>
        <InternalSecondContainer>
          <img src="./images/knowledge.svg" alt="knowledge" />
          <p>
            FONTE DE
            <br /> <span>CONHECIMENTO</span>
          </p>
        </InternalSecondContainer>
        <InternalSecondContainer>
          <img src="./images/reasoning.svg" alt="reasoning" />
          <p>
            ACELERA O <br /> <span>RACIOCÍNIO</span>
          </p>
        </InternalSecondContainer>
        <InternalSecondContainer>
          <img src="./images/memory.svg" alt="memory" />
          <p>
            EXERCITA A<br /> <span>MEMÓRIA</span>
          </p>
        </InternalSecondContainer>
        <InternalSecondContainer>
          <img src="./images/vocabulary.svg" alt="vocabulary" />
          <p>
            AMPLIA O<br /> <span>VOCABULÁRIO</span>
          </p>
        </InternalSecondContainer>
      </Container>
    );
  };
  export default Benefits;
  