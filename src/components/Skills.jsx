import React from "react";

// eslint-disable-next-line react/display-name
const Skills = React.forwardRef((props, ref) => {
  return (
    <section className="py-16 text-center" ref={ref}>
      <h2 className="text-4xl mb-16 md:text-5xl">My Skills</h2>

      <div className="bg-card-color py-12 px-8 text-gray-color grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-12 place-items-center">
        <article className="space-y-4">
          <p className="text-5xl font-bold ">50%</p>

          <h3 className="text-green-color text-2xl">HTML</h3>
        </article>

        <article className="space-y-4">
          <p className="text-5xl font-bold ">70%</p>

          <h3 className="text-green-color text-2xl">CSS</h3>
        </article>

        <article className="space-y-4">
          <p className="text-5xl font-bold ">60%</p>

          <h3 className="text-green-color text-2xl">JS</h3>
        </article>

        <article className="space-y-4">
          <p className="text-5xl font-bold ">90%</p>

          <h3 className="text-green-color text-2xl">Tailwind</h3>
        </article>
      </div>
    </section>
  );
});

export default Skills;
