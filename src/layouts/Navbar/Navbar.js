import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import logo from "assets/images/logo.png";
import { Link } from "react-router-dom";
import { IoMdMoon } from "react-icons/io";
import hamburger from "assets/images/hamburger.png";
import useMediaQuery from "hooks/useMediaQuery";
import { IoCloseSharp } from "react-icons/io5";
import OutsideClickDetector from "hooks/OutsideClickDetector";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isBellow1000px = useMediaQuery("(max-width : 1000px)");
  const isBellow500px = useMediaQuery("(max-width : 500px)");

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    document.addEventListener("scroll", handler);

    return () => {
      document.removeEventListener("scroll", handler);
    };
  });

  const menuRef = OutsideClickDetector(() => {
    setIsOpen(false);
  });

  return (
    <>
      <div className={`${styles.wrapper} ${isScrolled ? styles.scrolled : ""}`}>
        <div className="container-wrapper">
          <div className={styles.navbar}>
            <div className={`black-screen ${isOpen ? "show" : ""}`}></div>

            <div className={styles.left}>
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
            <div
              className={`${styles.center} ${isOpen ? styles.open : ""}`}
              ref={menuRef}
            >
              {isBellow1000px ? (
                <div className={styles.sidebarheader}>
                  <img src={logo} className={styles.mobileLogo} alt="" />
                  <button
                    className={styles.closeBtn}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <IoCloseSharp size={25} color="black" />
                  </button>
                </div>
              ) : null}
              <Link to="/" className="fs-16px weight-4 black pointer">
                Download
              </Link>
              <Link to="/" className="fs-16px weight-4 black pointer">
                How its Work
              </Link>
              <Link to="/" className="fs-16px weight-4 black pointer">
                Social Feed
              </Link>
              <Link to="/" className="fs-16px weight-4 black pointer">
                NFT Group
              </Link>
              <Link to="/" className="fs-16px weight-4 black pointer">
                Contact
              </Link>

              {isBellow1000px ? (
                <button
                  className={`button-pink fs-14px white pointer weight-5 uppercase`}
                >
                  Sign In Now
                </button>
              ) : null}
            </div>
            <div className={styles.right}>
              {isBellow500px ? null : (
                <button
                  className={`button-pink fs-14px white pointer weight-5 uppercase`}
                >
                  Sign In Now
                </button>
              )}
              <button
                className="rounded pointer"
                style={{
                  border: "1px solid #FFEDF4",
                  width: "48px",
                  height: "48px",
                }}
              >
                <IoMdMoon size={30} color="#333E63" />
              </button>

              <button
                className={`${styles.hamburger} pointer`}
                onClick={() => setIsOpen(!isOpen)}
              >
                <img src={hamburger} className="w-full" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
