import styled from 'styled-components';

const Footer = () => {
  return (
      <>
      <UpperSection id="contact">
        <Section>
          <ul>
            <p>Products</p>
            <li><a href="#">Features</a></li>
            <li><a href="#">Case Studies</a></li>
            <li><a href="#">Reviews</a></li>
            <li><a href="#">Updates</a></li>
          </ul>
        </Section>
        <Section>
          <ul>
            <p>Support</p>
            <li><a href="#">Getting Started</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Report a bug</a></li>
            <li><a href="#">Chat Support</a></li>
          </ul>
        </Section>
        <Section>
          <ul>
            <p>Contact Us</p>
            <li><a href="mailto:contact@company.com"><i className="fa-regular fa-envelope"></i>contact@company.com</a></li>
            <li><a href="tel:+1-XXX-XXX-XXXX"><i className="fa-solid fa-phone"></i>(XXX) XXX-XXXX</a></li>
            <li><i className="fa-solid fa-location-dot"></i>Healthcare Plaza, 123 MedTech Street, Pulse City, MD 56789, United States</li>
          </ul>
        </Section>
      </UpperSection>
      <LowerSection>
        <p>&copy; {new Date().getFullYear()} HealthyMe. All rights reserved.</p>
        <p>Follow us <a href="#"><i className="fa-brands fa-instagram"></i></a> <a href="/"><i className="fa-brands fa-twitter"></i></a>  <a href="/"><i className="fa-brands fa-facebook"></i></a> </p>

      </LowerSection>
      </>
  );
}



const UpperSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  color: white;
  height: 38vh;
  background-color: black;
  
  @media(max-width: 768px){
    height: 60vh;
  }
`;

const Section = styled.div`
  margin: 0 1rem;
  flex: 1;

  ul {
    list-style: none;
    padding: 0;
  }

  p {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 1rem 0;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;

const LowerSection = styled.div`
  text-align: center;
  padding-top: 1rem;
  color: black;
`;

export default Footer;
