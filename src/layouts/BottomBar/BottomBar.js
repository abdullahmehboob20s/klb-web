import Footer from "layouts/Footer/Footer";
import CollectibleContent from "layouts/HomePage/CollectibleContent/CollectibleContent";
import React from "react";
import styles from "./BottomBar.module.css";
import Ellipse from "assets/images/Ellipse.png";

function BottomBar() {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.upperWrapper}`}>
        <CollectibleContent />
      </div>
      <div className={styles.bottomBar}>
        <img src={Ellipse} className={styles.Ellipse} alt="" />
        <Footer />
      </div>
    </div>
  );
}

export default BottomBar;
