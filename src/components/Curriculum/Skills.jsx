// eslint-disable-next-line no-unused-vars
import React from 'react'

const Skills = () => {
  return (
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
  )
}

export default Skills