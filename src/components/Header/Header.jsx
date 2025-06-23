// src/components/Header/Header.jsx
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease;
  background-color: ${({ scrolled }) =>
    scrolled ? 'rgba(248, 249, 250, 0.95)' : 'transparent'};
  box-shadow: ${({ scrolled }) => (scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none')};
  height: 80px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 20px;
`;

const Logo = styled(motion.a)`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${({ scrolled }) => (scrolled ? 'green' : 'white')};
  text-decoration: none;
  transition: color 0.3s ease;

  span {
    color: green;
  }

  &:hover {
    color: green;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 30px;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 70%;
    height: 100vh;
    background-color: var(--light-color);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: right 0.5s ease;
    z-index: 1000;
    box-shadow: ${({ isOpen }) => (isOpen ? '-5px 0 15px rgba(0, 0, 0, 0.2)' : 'none')};
  }
`;

const NavLink = styled(motion.li)`
  a {
    color: ${({ scrolled }) => (scrolled ? 'var(--dark-color)' : 'white')};
    font-weight: 500;
    position: relative;
    transition: color 0.3s ease;

    @media (max-width: 768px) {
      color: var(--dark-color);
      font-size: 1.2rem;
      padding: 10px 0;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

const MobileMenuButton = styled.div`
  display: none;
  z-index: 1001;
  cursor: pointer;
  position: relative;

  @media (max-width: 768px) {
    display: block;
  }

  svg {
    color: ${({ scrolled, isOpen }) => 
      isOpen ? 'var(--dark-color)' : 
      scrolled ? 'var(--dark-color)' : 'white'};
    font-size: 1.5rem;
    transition: color 0.3s ease;
  }
`;

const CloseButton = styled(FaTimes)`
  position: absolute;
  top: 20px;
  right: 20px;
  color: var(--dark-color) !important;
  font-size: 1.8rem !important;
  z-index: 1002;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  padding: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const Overlay = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.1 });
  const menuRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <HeaderContainer scrolled={scrolled} ref={ref}>
      <div className="container">
        <Nav>
          <Logo
            href="#home"
            scrolled={scrolled}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Portfolio<span>.</span>
          </Logo>

          <NavLinks isOpen={isOpen} ref={menuRef}>
            {isOpen && (
              <CloseButton onClick={toggleMenu} />
            )}
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                scrolled={scrolled}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setIsOpen(false)}
              >
                <a href={link.href}>{link.name}</a>
              </NavLink>
            ))}
          </NavLinks>

          <MobileMenuButton
            scrolled={scrolled}
            isOpen={isOpen}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? null : <FaBars />}
          </MobileMenuButton>
        </Nav>
      </div>
      <Overlay isOpen={isOpen} onClick={() => setIsOpen(false)} />
    </HeaderContainer>
  );
}
export default Header;