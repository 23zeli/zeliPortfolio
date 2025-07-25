import React from 'react'
import {useEffect, useRef} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Header() {
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
        url: 'mtutuzeli.ngobo@gmail.com', icon: faEnvelope ,    
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
    }
  };
  return (
    <div
      position= "fixed" 
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty= "transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerRef} 
      className='Header'
    >
      <nav className='Icons'>
        {accounts.map(({ icon, url }) =>(
          <a
            key={url}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={icon} key={url} />
          </a>
        ))}
      </nav>
      <nav className='Menu'>
        <a href="#projects" onClick={handleClick("projects")}>
          Projects
        </a>
        <a href="#contactme" onClick={handleClick("contactme")}>
          Contact Me
        </a>
      </nav>
    </div>
  )
}

export default Header
