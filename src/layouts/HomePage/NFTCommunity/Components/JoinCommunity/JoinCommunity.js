import React from "react";
import styles from "./JoinCommunity.module.css";
import joinCommunityImg1 from "assets/images/joinCommunityImg1.png";
import joinCommunityImg2 from "assets/images/joinCommunityImg2.png";
import joinCommunityImg3 from "assets/images/joinCommunityImg3.png";
import joinCommunityImg4 from "assets/images/joinCommunityImg4.png";
import statsImg1 from "assets/images/statsImg1.png";
import statsImg2 from "assets/images/statsImg2.png";

const GridItem = ({ img, imgStyles, pillStyles }) => {
  return (
    <div>
      <div className={`${styles.joinCommunityImg} relative`} style={imgStyles}>
        <img src={img} className={`w-full`} alt="" />
        <div className={styles.statsPill} style={pillStyles}>
          <div className={styles.statsImages}>
            <img src={statsImg1} alt="" />
            <img src={statsImg2} alt="" />
          </div>
          <p className={`${styles.statsValue} weight-6`}>16K</p>
        </div>
      </div>
    </div>
  );
};

function JoinCommunity() {
  return (
    <div className={`${styles.section}`}>
      <div className={styles.left}>
        <GridItem imgStyles={{ width: "60%" }} img={joinCommunityImg1} />
        <GridItem
          imgStyles={{ width: "80%" }}
          pillStyles={{ right: "unset", left: "-30%" }}
          img={joinCommunityImg2}
        />
        <GridItem
          imgStyles={{ width: "100%" }}
          pillStyles={{ bottom: "60px", right: "-20%" }}
          img={joinCommunityImg3}
        />
        <GridItem
          imgStyles={{ width: "70%" }}
          pillStyles={{ right: "unset", left: "-30%" }}
          img={joinCommunityImg4}
        />
      </div>
      <div className={styles.right}>
        <div className="mb-50px">
          <h3 className="mb-15px weight-5 capitalize">
            Join the Community in one platform
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
    </div>
  );
}

export default JoinCommunity;
