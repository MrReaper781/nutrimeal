import styled from "styled-components";

const Features = () => {
  return (
    <Container id="features">
      <h2>FEATURES WE PROVIDE</h2>
      <Feature>
        <Section>
          <div className="centered-image">
            <img src="../../src/assets/BMI.jpg" alt="BMI" />
          </div>
          <div>
            <p>Calculating BMI is easier</p>
            <p>
              We calculate your BMI index from data like age, height, weight
            </p>
          </div>
        </Section>
        <Section>
          <div className="centered-image">
            <img src="../../src/assets/NUTRI.jpg" alt="BMI" />
          </div>
          <div>
            <p>Personalized Nutrition Plans</p>
            <p>
              Receive a tailored nutrition plan designed specifically for your
              body and goals.
            </p>
          </div>
        </Section>
        <Section>
          <div className="centered-image">
            <img src="../../src/assets/TRACKING.jpg" alt="BMI" />
          </div>
          <div>
            <p>Food Tracking and Analysis</p>
            <p>
              Effortlessly track your food intake using our user-friendly app.
            </p>
          </div>
        </Section>
        <Section>
          <div className="centered-image">
            <img src="../../src/assets/MEAL.jpg" alt="BMI" />
          </div>
          <div>
            <p>Meal Planning and Recipes</p>
            <p>
              Access a vast collection of delicious and healthy recipes tailored
              to your dietary needs
            </p>
          </div>
        </Section>
        <Section>
          <div className="centered-image">
            <img src="../../src/assets/LIFESTYLE.jpg" alt="BMI" />
          </div>
          <div>
            <p>Lifestyle and Behavior</p>
            <p>
              Achieving sustainable results requires more than just a diet plan.
            </p>
          </div>
        </Section>
        <Section>
          <div className="centered-image">
            <img src="../../src/assets/CHATBOT.jpg" alt="BMI" />
          </div>
          <div>
            <p>Interactive chatbot</p>
            <p>
              Chatbots serve various purposes, from answering customer queries
              to providing entertainment
            </p>
          </div>
        </Section>
      </Feature>
    </Container>
  );
};

const Container = styled.div`
  padding: 2rem;
  h2 {
    padding: 50px 20px;
    font-size: 40px;
    font-weight: 700;
  }
`;

const Feature = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  align-items: flex-start;
  justify-content: center;
`;

const Section = styled.div`
  height: auto;
  width: 30%;
  height: 43vh;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  background-color: #f9f9f9;
  text-align: center;

  .centered-image {
    display: flex;
    justify-content: center;
  }

  img {
    max-width: 100px;
  }

  p:first-child {
    font-size: 1.4rem;
    font-weight: 700;
    color: blue;
    margin-bottom: 10px;
  }

  p:nth-child(2) {
    font-size: 1.1rem;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default Features;
