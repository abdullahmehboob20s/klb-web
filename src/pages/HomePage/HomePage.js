import BottomBar from "layouts/BottomBar/BottomBar";
import Footer from "layouts/Footer/Footer";
import CollectibleContent from "layouts/HomePage/CollectibleContent/CollectibleContent";
import FAQ from "layouts/HomePage/FAQ/FAQ";
import Hero from "layouts/HomePage/Hero/Hero";
import NewsAndBlogs from "layouts/HomePage/NewsAndBlogs/NewsAndBlogs";
import NFTCommunity from "layouts/HomePage/NFTCommunity/NFTCommunity";
import TopNFTCommunity from "layouts/HomePage/TopNFTCommunity/TopNFTCommunity";
import Navbar from "layouts/Navbar/Navbar";
import React from "react";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="mb-100px">
        <NFTCommunity />
      </div>
      <div className="mb-150px">
        <TopNFTCommunity />
      </div>
      <div className="mb-100px">
        <FAQ />
      </div>
      <div className="mb-100px">
        <NewsAndBlogs />
      </div>
      <BottomBar />
    </div>
  );
}

export default HomePage;
