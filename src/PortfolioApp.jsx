// React
import React, { useRef } from "react";

// React-router-doom
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";

// Components (Componentes)
import Header from "./components/Header";
import Footer from "./components/Footer";

import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import Curriculum from "./components/Curriculum";
import Herosection from "./components/Herosection";

function PortfolioApp() {
  // UseRef (Para refernciar elementos dentro del Lading Page)

  // 0.- PARA HERO SECTION
  const heroSectionRef = useRef(null);

  const scrollToHeroSection = () => {
    heroSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  // 1.- PARA ABOUT
  const aboutMeRef = useRef(null);

  const scrollToAbout = () => {
    aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
  };
  // 2.- PARA CURRICULUM
  const curriculumMeRef = useRef(null);

  const scrollToCurriculum = () => {
    curriculumMeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // 3.- PARA SKILL
  const skillRef = useRef(null);

  const scrollToSkill = () => {
    skillRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // 4.- PARA PORTFOLIO
  const portfolioRef = useRef(null);

  const scrollToPortfolio = () => {
    portfolioRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // 5.- PARA CONTACTO
  const contactMeRef = useRef(null);

  const scrollToContact = () => {
    contactMeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-[90%] mx-auto overflow-hidden max-w-screen-xl">
      <Header
        scrollToAbout={scrollToAbout}
        scrollToCurriculum={scrollToCurriculum}
        scrollToPortfolio={scrollToPortfolio}
        scrollToContact={scrollToContact}
        scrollToSkill={scrollToSkill}
        scrollToHeroSection={scrollToHeroSection}
        ref={heroSectionRef}
      />

      <Herosection ref={heroSectionRef}/>

      <main>
        {/* 1.- About Me */}
        <About ref={aboutMeRef} />

        {/* 2.- Curriculum */}
        <Curriculum ref={curriculumMeRef} />

        {/* 3.- Skills */}
        {/* <Skills ref={skillRef} /> */}

        {/* 4.- What i do */}
        <Portfolio ref={portfolioRef}/>

        {/* 5.- Contact me */}
        <ContactMe ref={contactMeRef} />
      </main>

      <Footer />
    </div>
  );
}

export default PortfolioApp;
