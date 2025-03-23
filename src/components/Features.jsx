import styled from "styled-components";

const Features = () => {
  return (
    <Container id="features">
      <Title>FEATURES WE PROVIDE</Title>
      <FeatureContainer>
        <FeatureSection>
          <FeatureImage>
            <img src="../../src/assets/BMI.jpg" alt="BMI" />
          </FeatureImage>
          <FeatureContent>
            <FeatureTitle>Calculating BMI is easier</FeatureTitle>
            <FeatureDescription>
              We calculate your BMI index from data like age, height, weight.
            </FeatureDescription>
          </FeatureContent>
        </FeatureSection>
        <FeatureSection>
          <FeatureImage>
            <img src="../../src/assets/NUTRI.jpg" alt="Nutrition" />
          </FeatureImage>
          <FeatureContent>
            <FeatureTitle>Personalized Nutrition Plans</FeatureTitle>
            <FeatureDescription>
              Receive a tailored nutrition plan designed specifically for your
              body and goals.
            </FeatureDescription>
          </FeatureContent>
        </FeatureSection>
        <FeatureSection>
          <FeatureImage>
            <img src="../../src/assets/TRACKING.jpg" alt="Tracking" />
          </FeatureImage>
          <FeatureContent>
            <FeatureTitle>Food Tracking and Analysis</FeatureTitle>
            <FeatureDescription>
              Effortlessly track your food intake using our user-friendly app.
            </FeatureDescription>
          </FeatureContent>
        </FeatureSection>
        <FeatureSection>
          <FeatureImage>
            <img src="../../src/assets/MEAL.jpg" alt="Meal Planning" />
          </FeatureImage>
          <FeatureContent>
            <FeatureTitle>Meal Planning and Recipes</FeatureTitle>
            <FeatureDescription>
              Access a vast collection of delicious and healthy recipes tailored
              to your dietary needs.
            </FeatureDescription>
          </FeatureContent>
        </FeatureSection>
        <FeatureSection>
          <FeatureImage>
            <img src="../../src/assets/LIFESTYLE.jpg" alt="Lifestyle" />
          </FeatureImage>
          <FeatureContent>
            <FeatureTitle>Lifestyle and Behavior</FeatureTitle>
            <FeatureDescription>
              Achieving sustainable results requires more than just a diet plan.
            </FeatureDescription>
          </FeatureContent>
        </FeatureSection>
        <FeatureSection>
          <FeatureImage>
            <img src="../../src/assets/CHATBOT.jpg" alt="Chatbot" />
          </FeatureImage>
          <FeatureContent>
            <FeatureTitle>Interactive Chatbot</FeatureTitle>
            <FeatureDescription>
              Chatbots serve various purposes, from answering customer queries
              to providing entertainment.
            </FeatureDescription>
          </FeatureContent>
        </FeatureSection>
      </FeatureContainer>
    </Container>
  );
};

export default Features;

// Styled Components
const Container = styled.div`
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 10%, #c3cfe2 100%);
`;

const Title = styled.h2`
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const FeatureContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  padding: 0 20px;
`;

const FeatureSection = styled.div`
  width: 30%;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FeatureImage = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  img {
    max-width: 100px;
    height: auto;
  }
`;

const FeatureContent = styled.div`
  text-align: center;
`;

const FeatureTitle = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
  color: #3498db;
  margin-bottom: 10px;
`;

const FeatureDescription = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  color: #7f8c8d;
  line-height: 1.6;
`;
