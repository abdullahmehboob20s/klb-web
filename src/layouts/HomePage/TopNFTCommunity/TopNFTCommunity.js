import React, { useRef } from "react";
import styles from "./TopNFTCommunity.module.css";

import cardimg1 from "assets/images/cardimg1.png";
import cardimg2 from "assets/images/cardimg2.png";
import cardimg3 from "assets/images/cardimg3.png";
import cardimg4 from "assets/images/cardimg4.png";
import Ellipse from "assets/images/Ellipse-2.png";

import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import SwiperCore, { Navigation } from "swiper";
import NFTCommunityCard from "components/Cards/NFTCommunityCard/NFTCommunityCard";
SwiperCore.use([Navigation]);

function TopNFTCommunity() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <div className="container-wrapper relative">
      <img src={Ellipse} className={styles.Ellipse} alt="" />
      <div className="text-center mb-50px">
        <div className="mb-15px">
          <p className="light-pink-box pink fs-14px weight-5 uppercase w-fit-content margin-center">
            MARKETPLACE
          </p>
        </div>
        <h2>Top NFT Community</h2>
      </div>

      <div className={styles.slider}>
        <button
          className={`topNftSliderButton pointer`}
          ref={navigationPrevRef}
        >
          <HiArrowNarrowLeft size={16} />
        </button>
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          style={{
            paddingBottom: "6rem",
            flex: 1,
          }}
          breakpoints={{
            1200: {
              spaceBetween: 30,
              slidesPerView: 4,
            },
            900: {
              spaceBetween: 20,
              slidesPerView: 3,
            },
            620: {
              spaceBetween: 10,
              slidesPerView: 2,
            },
            200: {
              spaceBetween: 10,
              slidesPerView: 1,
            },
          }}
        >
          <SwiperSlide>
            <NFTCommunityCard
              title="Ape Crypto"
              subtitle="16k Members"
              img={cardimg1}
            />
          </SwiperSlide>
          <SwiperSlide>
            <NFTCommunityCard
              title="Biddy Crypto"
              subtitle="16k Members"
              img={cardimg2}
            />
          </SwiperSlide>
          <SwiperSlide>
            <NFTCommunityCard
              title="Sandy Crypto"
              subtitle="16k Members"
              img={cardimg3}
            />
          </SwiperSlide>
          <SwiperSlide>
            <NFTCommunityCard
              title="MIleay Crypto"
              subtitle="16k Members"
              img={cardimg4}
            />
          </SwiperSlide>
        </Swiper>
        <button
          className={`topNftSliderButton pointer`}
          ref={navigationNextRef}
        >
          <HiArrowNarrowRight size={16} />
        </button>
      </div>
      <button className="button-orange fs-18px weight-5 uppercase radius-30px white pointer block margin-center">
        explore more
      </button>
    </div>
  );
}

export default TopNFTCommunity;
