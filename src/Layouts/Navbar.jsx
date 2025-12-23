import React, { useState } from "react";
import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  useGSAP(() => {
    const timeline = gsap.timeline();

    timeline.to(".Landing-h1", {
      opacity: 1,
      duration: 2,
      scale: 1.05,
      ease: "power1.inOut",
    });

    timeline.to(".Landing-h1", {
      opacity: 0,
      duration: 1,
      ease: "power1.out",
    });

    timeline.from(".navbar-container", {
      y: -40,
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut",
    });
  });

  return (
    <>
      <h1 className="Landing-h1">Vserve</h1>
      <nav className="navbar-container">
        <div className="main-outer-navbar">
          <div className="logo-container">
            <h3>Vserve</h3>
            <div
              className="Hamburger"
              onClick={() => setActiveMenu(!activeMenu)}
            >
              <Menu />
            </div>
          </div>
          <div className="navlinks-container">
            <ul className={`${activeMenu ? "activeMenu" : ""}`}>
              <li>
                <NavLink
                  to={"/"}
                  className={"Nav-links"}
                  onClick={() => setActiveMenu(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/get-support"}
                  className={"Nav-links"}
                  onClick={() => setActiveMenu(false)}
                >
                  Get Support
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/services"}
                  className={"Nav-links"}
                  onClick={() => setActiveMenu(false)}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/auth"}
                  className={"Nav-links"}
                  onClick={() => setActiveMenu(false)}
                >
                  My Profile
                </NavLink>
              </li>
            </ul>
          </div>

          {/* <div className="auth-container">K Saikrishna</div> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
