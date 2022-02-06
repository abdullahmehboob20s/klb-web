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

function NFTCommunity() {
  const isBellow800px = useMediaQuery("(max-width : 800px)");
  return (
    <div>
      <div className="container-wrapper relative">
        <img src={Ellipse} className={styles.Ellipse1} alt="" />
        <img src={Ellipse} className={styles.Ellipse2} alt="" />

        <div className="text-center mb-60px">
          <div className="mb-15px">
            <p className="light-pink-box pink fs-14px weight-5 uppercase w-fit-content margin-center">
              process
            </p>
          </div>
          <h2>Introducing a new NFT Community</h2>
        </div>

        <div className="mb-100px">
          {/* <RowSection
            content={
              <>
                <h3 className="mb-15px weight-5 capitalize">
                  Create an invite-only <br /> place where you <br /> belong
                </h3>
                <p className="fs-18px weight-4 lh-1_5 gray">
                  You have to insist to the fact that people can join this very
                  closed and hype community because he is a owner of the NFTs
                </p>
              </>
            }
            img={img}
            imgStyle={{ width: isBellow800px ? "100%" : "80%" }}
            imgWrapperStyle={{ flex: 1 }}
          /> */}

          <InviteOnly />
        </div>
        <div className="mb-100px">
          <RowSection
            content={
              <>
                <h3 className="mb-15px weight-5 capitalize">
                  Where hanging <br /> out is easy
                </h3>
                <p className="fs-18px weight-4 lh-1_5 gray">
                  Collectors can tip what they can afford and support creators
                  without breaking the bank.
                </p>
              </>
            }
            reverse={true}
            imgStyle={{ width: isBellow800px ? "100%" : "80%" }}
            imgWrapperStyle={{ flex: 1, justifyContent: "flex-start" }}
            img={img2}
          />
        </div>
        <div className="mb-100px">
          <RowSection
            title="Collabration with awsome communities"
            subtitle="Post something on social media and it automatically gets converted to a NFT and you can sell it."
            img={img3}
            imgStyle={{ width: isBellow800px ? "100%" : "90%" }}
            imgWrapperStyle={{ flex: 1 }}
          />
        </div>
        <div>
          <RowSection
            title="Join the Community in one platform"
            subtitle="Low-latency voice feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session."
            img={img4}
            reverse={true}
            imgStyle={{ width: "100%" }}
            imgWrapperStyle={{
              flex: 1,
              marginRight: isBellow800px ? 0 : "8rem",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default NFTCommunity;
