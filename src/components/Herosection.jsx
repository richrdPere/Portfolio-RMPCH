// eslint-disable-next-line no-unused-vars
import React from "react";

// Languaje
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/display-name
const Herosection = ({ scrollToContact }) => {
  // Languajes
  const [t, i18n] = useTranslation("global");

  return (
    <section className="mt-20 pt-10 pb-16 md:flex justify-around items-center gap-8">
      <figure className="md:order-1">
        <img
          src="img/user_richard.png"
          className="w-[90%] aspect-square object-cover rounded-full max-w-sm mx-auto"
        />
      </figure>

      <article className="text-center mt-8 md:w-1/2 md:text-left">
        <h1 className="text-4xl md:text-5xl relative before:absolute before:inset-0 before:animate-typewriter before:bg-color-background after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-white">
          {t("hero_section.greeting")}
        </h1>
        <p className="text-gray-color text-xl mt-3 mb-6 ">
          Full Stack Developer | React | Redux | Express | PostgresSQL.
        </p>

        <div
          className="grid 
                    grid-cols-[repeat(auto-fit,minmax(170px,1fr))] auto-rows-[60px] gap-8 max-w-lg mx-auto md:mx-0"
        >
          {/* Download CV */}
          <a
            href="https://drive.google.com/uc?export=download&id=1XWI64y5RyPJR_og-MEOk0hbH9Y_n9YH5"
            className="
              group
              p-5
              cursor-pointer 
              relative  
              text-xl 
              font-normal 
              border-0 
              flex 
              items-center 
              justify-center
              bg-transparent
              border-green-color
              h-auto  
              w-[170px]  
              overflow-hidden   
              transition-all
              duration-100
              hover:bg-indigo-600
              "
            target="_blank"
          >
            <span
              className="
                group-hover:w-full 
                absolute 
                left-0 
                h-full 
                w-5 
                border-y
                border-l
                border-green-color
                  transition-all
                duration-500
              
                "
            ></span>

            <p
              className="group-hover:opacity-0 group-hover:translate-x-[-100%] absolute translate-x-0 transition-all
         duration-200"
            >
              {t("hero_section.cv")}
            </p>

            <span className="group-hover:translate-x-0  group-hover:opacity-100 absolute translate-x-full opacity-0  transition-all duration-200">
              {t("hero_section.thanks")}
            </span>

            <span className="group-hover:w-full absolute right-0 h-full w-5  border-y border-r  border-green-color transition-all duration-500"></span>
          </a>

          {/* Contact me */}
          <button
            onClick={scrollToContact}
            className="
              group
              p-5
              cursor-pointer 
              relative  
              text-xl 
              font-normal 
              border-0 
              flex 
              items-center 
              justify-center
              bg-transparent
              border-green-color
              h-auto  
              w-[170px]  
              overflow-hidden   
              transition-all
              duration-100
              hover:bg-indigo-700
              "
          >
            <span
              className="
                group-hover:w-full 
                absolute 
                left-0 
                h-full 
                w-5 
                border-y
                border-l
                border-green-color
                  transition-all
                duration-500
              
                "
            ></span>

            <p
              className="group-hover:opacity-0 group-hover:translate-x-[-100%] absolute translate-x-0 transition-all
         duration-200"
            >
              {t("hero_section.contactMe")}
            </p>

            <span className="group-hover:translate-x-0  group-hover:opacity-100 absolute translate-x-full opacity-0  transition-all duration-200">
              {t("hero_section.thanks")}
            </span>

            <span className="group-hover:w-full absolute right-0 h-full w-5  border-y border-r  border-green-color transition-all duration-500"></span>
          </button>
        </div>
      </article>
    </section>
  );
};

export default Herosection;
