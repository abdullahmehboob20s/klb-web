import Accordion from "components/Accordion/Accordion";
import React from "react";
import styles from "./FAQ.module.css";
import Ellipse from "assets/images/Ellipse-2.png";

function FAQ() {
  return (
    <div>
      <div className="container-wrapper relative">
        <img src={Ellipse} className={styles.Ellipse1} alt="" />
        <img src={Ellipse} className={styles.Ellipse2} alt="" />

        <div className="text-center mb-50px">
          <div className="mb-15px">
            <p className="light-pink-box pink fs-14px weight-5 uppercase w-fit-content margin-center">
              FAQ
            </p>
          </div>
          <h2>Frequently Asked Questions</h2>
        </div>
      </div>

      <div className="container-wrapper-2">
        <div className={styles.faqs}>
          <Accordion title="What does NFT Collection Comprise of?">
            <p className="fs-18px weight-4 black">
              To sell your NFTs on a marketplace, you’ll need to locate them in
              your collection, click on them and find the “sell” button.
            </p>
          </Accordion>
          <Accordion title="How to get our NFT?">
            <p className="fs-18px weight-4 black">
              To sell your NFTs on a marketplace, you’ll need to locate them in
              your collection, click on them and find the “sell” button.
            </p>
          </Accordion>
          <Accordion title="How much does our NFT cost?">
            <p className="fs-18px weight-4 black">
              To sell your NFTs on a marketplace, you’ll need to locate them in
              your collection, click on them and find the “sell” button.
            </p>
          </Accordion>
          <Accordion title="Will you list your NFT on OpenSea?">
            <p className="fs-18px weight-4 black">
              To sell your NFTs on a marketplace, you’ll need to locate them in
              your collection, click on them and find the “sell” button.
            </p>
          </Accordion>
          <Accordion title="What is a Rarity NFT?">
            <p className="fs-18px weight-4 black">
              To sell your NFTs on a marketplace, you’ll need to locate them in
              your collection, click on them and find the “sell” button.
            </p>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
