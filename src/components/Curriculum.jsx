/* eslint-disable react/display-name */
import React from "react";

// CSS
import "../css/curriculum.css";

const Curriculum = React.forwardRef((props, ref) => {
  return (
    <section className="py-16 text-center" ref={ref}>
      <h2 className="text-4xl mb-16 md:text-5xl">My Curriculum</h2>

      <div className="bg-card-color py-12 px-8 text-left text-gray-color grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-12 place-items-center">
        <section className="content__page content__resume">
          {/* HABILIDADES Y EXPERIENCIA */}
          <div className="resume__container">
            {/* Lado Izquierdo */}
            <section className="resume__left text-center">
              {/* 1.-Formación */}
              <header className="resume__subheader">
                <h2 className="resume_subtitle">
                  <span className="subtitle__color">Formación</span>
                </h2>
              </header>

              <div className="resume__timelines">
                {/* 1er Instituto */}
                <article className="timelines__timeline">
                  <header className="timeline__header">
                    <h3 className="timeline__year">
                      <span className="subtitle__color">2024</span>
                    </h3>
                    <span className="timeline__company">Henry</span>
                  </header>

                  <div className="timeline__divider"></div>

                  <div className="timeline__descriptions">
                    <h3 className="timeline__title text-left">
                      <span className="subtitle__white">
                        Desarrollo Web FullStack
                      </span>
                    </h3>
                    <p className="timeline__description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Consequuntur minima tempora, alias voluptatum porro quo.
                    </p>
                  </div>
                </article>

                {/* 2do Instituto */}
                <article className="timelines__timeline">
                  <header className="timeline__header">
                    <h3 className="timeline__year">
                      <span className="subtitle__color">2022</span>
                    </h3>
                    <span className="timeline__company">
                      Universidad Nacional San Antonio Abad del Cusco
                    </span>
                  </header>

                  <div className="timeline__divider"></div>

                  <div className="timeline__descriptions">
                    <h3 className="timeline__title text-left">
                      <span className="subtitle__white">Edición de Video</span>
                    </h3>
                    <p className="timeline__description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Consequuntur minima tempora, alias voluptatum porro quo.
                    </p>
                  </div>
                </article>
              </div>

              {/* 2.-Experiencia */}
              <header className="resume__subheader">
                <h2 className="resume_subtitle">
                  <span className="subtitle__color">Experiencia</span>
                </h2>
              </header>

              <div className="resume__timelines">
                {/* 1er Trabajo */}
                <article className="timelines__timeline">
                  <header className="timeline__header">
                    <h3 className="timeline__year">
                      <span className="subtitle__color">2022 - 2023</span>
                    </h3>
                    <span className="timeline__company">Google</span>
                  </header>

                  <div className="timeline__divider"></div>

                  <div className="timeline__descriptions">
                    <h3 className="timeline__title text-left">
                      <span className="subtitle__white">
                        Desarrollo Web Senior
                      </span>
                    </h3>
                    <p className="timeline__description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Consequuntur minima tempora, alias voluptatum porro quo.
                    </p>
                  </div>
                </article>
                {/* 2do Trabajo */}
                <article className="timelines__timeline">
                  <header className="timeline__header">
                    <h3 className="timeline__year">
                      <span className="subtitle__color">2023 - 2024</span>
                    </h3>
                    <span className="timeline__company">Youtube</span>
                  </header>

                  <div className="timeline__divider"></div>

                  <div className="timeline__descriptions">
                    <h3 className="timeline__title text-left">
                      <span className="subtitle__white">Edición de Video</span>
                    </h3>
                    <p className="timeline__description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Consequuntur minima tempora, alias voluptatum porro quo.
                    </p>
                  </div>
                </article>
                {/* 3er Trabajo */}
                <article className="timelines__timeline">
                  <header className="timeline__header">
                    <h3 className="timeline__year">
                      <span className="subtitle__color">2024</span>
                    </h3>
                    <span className="timeline__company">Google</span>
                  </header>

                  <div className="timeline__divider"></div>

                  <div className="timeline__descriptions">
                    <h3 className="timeline__title text-left">
                      <span className="subtitle__white">Desarrollador PHP</span>
                    </h3>
                    <p className="timeline__description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Consequuntur minima tempora, alias voluptatum porro quo.
                    </p>
                  </div>
                </article>
              </div>
            </section>

            {/* Lado Derecho */}
            <section className="resume__right">
              {/* 1.-Diseño */}
              <header className="resume__subheader">
                <h2 className="resume_subtitle">
                  <span className="subtitle__white">Habilidades de </span>
                  <span className="subtitle__color">Diseño</span>
                </h2>
              </header>

              <div className="resume__skills">
                {/* 1er Habilidad */}
                <article className="skills__title">
                  <h4 className="skills__text">Diseño web</h4>
                  <span className="skills__number">90%</span>
                </article>

                <div className="skills__progressBar">
                  <div className="skills__percentage skills_percentage--h1"></div>
                </div>
                {/* 2da Habilidad */}
                <article className="skills__title">
                  <h4 className="skills__text">Diseño Mockups</h4>
                  <span className="skills__number">70%</span>
                </article>

                <div className="skills__progressBar">
                  <div className="skills__percentage skills_percentage--h2"></div>
                </div>
                {/* 3er Habilidad */}
                <article className="skills__title">
                  <h4 className="skills__text">Diseño de Logos</h4>
                  <span className="skills__number">60%</span>
                </article>

                <div className="skills__progressBar">
                  <div className="skills__percentage skills_percentage--h3"></div>
                </div>
                {/* 4ta Habilidad */}
                <article className="skills__title">
                  <h4 className="skills__text">Diseño Bannners</h4>
                  <span className="skills__number">80%</span>
                </article>

                <div className="skills__progressBar">
                  <div className="skills__percentage skills_percentage--h4"></div>
                </div>
              </div>

              {/* 2.-Código */}
              <header className="resume__subheader">
                <h2 className="resume_subtitle">
                  <span className="subtitle__white">Habilidades de </span>
                  <span className="subtitle__color">Código</span>
                </h2>
              </header>

              <div className="resume__skills">
                {/* 1er Conocimiento */}
                <article className="skills__title">
                  <h4 className="skills__text">HTML/CSS</h4>
                  <span className="skills__number">97%</span>
                </article>

                <div className="skills__progressBar">
                  <div className="skills__percentage skills_percentage--p1"></div>
                </div>
                {/* 2da Conocimiento */}
                <article className="skills__title">
                  <h4 className="skills__text">Javascript</h4>
                  <span className="skills__number">85%</span>
                </article>

                <div className="skills__progressBar">
                  <div className="skills__percentage skills_percentage--p2"></div>
                </div>
                {/* 3er Conocimiento */}
                <article className="skills__title">
                  <h4 className="skills__text">React</h4>
                  <span className="skills__number">80%</span>
                </article>

                <div className="skills__progressBar">
                  <div className="skills__percentage skills_percentage--p3"></div>
                </div>
                {/* 4ta Conocimiento */}
                <article className="skills__title">
                  <h4 className="skills__text">PHP</h4>
                  <span className="skills__number">92%</span>
                </article>

                <div className="skills__progressBar">
                  <div className="skills__percentage skills_percentage--p4"></div>
                </div>
                {/* 5to Conocimiento */}
                <article className="skills__title">
                  <h4 className="skills__text">Python</h4>
                  <span className="skills__number">81%</span>
                </article>

                <div className="skills__progressBar">
                  <div className="skills__percentage skills_percentage--p5"></div>
                </div>
                {/* 6to Conocimiento */}
                <article className="skills__title">
                  <h4 className="skills__text">MySQL</h4>
                  <span className="skills__number">71%</span>
                </article>

                <div className="skills__progressBar">
                  <div className="skills__percentage skills_percentage--p6"></div>
                </div>
                {/* 7mo Conocimiento */}
                <article className="skills__title">
                  <h4 className="skills__text">Spring</h4>
                  <span className="skills__number">82%</span>
                </article>

                <div className="skills__progressBar">
                  <div className="skills__percentage skills_percentage--p7"></div>
                </div>
                {/* 8vo Conocimiento */}
                <article className="skills__title">
                  <h4 className="skills__text">Angular</h4>
                  <span className="skills__number">82%</span>
                </article>

                <div className="skills__progressBar">
                  <div className="skills__percentage skills_percentage--p7"></div>
                </div>
              </div>

              {/* 3.-Areas de Conocimientos */}
              <header className="resume__subheader">
                <h2 className="resume_subtitle">
                  <span className="subtitle__white">Areas de</span>{" "}
                  <span className="subtitle__color">Conocimientos</span>
                </h2>
              </header>

              <div className="resume__knowledges">
                <ul className="knowledges__list">
                  <li className="knowledges__option">Programación</li>
                  <li className="knowledges__option">Desarrollo web</li>
                  <li className="knowledges__option">Diseño web</li>
                  <li className="knowledges__option">Redes Sociales</li>
                  <li className="knowledges__option">Comunicación</li>
                  <li className="knowledges__option">Edición de videos</li>
                  <li className="knowledges__option">Formación</li>
                </ul>
              </div>
            </section>
          </div>

          {/* CERTIFICADOS */}
          <div className="resume__certificates">
            <section className="text-center">
              <header className="resume__subheader mt-5">
                <h2 className="resume_subtitle "><span className="subtitle__color">Certificados</span></h2>
              </header>

              <section className="certificates__container">
                {/* 1er Certificado */}
                <article className="certificates__certificate">
                  <div className="certificate__logo">
                    <img
                      className="certificate__image"
                      src="img/certificado-1.png"
                      alt="certificado 1"
                    />
                  </div>

                  <div className="certificate__content">
                    <h4 className="certificate__title text-left">
                      <span className="subtitle__white">Master en PHP, SQL, POO, MVC, Laravel, Symfony, Wordpress</span>
                    </h4>
                    <span className="certificate__id">
                      Id Verificación: 7891
                    </span>
                    <span className="certificates__date">10 Junio 2024</span>
                  </div>
                </article>
                {/* 2do Certificado */}
                <article className="certificates__certificate">
                  <div className="certificate__logo">
                    <img
                      className="certificate__image"
                      src="img/certificado-1.png"
                      alt="certificado 1"
                    />
                  </div>

                  <div className="certificate__content">
                    <h4 className="certificate__title text-left">
                      <span className="subtitle__white">Master en Pruebas Tecnicas: +70 Nuevos Ejercicios de
                      Código</span>
                    </h4>
                    <span className="certificate__id">
                      Id Verificación: 12235
                    </span>
                    <span className="certificates__date">10 Mayo 2025</span>
                  </div>
                </article>
              </section>
            </section>
          </div>
        </section>
      </div>
    </section>
  );
});

export default Curriculum;
