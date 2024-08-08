// React
import { useRef, useState } from "react";

// Components (Componentes)
import Header from "./components/Header";
import Footer from "./components/Footer";

import About from "./components/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills/Skills";
import ContactMe from "./components/ContactMe";
//import Curriculum from "./components/Curriculum";
import Herosection from "./components/Herosection";
import Certificates from "./components/CertificatesMe/Certificates";
import DarkMode from "./components/DarkMode/DarkMode";

// Languages
import { useTranslation } from "react-i18next";

// Data (Datos)
import { certificates } from "./data/certificates";
import { skills } from "./data/skills";

function PortfolioApp() {
  // Languaje
  const [t, i18n] = useTranslation("global");

  // Use states
  const [language, setLanguage] = useState("es"); // Idioma predeterminado

  const handleLanguageChange = () => {
    setLanguage((prevLanguage) => (prevLanguage === "es" ? "en" : "es"));
  };

  // UseRef (Para referenciar elementos dentro del Lading Page)

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

  // 3.- PARA CERTIFICATES
  const certificateRef = useRef(null);

  const scrollToCertificate = () => {
    certificateRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // 4.- PARA SKILL
  const skillRef = useRef(null);

  const scrollToSkill = () => {
    skillRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // 5.- PARA PORTFOLIO
  const portfolioRef = useRef(null);

  const scrollToPortfolio = () => {
    portfolioRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // 6.- PARA CONTACTO
  const contactMeRef = useRef(null);

  const scrollToContact = () => {
    contactMeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-[90%] mx-auto overflow-hidden max-w-screen-xl">
      {/* <DarkMode/> */}

      <Header
        scrollToAbout={scrollToAbout}
        scrollToCurriculum={scrollToCurriculum}
        scrollToPortfolio={scrollToPortfolio}
        scrollToContact={scrollToContact}
        scrollToSkill={scrollToSkill}
        scrollToHeroSection={scrollToHeroSection}
        scrollToCertificate={scrollToCertificate}
        t={t}
        i18n={i18n}
        ref={heroSectionRef}
      />

      <Herosection scrollToContact={scrollToContact} />

      <main>
        {/* 1.- About Me */}
        <About ref={aboutMeRef} />

        {/* 2.- Curriculum */}
        {/* <Curriculum ref={curriculumMeRef} /> */}

        {/* 3.- What i do */}
        <Portfolio ref={portfolioRef} />

        {/* 4.- Skills */}
        <Skills skills={skills} ref={skillRef} />

        {/* 5.- Certificates */}
        <Certificates certificates={certificates} ref={certificateRef} />

        {/* 6.- Contact me */}
        <ContactMe ref={contactMeRef} />
      </main>

      <Footer />
    </div>
  );
}

export default PortfolioApp;
