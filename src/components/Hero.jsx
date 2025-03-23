import styled from "styled-components";

const Hero = () => {
  return (
    <Container id="home">
      <HeroSection>
        <Section>
          <Tagline>Health Matters</Tagline>
          <Title>One Step Solution</Title>
          <Subtitle>for all your dietary needs.</Subtitle>
          <Description>
            We use BMI evaluations to guide personalized meal plans, aligning
            with your health objectives.
          </Description>
          <CTAButton>Get Started</CTAButton>
        </Section>
        <Image>
          <img src="/src/assets/physician.png" alt="Physician" />
        </Image>
      </HeroSection>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  background: linear-gradient(135deg, #f5f7fa 10%, #c3cfe2 100%);
  min-height: 100vh;
`;

const HeroSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15vh 0;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10vh 0;
    text-align: center;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;

  @media (max-width: 768px) {
    align-items: center;
    padding: 0 20px;
  }
`;

const Tagline = styled.p`
  font-size: 14px;
  border: 1px solid #333;
  width: fit-content;
  border-radius: 1000px;
  padding: 5px 15px;
  margin-bottom: 20px;
  color: #333;
  background-color: rgba(255, 255, 255, 0.8);

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 4px 12px;
  }
`;

const Title = styled.p`
  font-size: 48px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Subtitle = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #34495e;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  color: #7f8c8d;
  margin-bottom: 30px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const CTAButton = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;

const Image = styled.div`
  img {
    height: auto;
    max-width: 600px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
      width: 80vw;
      max-width: 300px;
      margin-top: 30px;
    }
  }
`;

export default Hero;
