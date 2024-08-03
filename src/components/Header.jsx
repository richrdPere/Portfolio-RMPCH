/* eslint-disable react/prop-types */
import React from "react";

// React-router-dom
import { useNavigate, Link } from "react-router-dom";

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
  } = props;

  // Navigate
  const navigate = useNavigate();

  return (
    <section ref={ref}>
      <header className="flex h-20 items-center justify-around bg-transparend fixed top-0 left-0 w-full z-50">
        <button onClick={scrollToHeroSection} className="w-1/2 max-w-[300px]">
          {/* <img src="icons/logo.svg" className="block w-full" /> */}
          <h1 className="text-3xl md:text-4xl">Richard Pereira.</h1>
        </button>

        <input type="checkbox" id="menu" className="peer/menu hidden" />

        <label
          htmlFor="menu"
          className="w-10 h-10 bg-open-menu bg-cover bg-center bg-green-color rounded-lg  cursor-pointer peer-checked/menu:bg-close-menu transition-all z-40 md:hidden"
        ></label>

        <ul className="fixed inset-0 bg-menu-color px-[5%] grid gap-6 auto-rows-max content-center justify-items-center clip-circle-0 peer-checked/menu:clip-circle-full transition-[clip-path] duration-500 md:clip-circle-full md:relative md:grid-flow-col md:p-0 md:bg-transparent">
          <li>
            <button
              onClick={scrollToAbout}
              className=" h-9 w-20 hover:bg-green-color flex items-center justify-center"
            >
              About Me
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
              onClick={scrollToSkill}
              className=" h-9 w-20 hover:bg-green-color flex items-center justify-center"
            >
              Skills
            </button>
          </li>

          <li>
            <button
              onClick={scrollToCertificate}
              className=" h-9 w-20 hover:bg-green-color flex items-center justify-center"
            >
              Certificates
            </button>
          </li>

          <li>
            <button
              onClick={scrollToPortfolio}
              className=" h-9 w-20 hover:bg-green-color flex items-center justify-center"
            >
              Portfolio
            </button>
          </li>

          <li>
            <button
              onClick={scrollToContact}
              className=" h-9 w-25 hover:bg-green-color flex items-center justify-center"
            >
              Contact Me
            </button>
          </li>
        </ul>
      </header>
    </section>
  );
});

export default Header;
