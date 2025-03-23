import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <UpperSection id="contact">
        <Section>
          <Title>Products</Title>
          <List>
            <li>
              <Link href="#">Features</Link>
            </li>
            <li>
              <Link href="#">Case Studies</Link>
            </li>
            <li>
              <Link href="#">Reviews</Link>
            </li>
            <li>
              <Link href="#">Updates</Link>
            </li>
          </List>
        </Section>
        <Section>
          <Title>Support</Title>
          <List>
            <li>
              <Link href="#">Getting Started</Link>
            </li>
            <li>
              <Link href="#">Help Center</Link>
            </li>
            <li>
              <Link href="#">Report a Bug</Link>
            </li>
            <li>
              <Link href="#">Chat Support</Link>
            </li>
          </List>
        </Section>
        <Section>
          <Title>Contact Us</Title>
          <List>
            <li>
              <Link href="mailto:contact@company.com">
                <i className="fa-regular fa-envelope"></i>contact@company.com
              </Link>
            </li>
            <li>
              <Link href="tel:+1-XXX-XXX-XXXX">
                <i className="fa-solid fa-phone"></i>(XXX) XXX-XXXX
              </Link>
            </li>
            <li>
              <i className="fa-solid fa-location-dot"></i>Healthcare Plaza, 123
              MedTech Street, Pulse City, MD 56789, United States
            </li>
          </List>
        </Section>
      </UpperSection>
      <LowerSection>
        <Text>
          &copy; {new Date().getFullYear()} HealthyMe. All rights reserved.
        </Text>
        <SocialLinks>
          <Link href="#">
            <i className="fa-brands fa-instagram"></i>
          </Link>
          <Link href="#">
            <i className="fa-brands fa-twitter"></i>
          </Link>
          <Link href="#">
            <i className="fa-brands fa-facebook"></i>
          </Link>
        </SocialLinks>
      </LowerSection>
    </>
  );
};

export default Footer;

// Styled Components
const UpperSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 40px 20px;
  background-color: #2c3e50;
  color: white;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px 10px;
    gap: 10px;
  }
`;

const Section = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 10px 0;

  @media (max-width: 768px) {
    margin: 5px 0;
  }
`;

const Title = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #3498db;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    color: #ecf0f1;
  }

  i {
    margin-right: 8px;
    color: #3498db;
  }
`;

const Link = styled.a`
  color: #ecf0f1;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #3498db;
  }
`;

const LowerSection = styled.div`
  text-align: center;
  padding: 15px;
  background-color: #f5f7fa;
  color: #2c3e50;
  border-top: 1px solid #ddd;
`;

const Text = styled.p`
  margin: 0;
  font-size: 0.85rem;
`;

const SocialLinks = styled.div`
  margin-top: 8px;

  a {
    color: #2c3e50;
    margin: 0 8px;
    font-size: 1.1rem;
    transition: color 0.3s ease;

    &:hover {
      color: #3498db;
    }
  }
`;
