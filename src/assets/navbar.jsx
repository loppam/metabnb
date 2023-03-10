import { useState, React } from "react";
import logo1 from "../images/Vector.png";
import logo2 from "../images/Vector (1).png";
import Connectwallet from "./connectwallet";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./navbar.css";
const navbar = () => {
  const [Mobile, setMobile] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo1} alt="" width={41.99} height={36.37} />
        <img src={logo2} alt="" width={188.1} height={32.19} />
      </div>
      <ul
        className={Mobile ? "mobile-link" : "nav-links"}
        onClick={() => setMobile(false)}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="placeTostay"> Place to stay</Link>
        </li>
        <li>NFTs</li>
        <li>Community</li>
      </ul>
      <div className="nav-links">
        <Connectwallet />
      </div>
      <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
        {Mobile ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default navbar;
