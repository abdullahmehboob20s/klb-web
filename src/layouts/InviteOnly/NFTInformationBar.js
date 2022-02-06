import React from "react";
import styles from "./NFTInformationBar.module.css";

const NFTInformationBar = ({ title, id, img, time }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgContainer}>
        <img src={img} alt="" />
      </div>
      <div className={styles.content}>
        <div className={styles.content_row}>
          <p className={`${styles.title} weight-7 black uppercase`}>APe NFT</p>
          <p className={`${styles.content_time} blue weight-5`}>
            16 Minutes Ago
          </p>
        </div>
        <p className={`${styles.content_id} black opacity-0_4 weight-5`}>
          0x86efbA957d52BbEB01B2e8b5495298744541EF5c
        </p>
      </div>
    </div>
  );
};

export default NFTInformationBar;
