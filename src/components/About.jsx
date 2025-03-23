import styled from "styled-components";

const About = () => {
  return (
    <Container id="about">
      <Title>ABOUT US</Title>
      <Description>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
        consectetur corporis laboriosam? Temporibus, in quos perspiciatis modi
        ut ex aspernatur laudantium dicta atque libero tempora explicabo aut,
        eveniet similique. Quibusdam. Eius non odio corporis reiciendis, vitae
        nostrum quia quam, nemo ullam beatae laborum nesciunt itaque est omnis,
        placeat quis ad sunt quo dolor dolore sapiente saepe ipsam consequatur.
        Debitis, necessitatibus.
      </Description>
      <Button>
        <button>Read More</button>
      </Button>
    </Container>
  );
};

export default About;

// Styled Components
const Container = styled.div`
  height: auto;
  min-height: 90vh;
  padding: 60px 20px;
  background: linear-gradient(135deg, #f5f7fa 10%, #c3cfe2 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-weight: 700;
  font-size: 36px;
  margin-bottom: 40px;
  color: #2c3e50;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`;

const Description = styled.p`
  text-align: center;
  max-width: 800px;
  padding: 0 20px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.6;
  color: #7f8c8d;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 0 10px;
  }
`;

const Button = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;

  button {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 12px 24px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
      background-color: #2980b9;
      transform: translateY(-3px);
    }

    @media (max-width: 768px) {
      padding: 10px 20px;
      font-size: 14px;
    }
  }
`;
