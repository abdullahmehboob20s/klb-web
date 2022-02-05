import React from "react";
import styles from "./Hero.module.css";
import map from "assets/images/Map.png";
import Ellipse from "assets/images/Ellipse-2.png";

function Hero() {
  return (
    <div className={styles.wrapper}>
      <div className="container-wrapper relative">
        <img src={Ellipse} className={styles.Ellipse1} alt="" />
        <img src={Ellipse} className={styles.Ellipse2} alt="" />
        <div className={styles.section}>
          <div className={styles.left}>
            <p className="pink fs-14px uppercase weight-5 mb-15px light-pink-box w-fit-content">
              COMING SOON
            </p>
            <h1 className="lh-1_1 mb-20px">
              Where Content Becomes Collectible
            </h1>
            <p className="fs-20px gray lh-1_5 mb-50px">
              KlubX empowers NFT Owners & Community by allowing them to
              communicate with other NFT owners.
            </p>
            <button className="button-pink w-fit-content fs-18px pointer uppercase white">
              DOWNLOAD APP
            </button>
          </div>
          <div className={styles.right}>
            <img src={map} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
