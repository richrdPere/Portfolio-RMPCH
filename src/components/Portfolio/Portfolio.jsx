import React from "react";

// CSS
import "../../css/portfolio.css";

// Components (Componentes)
import Proyecto from "./Proyecto";

// Languaje
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/display-name
const Portfolio = React.forwardRef((props, ref) => {
  // Props
  const { proyects } = props;

  // Languajes
  const [t, i18n] = useTranslation("global");

  return (
    <section className="py-16 text-center" ref={ref}>
      {/* Title */}
      <header className="resume__subheader mt-5">
        <h2 className="resume_subtitle ">
          <span className="text-4xl  mb-16 md:text-5xl">
            {t("portafolio.titlePortfolio1")} -{" "}
            <span className="text-green-color">
              {t("portafolio.titlePortfolio2")}
            </span>
          </span>
        </h2>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 ">

        {proyects.map((proyect, index) => (
          <Proyecto
            key={index}
            proyect={proyect}
            t={t}
          />
        ))}

        {/* 0.- Proyecto */}
        {/* <div className="flex px-3 py-3 bg-card-color movingToTop">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://tailwindcss.com/img/card-top.jpg"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 py-4 text-left">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                #winter
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 content-evenly">
              <div className="grid content-center">
                <a
                  href="#"
                  target="_blank"
                  className="p-2 text-center transition duration-150 rounded-lg bg-indigo-600 hover:bg-indigo-600/80"
                >
                  Github
                </a>
              </div>

              <div className="grid content-center">
                <a
                  href="#"
                  target="_blank"
                  className="p-2 text-center transition duration-150 rounded-lg bg-green-color hover:bg-green-color/80"
                >
                  Live demo
                </a>
              </div>
            </div>
          </div>
        </div> */}

        {/* 1.- Proyecto */}
        {/* <article className="max-w-sm bg-card-color border   py-6 px-3 border-b-2 border-transparent movingToTop">
          <figure className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="gallery__containerImagen">
              <a href="#" className="gallery__link">
                <img
                  className="w-full gallery__image"
                  src="img/proyecto-1.jpg"
                  alt="1ra imagen de la galeria"
                />
              </a>
            </div>

            <figcaption className="gallery__title ">
              <span className="subtitle__color">Cards - Rick and Morty</span>
            </figcaption>

            <div className="grid grid-cols-2 gap-4 content-evenly">
              <div className="grid content-center">
                <a
                  href="#"
                  target="_blank"
                  className="p-2 text-center transition duration-150 rounded-lg bg-indigo-600 hover:bg-indigo-600/80"
                >
                  Github
                </a>
              </div>

              <div className="grid content-center">
                <a
                  href="#"
                  target="_blank"
                  className="p-2 text-center transition duration-150 rounded-lg bg-green-color hover:bg-green-color/80"
                >
                  Live demo
                </a>
              </div>
            </div>
          </figure>
        </article> */}

        {/* 2.- Proyecto */}
        

        {/* 3.- Proyecto */}
       

        
      </div>
    </section>
  );
});

export default Portfolio;
