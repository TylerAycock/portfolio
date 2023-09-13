import frntendmtr from "../assets/images/icon-frontend-mentor.svg";
import github from "../assets/images/icon-github.svg";
import linkedin from "../assets/images/icon-linkedin.svg";
import profile from "../assets/images/image-profile-desktop.webp";
import circle from "../assets/images/pattern-circle.svg";
import rings from "../assets/images/pattern-rings.svg";

import "./Header.css";

const Header = () => {
  return (
    <div className="header" style={{ backgroundImage: `url(${profile})` }}>
      <img src={rings} alt="rings image" className="rings" />
      <img src={circle} alt="circle image" className="circle" />
      <div className="links-container">
        <h1 className="header-md">Tyler Aycock</h1>
        <div className="links">
          <a
            href="https://www.frontendmentor.io/profile/TylerAycock"
            target="blank"
            className="link"
          >
            <img src={frntendmtr} alt="frontend mentor logo" />
          </a>
          <a
            href="https://github.com/TylerAycock"
            target="blank"
            className="link"
          >
            <img src={github} alt="github logo" />
          </a>
          <a
            href="www.linkedin.com/in/tyler-aycock-2b2191a8"
            target="blank"
            className="link"
          >
            <img src={linkedin} alt="linkdin logo" />
          </a>
        </div>
      </div>
      <div className="intro">
        <div>
          <h2 className="header-xl">Nice to meet you!</h2>
          <h2 className="header-xl">
            I'm <span className="name">Tyler Aycock.</span>
          </h2>
        </div>
        <div className="blurb">
          <h3 className="body-lg">
            Based in the San Diegp, I'm a front-end developer passionate about
            building accessible web apps that users love.
          </h3>
        </div>
        <a className="btn body-lg">Contact Me</a>
      </div>
    </div>
  );
};

export default Header;
