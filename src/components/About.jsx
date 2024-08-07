import React from "react";

// Languaje
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/display-name
const About = React.forwardRef((props, ref) => {
  // Languajes
  const [t, i18n] = useTranslation("global");

  return (
    <section ref={ref} className="py-16 text-center">
      <header className="resume__subheader mt-5">
        <h2 className="resume_subtitle">
          <span className="text-4xl mb-16 md:text-5xl">
            {t("about.titleAbout1")}{" "}
            <span className="text-green-color">{t("about.titleAbout2")}</span>
          </span>
        </h2>
      </header>

      <p className="mt-8 mb-10 text-xl leading-normal text-gray-color md:w-4/5 md:mx-auto">
        <span className="text-green-color">{t("about.paragraphInitial")} </span>
        {t("about.firstParagraph")}
      </p>

      <p className="mt-5 mb-10 text-xl leading-normal text-gray-color md:w-4/5 md:mx-auto">
        {t("about.secondParagraph")}
      </p>

      <p className="mt-5 mb-16 text-xl leading-normal text-gray-color md:w-4/5 md:mx-auto">
        {t("about.thriedParagraph")}
      </p>

      <div className="grid gap-8 justify-center justify-items-center md:grid-cols-3">
        {/* Email */}
        <article className="w-max grid justify-items-center">
          <div className="icons-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="icons"
            >
              <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path>
            </svg>
          </div>

          <h3 className="text-2xl mt-4 mb-2">Email</h3>
          <p className="font-light">richrdpere321@gmail.com</p>
        </article>

        {/* Linkedln */}
        <article className="w-max grid justify-items-center">
          <div className="icons-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="icons ml-1"
            >
              <path
                
                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
              ></path>
            </svg>
          </div>

          <h3 className="text-2xl mt-4 mb-2">Linkedln</h3>
          <p className="font-light">Richard Pereira</p>
        </article>

        {/* Github */}
        <article className="w-max grid justify-items-center">
          <div className="icons-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="icons"
            >
              <path
    
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
              ></path>
            </svg>
          </div>

          <h3 className="text-2xl mt-4 mb-2">Github</h3>
          <p className="font-light">richrdPere</p>
        </article>
      </div>
    </section>
  );
});

export default About;
