import React from "react";
import styles from "./Footer.module.css";
import logoBlue from "assets/images/logo-blue.png";
import {
  FaFacebookF,
  FaTwitter,
  FaRedditAlien,
  FaLinkedinIn,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";
import useMediaQuery from "hooks/useMediaQuery";

const SocialIcon = ({ children, link = "/" }) => {
  return (
    <a href="#" className={styles.socialIcon}>
      {children}
    </a>
  );
};

function Footer() {
  const isBellow920px = useMediaQuery("(max-width : 920px)");
  const isBellow500px = useMediaQuery("(max-width : 500px)");
  return (
    <div className={styles.wrapper}>
      <div className="container-wrapper">
        <div className={`${styles.footer} ${isBellow920px ? "mb-50px" : ""}`}>
          <div className={styles.footerBox}>
            <img src={logoBlue} className="mb-25px" alt="" />
            <p className="fs-18px weight-4 lh-1_5 gray mb-25px">
              Introducing Klubx, an online marketplace for creators and fans to
              buy, sell, mint & collect content NFTs.
            </p>
            <div
              className={`${styles.socialIcons} ${
                isBellow920px ? "" : "mb-45px"
              } `}
            >
              <SocialIcon link="/">
                <FaFacebookF size={18} />
              </SocialIcon>
              <SocialIcon link="/">
                <FaTwitter size={18} />
              </SocialIcon>
              <SocialIcon link="/">
                <FaTelegramPlane size={20} />
              </SocialIcon>
              <SocialIcon link="/">
                <FaRedditAlien size={20} />
              </SocialIcon>
              <SocialIcon link="/">
                <FaYoutube size={18} />
              </SocialIcon>
              <SocialIcon link="/">
                <FaLinkedinIn size={18} />
              </SocialIcon>
            </div>
            {isBellow920px ? null : (
              <p className="fs-18px black weight-4">
                <span className="weight-7">2022</span> @ copyrights, all right
                reserved.
              </p>
            )}
          </div>
          <div className={styles.footerBox}>
            <p
              className={`pink fs-24px weight-6 ${
                isBellow500px ? "mb-20px" : "mb-30px"
              }`}
            >
              Company
            </p>
            <ul>
              <li
                className={`fs-18px weight-4 ${
                  isBellow500px ? "mb-15px" : "mb-25px"
                } pointer`}
              >
                {" "}
                About
              </li>
              <li
                className={`fs-18px weight-4 ${
                  isBellow500px ? "mb-15px" : "mb-25px"
                } pointer`}
              >
                {" "}
                Job
              </li>
              <li
                className={`fs-18px weight-4 ${
                  isBellow500px ? "mb-15px" : "mb-25px"
                } pointer`}
              >
                {" "}
                Branding
              </li>
              <li
                className={`fs-18px weight-4 ${
                  isBellow500px ? "mb-15px" : "mb-25px"
                } pointer`}
              >
                {" "}
                Newsroom
              </li>
            </ul>
          </div>
          <div className={styles.footerBox}>
            <p
              className={`pink fs-24px weight-6 ${
                isBellow500px ? "mb-20px" : "mb-30px"
              }`}
            >
              Resources
            </p>
            <ul>
              <li
                className={`fs-18px weight-4 ${
                  isBellow500px ? "mb-15px" : "mb-25px"
                } pointer`}
              >
                {" "}
                College
              </li>
              <li
                className={`fs-18px weight-4 ${
                  isBellow500px ? "mb-15px" : "mb-25px"
                } pointer`}
              >
                {" "}
                Support
              </li>
              <li
                className={`fs-18px weight-4 ${
                  isBellow500px ? "mb-15px" : "mb-25px"
                } pointer`}
              >
                {" "}
                Safety
              </li>
              <li
                className={`fs-18px weight-4 ${
                  isBellow500px ? "mb-15px" : "mb-25px"
                } pointer`}
              >
                {" "}
                Blog
              </li>
              <li
                className={`fs-18px weight-4 ${
                  isBellow500px ? "mb-15px" : "mb-25px"
                } pointer`}
              >
                {" "}
                Feedback
              </li>
              <li
                className={`fs-18px weight-4 ${
                  isBellow500px ? "mb-15px" : "mb-25px"
                } pointer`}
              >
                {" "}
                Developers
              </li>
              <li
                className={`fs-18px weight-4 ${
                  isBellow500px ? "mb-15px" : "mb-25px"
                } pointer`}
              >
                {" "}
                StreamKit
              </li>
            </ul>
          </div>
          <div className={styles.footerBox}>
            <p
              className={`pink fs-24px weight-6 ${
                isBellow500px ? "mb-20px" : "mb-30px"
              }`}
            >
              Policies
            </p>
            <ul>
              <li
                className={`fs-18px weight-4 ${
                  isBellow500px ? "mb-15px" : "mb-25px"
                } pointer`}
              >
                {" "}
                Terms
              </li>
              <li
                className={`fs-18px weight-4 ${
                  isBellow500px ? "mb-15px" : "mb-25px"
                } pointer`}
              >
                {" "}
                Privacy
              </li>
              <li
                className={`fs-18px weight-4 ${
                  isBellow500px ? "mb-15px" : "mb-25px"
                } pointer`}
              >
                Cookie Settings
              </li>
              <li
                className={`fs-18px weight-4 ${
                  isBellow500px ? "mb-15px" : "mb-25px"
                } pointer`}
              >
                {" "}
                Guidelines
              </li>
              <li
                className={`fs-18px weight-4 ${
                  isBellow500px ? "mb-15px" : "mb-25px"
                } pointer`}
              >
                Acknowledgements
              </li>
              <li
                className={`fs-18px weight-4 ${
                  isBellow500px ? "mb-15px" : "mb-25px"
                } pointer`}
              >
                {" "}
                Licenses
              </li>
              <li
                className={`fs-18px weight-4 ${
                  isBellow500px ? "mb-15px" : "mb-25px"
                } pointer`}
              >
                {" "}
                Moderation
              </li>
            </ul>
          </div>
        </div>

        {isBellow920px ? (
          <p className="fs-18px black weight-4 text-center">
            <span className="weight-7">2022</span> @ copyrights, all right
            reserved.
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default Footer;
