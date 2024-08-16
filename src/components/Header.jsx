/* eslint-disable react/prop-types */
import React, { useState } from "react";

// Languaje
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/display-name
const Header = React.forwardRef((props, ref) => {
  // Props
  const {
    scrollToAbout,
    scrollToCurriculum,
    scrollToPortfolio,
    scrollToContact,
    scrollToSkill,
    scrollToHeroSection,
    scrollToCertificate,
    t,
    i18n,
  } = props;

  // Languajes
  // const [t, i18n] = useTranslation("global");

  // States
  const [isSpanishFirst, setIsSpanishFirst] = useState(i18n.language === "es");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleToggle = () => {
    const newLanguage = isSpanishFirst ? "en" : "es"; // Cambiar el estado para alternar los botones
    i18n.changeLanguage(newLanguage);
    setIsSpanishFirst(!isSpanishFirst);
  };

  return (
    <section ref={ref}>
      <header className="mt-5 flex h-20 items-center justify-around bg-transparend fixed top-0 left-0 w-full z-50">
        <button onClick={scrollToHeroSection} className="w-1/2 max-w-[300px]">
          {/* <img src="icons/logo.svg" className="block w-full" /> */}
          <header className="resume__subheader mt-5">
            <h1 className="resume_subtitle ">
              <span className="text-3xl md:text-4xl hover:text-green-color">
                Richard Pereira.
              </span>
            </h1>
          </header>
        </button>

        <input  type="checkbox" id="menu" className="peer/menu hidden" />

        <label
          htmlFor="menu"
          onClick={toggleMenu}
          className="w-10 h-10 bg-open-menu bg-cover bg-center bg-green-color rounded-lg  cursor-pointer peer-checked/menu:bg-close-menu transition-all z-40 md:hidden"
        ></label>

        <ul className="fixed inset-0 bg-menu-color px-[5%] grid gap-6 auto-rows-max content-center justify-items-center clip-circle-0 peer-checked/menu:clip-circle-full transition-[clip-path] duration-500 md:clip-circle-full md:relative md:grid-flow-col md:p-0 md:bg-transparent">
          <li>
            <button
              onClick={()=> {scrollToAbout(); closeMenu()}}
              className=" h-9 w-20 hover:text-green-color flex items-center justify-center relative cursor-pointer  before:bg-green-color hover:rounded-b-none before:absolute before:-bottom-0 before:-left-0  before:block before:h-[4px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
            >
              {t("header.about")}
            </button>
          </li>

          {/* <li>
            <button
              onClick={scrollToCurriculum}
              className=" h-9 w-20 hover:bg-green-color flex items-center justify-center"
            >
              Curriculum
            </button>
          </li> */}

          <li>
            <button
              onClick={scrollToPortfolio}
              className=" h-9 w-20 hover:text-green-color flex items-center justify-center relative  cursor-pointer  before:bg-green-color hover:rounded-b-none before:absolute before:-bottom-0 before:-left-0  before:block before:h-[4px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
            >
              {t("header.portfolio")}
            </button>
          </li>

          <li>
            <button
              onClick={scrollToSkill}
              className=" h-9 w-20 hover:text-green-color flex items-center justify-center relative  cursor-pointer  before:bg-green-color hover:rounded-b-none before:absolute before:-bottom-0 before:-left-0  before:block before:h-[4px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
            >
              {t("header.skills")}
            </button>
          </li>

          <li>
            <button
              onClick={scrollToCertificate}
              className=" h-9 w-20 hover:text-green-color flex items-center justify-center relative  cursor-pointer  before:bg-green-color hover:rounded-b-none before:absolute before:-bottom-0 before:-left-0  before:block before:h-[4px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
            >
              {t("header.certificates")}
            </button>
          </li>

          <li>
            <button
              onClick={scrollToContact}
              className=" h-9 w-21 hover:text-green-color flex items-center justify-center relative  cursor-pointer  before:bg-green-color hover:rounded-b-none before:absolute before:-bottom-0 before:-left-0  before:block before:h-[4px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100"
            >
              {t("header.contact")}
            </button>
          </li>
        </ul>

        <button onClick={handleToggle}>
          <img
            src={
              isSpanishFirst
                ? "img/iconosPng/spain.png"
                : "img/iconosPng/usa.png"
            }
            alt={isSpanishFirst ? "Español" : "Inglés"}
            style={{ width: "30px", height: "30px" }}
          />
        </button>
      </header>
    </section>
  );
});

export default Header;
