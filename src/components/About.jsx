import styled from "styled-components";

const About = () => {
  return (
    <Container id="about">
      <h1>ABOUT US</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo consectetur corporis laboriosam? Temporibus, in quos perspiciatis modi ut ex aspernatur laudantium dicta atque libero tempora explicabo aut, eveniet similique. Quibusdam.
        Eius non odio corporis reiciendis, vitae nostrum quia quam, nemo ullam beatae laborum nesciunt itaque est omnis, placeat quis ad sunt quo dolor dolore sapiente saepe ipsam consequatur. Debitis, necessitatibus.
      </p>
      <Button>
        <button>Read More</button>
      </Button>
      
    </Container>
  );
};

const Container = styled.div`
  height: 90vh;
  color: white;
  padding: 20px;
  background-size: cover;
  box-sizing: border-box;

  h1 {
    text-align: center;
    padding-top: 100px;
    font-weight: 700;
    font-size: 36px;
    margin-bottom: 40px;
    color: black;

    @media (max-width: 768px) {
      padding-top: 60px;
      font-size: 28px;
    }
  }

  p {
    text-align: center;
    padding: 0 60px;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.6;
    color: black;

    @media (max-width: 768px) {
      padding: 0 20px;
      font-size: 16px;
    }
  }
`;

const Button = styled.div`
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  button {
    background-color: #007bff;
    color: white;
    border: 2px solid white;
    margin: 10px;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;

    &:hover {
      background-color: darkblue;
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;

    button {
      width: 80%;
      font-size: 14px;
      padding: 8px 16px;
    }
  }
`;

export default About;
