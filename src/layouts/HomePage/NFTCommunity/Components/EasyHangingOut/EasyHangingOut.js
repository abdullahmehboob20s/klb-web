import React from "react";
import styles from "./EasyHangingOut.module.css";
import easyUser1 from "assets/images/easyUser1.png";
import hangingImgTopRight from "assets/images/hangingImgTopRight.png";
import hangingImgLeftBottom from "assets/images/hangingImgLeftBottom.png";
import useMediaQuery from "hooks/useMediaQuery";
import nft1 from "assets/images/nfts/1.png";
import nft2 from "assets/images/nfts/2.png";
import nft3 from "assets/images/nfts/3.png";
import nft4 from "assets/images/nfts/4.png";
import nft5 from "assets/images/nfts/5.png";

const data = [
  { profilePic: nft1, name: "MACRO MICRO", id: "0x86efbA957d52BbEB01xc" },
  { profilePic: nft2, name: "MACRO MICRO", id: "0x86efbA957d52BbEB01xc" },
  { profilePic: nft3, name: "MACRO MICRO", id: "0x86efbA957d52BbEB01xc" },
  { profilePic: nft4, name: "MACRO MICRO", id: "0x86efbA957d52BbEB01xc" },
  { profilePic: nft5, name: "MACRO MICRO", id: "0x86efbA957d52BbEB01xc" },
];

const Card = ({ title, id, img }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_left}>
        <img src={img} className={styles.cardImg} alt="" />
        <div className={styles.cardContent}>
          <p className={`${styles.title} black weight-7 uppercase`}>{title}</p>
          <p className={`${styles.id} black opacity-0_5 weight-5`}>{id}</p>
        </div>
      </div>
      <div className={styles.card_right}>
        <button className={styles.cardBtn}>Lern More</button>
      </div>
    </div>
  );
};

function EasyHangingOut() {
  const isBellow1200px = useMediaQuery("(max-width : 1200px)");
  const isBellow450px = useMediaQuery("(max-width : 450px)");

  return (
    <div className={`${styles.section}`}>
      <div className={`${styles.left} relative`}>
        <div className={`${styles.cardsContainer} relative`}>
          <img
            src={hangingImgTopRight}
            className={styles.hangingImgTopRight}
            alt=""
          />
          <img
            src={hangingImgLeftBottom}
            className={styles.hangingImgLeftBottom}
            alt=""
          />
          {data.map((content, index) => (
            <div
              className={styles.cardWrapper}
              style={{
                marginLeft:
                  index * (isBellow1200px ? (isBellow450px ? 10 : 30) : 40) +
                  "px",
              }}
            >
              <Card
                title={content.name}
                id={content.id}
                img={content.profilePic}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.right}>
        <div className="mb-50px">
          <h3 className="mb-15px weight-5 capitalize">
            Where hanging <br /> out is easy
          </h3>
          <p className="fs-18px weight-4 lh-1_5 gray">
            Collectors can tip what they can afford and support creators without
            breaking the bank.
          </p>
        </div>
        <button className="button-pink fs-16px weight-7 white pointer">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default EasyHangingOut;
