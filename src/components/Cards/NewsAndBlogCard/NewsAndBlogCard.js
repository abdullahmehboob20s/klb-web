import React from "react";
import styles from "./NewsAndBlogCard.module.css";

const NewsAndBlogCard = ({
  title,
  subtitle,
  img,
  titleStyles,
  subtitleStyles,
}) => {
  return (
    <div className={styles.card}>
      <img src={img} className="w-full mb-15px" alt="" />
      <div className={styles.content}>
        <h4 className="weight-7 mb-10px" style={titleStyles}>
          {title}
        </h4>
        <p className="fs-14px gray lh-1_5" style={subtitleStyles}>
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default NewsAndBlogCard;
