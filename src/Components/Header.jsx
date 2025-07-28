import React from 'react'
import {useEffect, useRef} from "react";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Header() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsBurgerOpen(!isBurgerOpen);
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
        <a href="#contact-me" onClick={handleClick("contact-me")}>
          Contact Me
        </a>
      </nav>
      <div className="BurgerMenu">
        <div className="BurgerIcon" onClick={handleBurgerClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className="BurgerNav">
          <a href="#projects" onClick={handleClick("projects")}>
            Projects
          </a>
          <a href="#contactme" onClick={handleClick("contactme")}>
            Contact Me
          </a>
        </nav>
      </div>
    </div>
  )
}

export default Header

// import React from 'react';
// import { useEffect, useRef } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

// function Header() {
//   const accounts = [
//     { url: 'https://x.com/23zeli', icon: faTwitter },
//     { url: 'https://github.com/23zeli', icon: faGithub },
//     { url: 'https://linkedin.com/in/mtutuzeli-ngobo-uni1104', icon: faLinkedin },
//     { url: 'mtutuzeli.ngobo@gmail.com', icon: faEnvelope },
//   ];

//   const headerRef = useRef(null);
//   const [isOpen, setIsOpen] = React.useState(false);

//   useEffect(() => {
//     let prevScrollPos = window.scrollY;

//     const handleScroll = () => {
//       const currentScrollPos = window.scrollY;
//       const headerElement = headerRef.current;
//       if (!headerElement) return;
//       if (prevScrollPos > currentScrollPos) {
//         headerElement.style.transform = "translateY(0)";
//       } else {
//         headerElement.style.transform = "translateY(-200px)";
//       }
//       prevScrollPos = currentScrollPos;
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
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

//   const handleBurgerClick = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div
//       ref={headerRef}
//       className="Header"
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         right: 0,
//         backgroundColor: "#18181b",
//         color: "white",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         padding: "10px",
//       }}
//     >
//       <h1 style={{ fontSize: "18px", fontWeight: "bold" }}>Welcome</h1>
//       <div style={{ display: "flex", alignItems: "center" }}>
//         <FontAwesomeIcon
//           icon={faBars}
//           style={{ fontSize: "24px", cursor: "pointer" }}
//           onClick={handleBurgerClick}
//         />
//         {isOpen && (
//           <nav
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               backgroundColor: "#18181b",
//               position: "absolute",
//               top: "40px",
//               right: "0px",
//               padding: "10px",
//               border: "1px solid #333",
//               borderRadius: "5px",
//             }}
//           >
//             {accounts.map(({ icon, url }) => (
//               <a
//                 key={url}
//                 href={url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{ marginBottom: "10px" }}
//               >
//                 <FontAwesomeIcon icon={icon} />
//               </a>
//             ))}
//             <a href="#projects" onClick={handleClick("projects")}>
//               Projects
//             </a>
//             <a href="#contactme" onClick={handleClick("contactme")}>
//               Contact Me
//             </a>
//           </nav>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Header;

// 

// import React from 'react';
// import { useEffect, useRef } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

// function Header() {
//   const [isOpen, setIsOpen] = React.useState(false);
//   const [isSmallScreen, setIsSmallScreen] = React.useState(false);

//   const handleBurgerClick = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setIsSmallScreen(window.innerWidth < 768); // adjust the breakpoint as needed
//     };
//     handleResize(); // call on initial render
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <div
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         right: 0,
//         backgroundColor: "#18181b",
//         color: "white",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         padding: "10px",
//       }}
//     >
//       <h1
//         style={{ fontSize: "18px", fontWeight: "bold" }}
//         className='name-header'
//       >
//         Mtutuzeli
//       </h1>
//       <div
//         style={{ display: "flex", alignItems: "center" }}
//         className='nav-bar'
//       >
//         {isSmallScreen && (
//           <FontAwesomeIcon
//             icon={faBars}
//             style={{ fontSize: "24px", cursor: "pointer" }}
//             onClick={handleBurgerClick}
//           />
//         )}
//         {isOpen && isSmallScreen && (
//           <nav
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               backgroundColor: "#18181b",
//               position: "absolute",
//               top: "40px",
//               right: "0px",
//               padding: "10px",
//               border: "1px solid #333",
//               borderRadius: "5px",
//             }}
//             className="burger-menu"
//           >
//             <a href="#projects">Projects</a>
//             <a href="#contactme">Contact Me</a>
//           </nav>
//         )}
//         {!isSmallScreen && (
//           <nav
//             style={{
//               display: "flex",
//               alignItems: "center",
//             }}
//           >
//             <a href="#projects" style={{ marginRight: "10px" }}>Projects</a>
//             <a href="#contactme">Contact Me</a>
//           </nav>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Header;

// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

// function Header() {
//   const [isOpen, setIsOpen] = React.useState(false);
//   const [isSmallScreen, setIsSmallScreen] = React.useState(false);

//   const handleBurgerClick = () => {
//     setIsOpen(!isOpen);
//   };

//   React.useEffect(() => {
//     const handleResize = () => {
//       setIsSmallScreen(window.innerWidth < 768); // adjust the breakpoint as needed
//     };
//     handleResize(); // call on initial render
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <div
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         right: 0,
//         backgroundColor: "#18181b",
//         color: "white",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         padding: "10px",
//       }}
//     >
//       {isSmallScreen && (
//         <h1
//           style={{ fontSize: "18px", fontWeight: "bold" }}
//           className='name-header'
//         >
//           Mtutuzeli
//         </h1>
//       )}
//       <div 
//         style={{ display: "flex", alignItems: "center" }}
//         className='nav-bar'
//       >
//         {isSmallScreen && (
//           <FontAwesomeIcon
//             icon={faBars}
//             style={{ fontSize: "24px", cursor: "pointer" }}
//             onClick={handleBurgerClick}
//           />
//         )}
//         {isOpen && isSmallScreen && (
//           <nav
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               backgroundColor: "#18181b",
//               position: "absolute",
//               top: "40px",
//               right: "0px",
//               padding: "10px",
//               border: "1px solid #333",
//               borderRadius: "5px",
//             }}
//             className="burger-menu"
//           >
//             <a href="#projects">Projects</a>
//             <a href="#contactme">Contact Me</a>
//           </nav>
//         )}
//         {!isSmallScreen && (
//           <nav
//             style={{
//               display: "flex",
//               alignItems: "center",
//             }}
//           >
//             <h1
//               style={{ fontSize: "18px", fontWeight: "bold", marginRight: "20px" }}
//               className='name-header'
//             >
//               Mtutuzeli
//             </h1>
//             <a href="#projects" style={{ marginRight: "10px" }}>Projects</a>
//             <a href="#contactme">Contact Me</a>
//           </nav>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Header;