import useMediaQuery from "hooks/useMediaQuery";
import React from "react";
import styles from "./CollectibleContent.module.css";

function CollectibleContent() {
  const isBellow500px = useMediaQuery("(max-width : 500px)");
  return (
    <div className="container-wrapper">
      <div className={`${styles.card} text-center`}>
        <h2
          className={`${styles.title} white ${
            isBellow500px ? "mb-25px" : "mb-45px"
          } `}
        >
          Where Content <br /> Becomes Collectible
        </h2>
        <button
          className={`button-pink uppercase fs-18px black pointer weight-5`}
          style={{ background: "#FFE647" }}
        >
          DOWNLOAD APP
        </button>
      </div>
    </div>
  );
}

export default CollectibleContent;
