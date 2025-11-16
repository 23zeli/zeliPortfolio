import React from 'react'
import {useEffect, useRef} from "react"
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const accounts = [
      {
        url: 'https://x.com/23zeli', icon: faTwitter,
       },
      {
        url: 'https://github.com/23zeli', icon: faGithub,
      },
      {
        url: 'https://linkedin.com/in/mtutuzeli-ngobo-uni1104', icon: faLinkedin,
      },
      {
        url: 'mailto:mtutuzeli.ngobo@gmail.com', icon: faEnvelope ,
      },
  ];

  const headerRef = useRef(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";
      } else {
        headerElement.style.transform = "translateY(-200px)";
      }
      prevScrollPos = currentScrollPos;
    }
    window.addEventListener('scroll', handleScroll)
    return() => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    setIsOpen(false); //Close burger menu after clicking on a link
    }
  };

  return (
    <div ref={headerRef} className='Header'>
      <nav className='Icons'>
        {accounts.map(({ icon, url }) =>(
          <a
            key={url}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className='header-icons'
          >
            <FontAwesomeIcon icon={icon} />
          </a>
        ))}
      </nav>
      <nav className='Menu'>
        <a className='menu-anchor' href="#projects" onClick={handleClick("projects")}>
          Projects
        </a>
        <a className='menu-anchor' href="#contactMe-section" onClick={handleClick("contactMe")}>Contact Me</a>
      </nav>
      <div className='BurgerMenu'>
        <button
          className="hamburger"
          onClick={handleToggle}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span className={isOpen ? 'open' : ''}></span>
          <span className={isOpen ? 'open' : ''}></span>
          <span className={isOpen ? 'open' : ''}></span>
        </button>
        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <a href="#projects-section" onClick={handleClick("projects")}>Projects</a>
            </li>
            <li>
              <a href="#contactMe-section" onClick={handleClick("contactMe")}>Contact Me</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header