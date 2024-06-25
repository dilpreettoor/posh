import React, { useState, useEffect } from "react";
import Header from "../../components/Header/header";
import Background from "../../components/Background/Hero/Background";
import Hero from "../../components/Hero/Hero";
import ArchitecturePage from "../../components/ArchitechturePage/ArchitechturePage";
import InteriorPage from "../../components/InteriorPage/InteriorPage";
import LandscapingPage from "../../components/LandscapingPage/LandscapingPage";

const Home = () => {
 
  return (
    <>
    <Background>
    <Header/>
    <Hero/>
    </Background>
    <ArchitecturePage/>
    <InteriorPage/>
    <LandscapingPage/>
    </>
  );
};

export default Home;
