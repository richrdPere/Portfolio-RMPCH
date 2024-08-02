/* eslint-disable react/display-name */
import React from "react";

// CSS
import "../css/curriculum.css";

// Components (Componentes)
import Certificates from "./Curriculum/Certificates";
import Skills from "./Curriculum/Skills";
import Training from "./Curriculum/Training";

const Curriculum = React.forwardRef((props, ref) => {
  return (
    <section className="py-16 text-center" ref={ref}>
      <h2 className="text-4xl mb-16 md:text-5xl">My Curriculum</h2>

      <div className="bg-card-color py-12 px-8 text-left text-gray-color grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-12 place-items-center">
        <section className="content__page content__resume">

          {/* HABILIDADES Y EXPERIENCIA */}
          <div className="w-full flex flex-row">
            {/* Lado Izquierdo */}
            <Training/>

            {/* Lado Derecho */}
            <Skills/>
          </div>

          {/* CERTIFICADOS */}
          <Certificates/>
          
        </section>
      </div>
    </section>
  );
});

export default Curriculum;
