import React from "react";

const Training = () => {
  return (
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
              <span className="subtitle__white">Desarrollo Web FullStack</span>
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
              <span className="subtitle__white">Desarrollo Web Senior</span>
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
  );
};

export default Training;
