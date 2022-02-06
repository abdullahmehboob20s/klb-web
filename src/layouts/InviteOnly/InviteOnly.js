import React from "react";
import styles from "./InviteOnly.module.css";
import userImg from "assets/images/userImg.png";
import clientImg from "assets/images/clientImg.png";
import chatBoxLeftImg from "assets/images/chatBoxLeftImg.png";
import chatBoxRightImg from "assets/images/chatBoxRightImg.png";
import NFTInformationBar from "./NFTInformationBar";
import person1 from "assets/images/person-1.png";
import person2 from "assets/images/person-2.png";

const Chat = ({ isUser = false, img }) => {
  return (
    <div className={`${styles.message} ${isUser ? styles.user : ""}`}>
      <div
        className={styles.messageImg}
        style={{ background: img ? "" : "#696969" }}
      >
        {img ? <img src={img} alt="UserImg" /> : ""}
      </div>
      <div className={styles.messageCoversations}>
        <p></p>
        <p></p>
      </div>
    </div>
  );
};

function InviteOnly() {
  return (
    <div className={styles.section}>
      <div className={styles.left}>
        <div className="mb-50px">
          <h3 className="mb-15px weight-5 capitalize">
            Create an invite-only <br /> place where you <br /> belong
          </h3>
          <p className="fs-18px weight-4 lh-1_5 gray">
            You have to insist to the fact that people can join this very closed
            and hype community because he is a owner of the NFTs
          </p>
        </div>

        <button className="button-pink fs-16px weight-7 white pointer">
          Lern mehr
        </button>
      </div>

      <div className={styles.right}>
        <div className="w-fit-content relative">
          <NFTInformationBar img={person1} />
          <NFTInformationBar img={person2} />

          <div className={`${styles.chatBox} relative`}>
            <img
              src={chatBoxRightImg}
              className={styles.chatBoxRightImg}
              alt=""
            />

            <Chat />
            <Chat img={userImg} isUser={true} />
            <Chat img={clientImg} />
            <Chat img={userImg} isUser={true} />
            <Chat />
            <Chat img={userImg} isUser={true} />
            <img
              src={chatBoxLeftImg}
              className={styles.chatBoxLeftImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InviteOnly;