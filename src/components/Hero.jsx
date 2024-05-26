import styled from 'styled-components';

const Hero = () => {
  return (
    <Container id='home'>
      <HeroSection>
        <Section>
          <p>Health Matters</p>
          <p>One Step Solution</p>
          <p>for all your dietary needs.</p>
          <p>We use BMI evaluations to guide personalized meal plans, aligning with health objectives.!</p>
        </Section>
        <Image>
          <img src="/src/assets/physician.png" alt="Physician" />
        </Image>
      </HeroSection>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  background: linear-gradient(135deg, #ABDCFF 10%, #0396FF 100%);
`;

const HeroSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 15vh 0 0 0;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10vh 0 0 0;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 40px;

  p:first-child {
    font-size: 15px;
    border: 1px solid black;
    width: 7rem;
    border-radius: 1000px;
    padding-left: 7px;
  }

  p:nth-child(2) {
    font-size: 40px;
    font-weight: 600;
    color: blue;
  }

  p:nth-child(3) {
    font-size: 20px;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    p:first-child {
      font-size: 12px;
      width: 6rem;
    }

    p:nth-child(2) {
      font-size: 30px;
    }

    p:nth-child(3) {
      font-size: 18px;
    }
  }
`;

const Image = styled.div`
  img {
    height: auto;
    max-width: 600px;

    @media (max-width: 768px) {
      width: 80vw;
      max-width: 300px;
    }
  }
`;

export default Hero;
