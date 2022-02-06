import RowSection from "components/RowSection/RowSection";
import React from "react";
import styles from "./NFTCommunity.module.css";
import img from "assets/images/invite-only.png";
import img2 from "assets/images/easy.png";
import img3 from "assets/images/collaboration.png";
import img4 from "assets/images/join.png";
import Ellipse from "assets/images/Ellipse-2.png";
import useMediaQuery from "hooks/useMediaQuery";
import InviteOnly from "layouts/InviteOnly/InviteOnly";
import EasyHangingOut from "./Components/EasyHangingOut/EasyHangingOut";
import Collaboration from "./Components/Collaboration/Collaboration";
import JoinCommunity from "./Components/JoinCommunity/JoinCommunity";

function NFTCommunity() {
  const isBellow800px = useMediaQuery("(max-width : 800px)");

  return (
    <div>
      <div className="container-wrapper relative">
        <img src={Ellipse} className={styles.Ellipse1} alt="" />
        <img src={Ellipse} className={styles.Ellipse2} alt="" />

        <div className="text-center mb-150px">
          <div className="mb-15px">
            <p className="light-pink-box pink fs-14px weight-5 uppercase w-fit-content margin-center">
              process
            </p>
          </div>
          <h2>Introducing a new NFT Community</h2>
        </div>

        <div className="mb-100px">
          <InviteOnly />
        </div>
        <div className="mb-100px">
          <EasyHangingOut />
        </div>
        <div className="mb-100px">
          <Collaboration />
        </div>
        <div>
          <JoinCommunity />
        </div>
      </div>
    </div>
  );
}

export default NFTCommunity;
