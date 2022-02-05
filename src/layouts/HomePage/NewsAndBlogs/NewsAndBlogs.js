import React, { useRef } from "react";
import styles from "./NewsAndBlogs.module.css";

import newsandblog1 from "assets/images/newsandblog1.png";
import newsandblog2 from "assets/images/newsandblog2.png";
import newsandblog3 from "assets/images/newsandblog3.png";
import Ellipse from "assets/images/Ellipse-2.png";

import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import SwiperCore, { Navigation, Pagination } from "swiper";
import NewsAndBlogCard from "components/Cards/NewsAndBlogCard/NewsAndBlogCard";
import useMediaQuery from "hooks/useMediaQuery";
SwiperCore.use([Pagination, Navigation]);

function NewsAndBlogs() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const isBellow500px = useMediaQuery("(max-width : 500px)");
  return (
    <div className={styles.wrapper}>
      <div className="container-wrapper relative">
        <img src={Ellipse} className={styles.Ellipse} alt="" />

        <div className="text-center mb-50px">
          <div className="mb-10px">
            <p className="light-pink-box pink fs-14px weight-5 uppercase w-fit-content margin-center">
              news
            </p>
          </div>
          <h2>Latest News & Blogs</h2>
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
            slidesPerView={3}
            // pagination={true}
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
              paddingBottom: isBellow500px ? "3.5rem" : "5rem",
            }}
            pagination={true}
            breakpoints={{
              1200: {
                spaceBetween: 30,
                slidesPerView: 3,
              },
              850: {
                spaceBetween: 20,
                slidesPerView: 2,
              },
              200: {
                spaceBetween: 10,
                slidesPerView: 1,
              },
            }}
          >
            <SwiperSlide>
              <NewsAndBlogCard
                title="Thoughts on the Future from Featured Portion Artists"
                subtitle="For our Digital Futures exhibition throughout January 2022, we've asked artists to imagine the year 2121"
                img={newsandblog1}
              />
            </SwiperSlide>
            <SwiperSlide>
              <NewsAndBlogCard
                title="Portion’s 21 Memorable Moments of 2021"
                subtitle="For our Digital Futures exhibition throughout January 2022, we've asked artists to imagine the year 2121"
                img={newsandblog2}
              />
            </SwiperSlide>
            <SwiperSlide>
              <NewsAndBlogCard
                title="What is the Metaverse and How it Works - Metaverse Explained"
                subtitle="For our Digital Futures exhibition throughout January 2022, we've asked artists to imagine the year 2121"
                img={newsandblog3}
              />
            </SwiperSlide>
            <SwiperSlide>
              <NewsAndBlogCard
                title="Thoughts on the Future from Featured Portion Artists"
                subtitle="For our Digital Futures exhibition throughout January 2022, we've asked artists to imagine the year 2121"
                img={newsandblog1}
              />
            </SwiperSlide>
            <SwiperSlide>
              <NewsAndBlogCard
                title="Portion’s 21 Memorable Moments of 2021"
                subtitle="For our Digital Futures exhibition throughout January 2022, we've asked artists to imagine the year 2121"
                img={newsandblog2}
              />
            </SwiperSlide>
            <SwiperSlide>
              <NewsAndBlogCard
                title="What is the Metaverse and How it Works - Metaverse Explained"
                subtitle="For our Digital Futures exhibition throughout January 2022, we've asked artists to imagine the year 2121"
                img={newsandblog3}
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
      </div>
    </div>
  );
}

export default NewsAndBlogs;
