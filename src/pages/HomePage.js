import Clients from "parts/Clients";
import Footer from "parts/Footer";
import Header from "parts/Header";
import Hero from "parts/HomePage/Hero";
import BrowseRoom from "parts/HomePage/BrowseRoom";
import JustArrived from "parts/HomePage/JustArrived";
import Sitemap from "parts/Sitemap";
import React from "react";

export default function HomePage() {
  return (
    <>
      <Header theme="black" position="absolute" />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <Sitemap />
      <Footer />
    </>
  );
}
