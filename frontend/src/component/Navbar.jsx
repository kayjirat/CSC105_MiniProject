import { useState } from "react";
import "./Navbar.css";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <a
        href="/home"
        className="brand-name"
        style={{ color: "black", fontFamily: "Scope One", cursor: "pointer" }}
      >
        ART COLLECTION
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <MenuIcon style={{ color: "white" }} />
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/exhibition">Exhibition</a>
          </li>
          <li>
            <a href="/aboutus">AboutUs</a>
          </li>
          <li>
            <a href="/profile">Profile</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
