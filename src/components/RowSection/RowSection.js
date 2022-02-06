import React from "react";
import styles from "./RowSection.module.css";

function RowSection({
  title,
  subtitle,
  img,
  content,
  reverse = false,
  imgWrapperStyle,
  imgStyle,
}) {
  return (
    <div className={`${styles.section} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.left}>
        <div className="mb-50px">
          {content ? (
            content
          ) : (
            <>
              <h3 className="mb-15px weight-5 capitalize">{title}</h3>
              <p className="fs-18px weight-4 lh-1_5 gray">{subtitle}</p>
            </>
          )}
        </div>
        <button className="button-pink fs-16px weight-7 white pointer">
          Learn More
        </button>
      </div>
      <div className={styles.right} style={imgWrapperStyle}>
        <img src={img} alt="" style={imgStyle} />
      </div>
    </div>
  );
}

export default RowSection;
