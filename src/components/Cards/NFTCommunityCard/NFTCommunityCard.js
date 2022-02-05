import useMediaQuery from "hooks/useMediaQuery";
import React from "react";
import styles from "./NFTCommunityCard.module.css";

function NFTCommunityCard({ title, subtitle, img }) {
  const isBellow600 = useMediaQuery("(max-width : 600px)");

  return (
    <div className={styles.card}>
      <img src={img} className="mb-15px" alt="" />
      <h4 className="weight-6 black mb-5px">{title}</h4>
      <p className="fs-16px weight-4 purple mb-15px">{subtitle}</p>
      <div className="flex justify-end">
        <button
          className="button-pink fs-12px white uppercase radius-30px pointer"
          style={{ padding: isBellow600 ? "10px 13px" : "15px 17px" }}
        >
          View derivative
        </button>
      </div>
    </div>
  );
}

export default NFTCommunityCard;
