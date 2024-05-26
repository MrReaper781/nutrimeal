import { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

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
        window.addEventListener('scroll', changeBackground);
        return () => window.removeEventListener('scroll', changeBackground);
    }, []);

    return (
        <nav className={nav ? 'nav active' : 'nav'}>
            <a href="/" className='logo'>
                NUTRIMEAL
            </a>
            <input className='menu-btn' type='checkbox' id='menu-btn' />
            <label className='menu-icon' htmlFor='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><Link to='/'>Home</Link></li>
                <li><ScrollLink to="features" smooth={true} duration={500} offset={-50}>Features</ScrollLink></li>
                <li><Link to="/bmi">BMI & DIET</Link></li>
                <li><ScrollLink to="about" smooth={true} duration={500} offset={-50}>About</ScrollLink></li>
                <li><ScrollLink to="contact" smooth={true} duration={500} offset={-50}>Contact</ScrollLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;
