import React from "react";
import styles from "./Collaboration.module.css";
import collaborationImg1 from "assets/images/collaborationImg1.png";
import collaborationImg2 from "assets/images/collaborationImg2.png";
import collaborationImg3 from "assets/images/collaborationImg3.png";
import collaborationImg4 from "assets/images/collaborationImg4.png";
import futureImg from "assets/images/futureImg.png";
import NewsAndBlogCard from "components/Cards/NewsAndBlogCard/NewsAndBlogCard";
import socialIcon1 from "assets/images/socialIcon1.png";
import socialIcon2 from "assets/images/socialIcon2.png";
import socialIcon3 from "assets/images/socialIcon3.png";
import socialIcon4 from "assets/images/socialIcon4.png";
import socialIcon5 from "assets/images/socialIcon5.png";
import useMediaQuery from "hooks/useMediaQuery";

function Collaboration() {
  const isBellow450px = useMediaQuery("(max-width : 450px)");
  return (
    <div className={`${styles.section} `}>
      <div className={styles.left}>
        <div className="mb-50px">
          <h3 className="mb-15px weight-5 capitalize">
            Collabration with awsome communities
          </h3>
          <p className="fs-18px weight-4 lh-1_5 gray">
            Low-latency voice feels like you’re in the same room. Wave hello
            over video, watch friends stream their games, or gather up and have
            a drawing session.
          </p>
        </div>
        <button className="button-pink fs-16px weight-7 white pointer">
          Learn More
        </button>
      </div>
      <div className={styles.right}>
        <div className={styles.contents}>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.socialIcon}>
              <img className="w-full" src={socialIcon1} alt="" />
            </a>
            <a href="#" className={styles.socialIcon}>
              <img className="w-full" src={socialIcon2} alt="" />
            </a>
            <a href="#" className={styles.socialIcon}>
              <img className="w-full" src={socialIcon3} alt="" />
            </a>
            <a href="#" className={styles.socialIcon}>
              <img className="w-full" src={socialIcon4} alt="" />
            </a>
            <a href="#" className={styles.socialIcon}>
              <img className="w-full" src={socialIcon5} alt="" />
            </a>
          </div>
          <div className={styles.cardWrapper}>
            <NewsAndBlogCard
              title="Thoughts on the Future from Feature Portion Artists"
              subtitle="For our Digital Futures exhibition throughout January 2022, we've asked artists to imagine the year 2121"
              img={futureImg}
              titleStyles={{ fontSize: isBellow450px ? "10px" : "16px" }}
              subtitleStyles={{ fontSize: isBellow450px ? "8px" : "10px" }}
            />
          </div>
        </div>
        <div className={styles.imagesGrid}>
          <img src={collaborationImg1} className="w-full" alt="" />
          <img src={collaborationImg2} className="w-full" alt="" />
          <img src={collaborationImg3} className="w-full" alt="" />
          <img src={collaborationImg4} className="w-full" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Collaboration;
