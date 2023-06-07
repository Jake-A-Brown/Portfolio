import "./Footer.css";
import { Link } from "react-router-dom";
import Emaillink from "../EmailLink/Emaillink";
import Socialmedia from "../Socialmedia/Socialmedia";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-section section__padding">
        <div className="footer-links">
          <div className="footer-links-div">
            <h4>Contact</h4>
            <Emaillink />
          </div>
          <div className="footer-links-div">
            <h4>Navigation Links</h4>
            <Link to="/">
              <p>Home</p>
            </Link>
            <Link to="/about">
              <p>About</p>
            </Link>
            <Link to="/contact">
              <p>Contact</p>
            </Link>
            <Link to="/resume">
              <p>Resume</p>
            </Link>
            <Link to="/projects">
              <p>Projects</p>
            </Link>
          </div>
          <div className="footer-links-div">
            <h4>Media Links</h4>
            <div className="socialmedia">
              <Socialmedia />
            </div>
          </div>
          <div className="footer-links-div">
            <a href="#top">
              <p>Back to top</p>
            </a>
          </div>
        </div>
        <hr></hr>
        <div className="footer-below">
          <div className="footer-copyright">
            <p>&#169;{new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
