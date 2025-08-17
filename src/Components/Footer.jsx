import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const accounts = [
    { url: 'https://x.com/23zeli', icon: faTwitter },
    { url: 'https://github.com/23zeli', icon: faGithub },
    { url: 'https://linkedin.com/in/mtutuzeli-ngobo-uni1104', icon: faLinkedin },
    { url: 'mailto:mtutuzeli.ngobo@gmail.com', icon: faEnvelope },
  ];

  return (
    <div className="Footer" style={{ backgroundColor: "#18181b", display: "flex", flexDirection: "column", alignItems: "center", }}>
        <p
            style={{
              paddingTop: "5px",
              paddingBottom: "5px",
              color: "whitesmoke",
            }}
        >
        Copyright &copy;2025
      </p>
      <div className="footerIcons">
        <div className="footer-icons" style={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
            {accounts.map(({ icon, url }) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "whitesmoke", margin: "10px" }}
              >
                <FontAwesomeIcon icon={icon} />
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;