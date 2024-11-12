//  M working on it for practice

import "../styles/Design.css";

export default function HeaderNav() {
  return (
    <header className="Maineader">
      <div>
        <a href="https://shonaz.in/contact-us/">
          <img className="logoSize" src="./decipherZoneLogo.png" alt="Logo" />
        </a>
        <h1 className="titleName">Shonaz Be Natural</h1>
      </div>

      <ul class="nav-links">
        <li>
          <a href="http://localhost:3000/dashboard">Home</a>
        </li>
        <li>
          <a href="https://shonaz.in/shop/"> SHOP </a>
        </li>
        <li>
          <a href="https://shonaz.in/about-us/"> About Us </a>
        </li>
        <li>
          <a href="https://shonaz.in/contact-us/"> Contact Us </a>
        </li>
      </ul>
    </header>
  );
}
