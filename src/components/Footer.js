import React from "react";
import '../css/footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <p className="credits">
          Distribué par{" "}
          <a
            href="https://twitter.com/hopollotv"
            target="_blank"
            rel="noopener noreferrer"
          >
            HoPollo
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
