import "./Footer.css";

const Footer = () => {
  return (
    <footer className=" footer">
      <div className="footer-container container">
        <h1 className="footer-title">Orekoya</h1>

        <ul className="footer-list">
          <li>
            <a href="#home" className="footer-link">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="footer-link">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="footer-link">
              Projects
            </a>
          </li>
        </ul>

        <div className="footer-social">
          <a
            href="https://www.linkedin.com/in/tunde-benjamin-733948257/"
            className="footer-social-icon"
            target="_blank"
          >
            <i class="uil uil-linkedin"></i>
          </a>

          <a
            href="https://github.com/Tundeorekoya"
            className="footer-social-icon"
            target="_blank"
          >
            <i class="uil uil-github"></i>
          </a>

          <a
            href="https://wa.me/message/FEHPOO6EDD3LI1"
            className="footer-social-icon"
            target="_blank"
          >
            <i class="uil uil-inbox"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
