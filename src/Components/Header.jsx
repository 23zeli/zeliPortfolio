// import React from 'react'
// import {useEffect, useRef} from "react";
// import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope,} from '@fortawesome/free-solid-svg-icons'
// import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

// function Header() {
//   const [isBurgerOpen, setIsBurgerOpen] = useState(false);

//   const handleBurgerClick = () => {
//     setIsBurgerOpen(!isBurgerOpen);
//   };
  
//   const accounts = [
//       {
//         url: 'https://x.com/23zeli', icon: faTwitter,
//        },
//       {
//         url: 'https://github.com/23zeli', icon: faGithub,
//       },
//       {
//         url: 'https://linkedin.com/in/mtutuzeli-ngobo-uni1104', icon: faLinkedin, 
//       },
//       {
//         url: 'mtutuzeli.ngobo@gmail.com', icon: faEnvelope ,    
//       },
//   ];

//   const headerRef = useRef(null);

//   useEffect(() => {
//     let prevScrollPos = window.scrollY;

//     const handleScroll = () => {
//       const currentScrollPos = window.scrollY;
//       const headerElement = headerRef.current;
//       if (!headerElement) {
//         return;
//       }
//       if (prevScrollPos > currentScrollPos) {
//         headerElement.style.transform = "translateY(0)";
//       } else {
//         headerElement.style.transform = "translateY(-200px)";
//       }
//       prevScrollPos = currentScrollPos;
//     }
//     window.addEventListener('scroll', handleScroll)
//     return() => {
//       window.removeEventListener('scroll', handleScroll)
//     }
//   }, []);

//   const handleClick = (anchor) => () => {
//     const id = `${anchor}-section`;
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   };
//   return (
//     <div
//       position= "fixed"
//       top={0}
//       left={0}
//       right={0}
//       translateY={0}
//       transitionProperty= "transform"
//       transitionDuration=".3s"
//       transitionTimingFunction="ease-in-out"
//       backgroundColor="#18181b"
//       ref={headerRef}
//       className='Header'
//     >
//       <nav className='Icons'>
//         {accounts.map(({ icon, url }) =>(
//           <a
//             key={url}
//             href={url}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FontAwesomeIcon icon={icon} key={url} />
//           </a>
//         ))}
//       </nav>
//       <nav className='Menu'>
//         <a href="#projects" onClick={handleClick("projects")}>
//           Projects
//         </a>
//         <a href="#contact-me" onClick={handleClick("contact-me")}>
//           Contact Me
//         </a>
//       </nav>
//       <div className="BurgerMenu">
//         <div className="BurgerIcon" onClick={handleBurgerClick}>
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//         <nav className="BurgerNav">
//           <a href="#projects" onClick={handleClick("projects")}>
//             Projects
//           </a>
//           <a href="#contactme" onClick={handleClick("contactme")}>
//             Contact Me
//           </a>
//         </nav>
//       </div>
//     </div>
//   )
// }

// export default Header

// import React from 'react'
// import {useEffect, useRef} from "react";
// import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope,} from '@fortawesome/free-solid-svg-icons'
// import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

// function Header() {
//   const [isBurgerOpen, setIsBurgerOpen] = useState(false);

//   const handleBurgerClick = () => {
//     setIsBurgerOpen(!isBurgerOpen);
//   };
  
//   const accounts = [
//       {
//         url: 'https://x.com/23zeli', icon: faTwitter,
//        },
//       {
//         url: 'https://github.com/23zeli', icon: faGithub,
//       },
//       {
//         url: 'https://linkedin.com/in/mtutuzeli-ngobo-uni1104', icon: faLinkedin, 
//       },
//       {
//         url: 'mtutuzeli.ngobo@gmail.com', icon: faEnvelope ,    
//       },
//   ];

//   const headerRef = useRef(null);

//   useEffect(() => {
//     let prevScrollPos = window.scrollY;

//     const handleScroll = () => {
//       const currentScrollPos = window.scrollY;
//       const headerElement = headerRef.current;
//       if (!headerElement) {
//         return;
//       }
//       if (prevScrollPos > currentScrollPos) {
//         headerElement.style.transform = "translateY(0)";
//       } else {
//         headerElement.style.transform = "translateY(-200px)";
//       }
//       prevScrollPos = currentScrollPos;
//     }
//     window.addEventListener('scroll', handleScroll)
//     return() => {
//       window.removeEventListener('scroll', handleScroll)
//     }
//   }, []);

//   const handleClick = (anchor) => () => {
//     const id = `${anchor}-section`;
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//       setIsBurgerOpen(false); // Close burger menu after clicking on a link
//     }
//   };

//   return (
//     <div
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         right: 0,
//         backgroundColor: "#18181b",
//         transition: "transform 0.3s ease-in-out",
//       }}
//       ref={headerRef}
//       className='Header'
//     >
//       <nav className='Icons'>
//         {accounts.map(({ icon, url }) =>(
//           <a
//             key={url}
//             href={url}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FontAwesomeIcon icon={icon} />
//           </a>
//         ))}
//       </nav>
//       <nav className='Menu'>
//         <a href="#projects" onClick={handleClick("projects")}>
//           Projects
//         </a>
//         <a href="#contact-me" onClick={handleClick("contact-me")}>
//           Contact Me
//         </a>
//       </nav>
//       <div className="BurgerMenu">
//         <div className="BurgerIcon" onClick={handleBurgerClick}>
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//         {isBurgerOpen && (
//           <nav className="BurgerNav">
//             <a href="#projects" onClick={handleClick("projects")}>
//               Projects
//             </a>
//             <a href="#contact-me" onClick={handleClick("contact-me")}>
//               Contact Me
//             </a>
//           </nav>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Header

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
    <div ref={headerRef} className='Header'>
      <nav className='Icons'>
        {accounts.map(({ icon, url }) =>(
          <a
            key={url}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={icon} />
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
      <div className='BurgerMenu'>
        <button className="hamburger" onClick={handleToggle}>
          <span className={isOpen ? 'open' : ''}></span>
          <span className={isOpen ? 'open' : ''}></span>
          <span className={isOpen ? 'open' : ''}></span>
        </button>
        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header