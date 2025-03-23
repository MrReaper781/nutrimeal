import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import styled from "styled-components";

function Navbar() {
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  return (
    <NavContainer className={nav ? "active" : ""}>
      <Logo href="/">NUTRIMEAL</Logo>
      <MenuToggle id="menu-btn" type="checkbox" />
      <MenuIcon htmlFor="menu-btn">
        <NavIcon />
      </MenuIcon>
      <MenuList>
        <MenuItem>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem>
          <ScrollLink to="features" smooth={true} duration={500} offset={-50}>
            Features
          </ScrollLink>
        </MenuItem>
        <MenuItem>
          <Link to="/bmi">BMI & DIET</Link>
        </MenuItem>
        <MenuItem>
          <ScrollLink to="about" smooth={true} duration={500} offset={-50}>
            About
          </ScrollLink>
        </MenuItem>
        <MenuItem>
          <ScrollLink to="contact" smooth={true} duration={500} offset={-50}>
            Contact
          </ScrollLink>
        </MenuItem>
      </MenuList>
    </NavContainer>
  );
}

export default Navbar;

// Styled Components
const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) =>
    props.className === "active" ? "#ffffff" : "transparent"};
  box-shadow: ${(props) =>
    props.className === "active" ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none"};
  transition: all 0.3s ease;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 15px 5%;
  }
`;

const Logo = styled.a`
  font-size: 24px;
  font-weight: 700;
  color: #2c3e50;
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const MenuToggle = styled.input`
  display: none;

  &:checked ~ ul {
    transform: translateX(0);
  }
`;

const MenuIcon = styled.label`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavIcon = styled.span`
  display: block;
  width: 25px;
  height: 3px;
  background: #2c3e50;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #2c3e50;
    transition: all 0.3s ease;
  }

  &::before {
    top: -8px;
  }

  &::after {
    top: 8px;
  }

  ${MenuToggle}:checked + &::before {
    transform: rotate(45deg);
    top: 0;
  }

  ${MenuToggle}:checked + &::after {
    transform: rotate(-45deg);
    top: 0;
  }
`;

const MenuList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    position: absolute;
    top: 70px;
    right: 0;
    width: 100%;
    flex-direction: column;
    background: #ffffff;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
`;

const MenuItem = styled.li`
  margin-left: 30px;

  a {
    font-size: 16px;
    font-weight: 500;
    color: #2c3e50;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #3498db;
    }
  }

  @media (max-width: 768px) {
    margin: 15px 0;
    text-align: center;

    a {
      font-size: 18px;
    }
  }
`;
