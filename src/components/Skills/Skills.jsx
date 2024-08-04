import React from "react";

// eslint-disable-next-line react/display-name
const Skills = React.forwardRef((props, ref) => {
  return (
    <section className="py-16 text-center" ref={ref}>
      <header className="resume__subheader mt-5">
        <h2 className="resume_subtitle ">
          <span className="text-4xl mb-16 md:text-5xl">¡My <span className="text-green-color">Skills! 👇</span></span>
        </h2>
      </header>

      {/* <div className="bg-card-color py-12 px-8 text-gray-color grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-12 place-items-center">
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
      </div> */}

      <div className="mt-12 grid gap-8 max-w-md mx-auto md:grid-flow-col md:max-w-none auto-cols-fr">
        <article className="space-y-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="fill-orange-700 w-20 mx-auto"
          >
            <path d="M4.136 3.012h15.729l-1.431 16.15-6.451 1.826-6.414-1.826-1.433-16.15zm5.266 7.302-.173-2.035 7.533.002.173-1.963-9.87-.002.522 5.998h6.835l-.243 2.566-2.179.602-2.214-.605-.141-1.58H7.691l.247 3.123L12 17.506l4.028-1.08.558-6.111H9.402v-.001z"></path>
          </svg>

          <h3 className="text-green-color text-xl font-bold">HTML5 + FIGMA</h3>

          <p className="w-2/3 text-slate-600 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
            delectus magni ratione, quia dolor fugit.
          </p>
        </article>

        <article className="space-y-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="fill-blue-700 w-20 mx-auto"
          >
            <path d="M4.192 3.143h15.615l-1.42 16.034-6.404 1.812-6.369-1.813L4.192 3.143zM16.9 6.424l-9.8-.002.158 1.949 7.529.002-.189 2.02H9.66l.179 1.913h4.597l-.272 2.62-2.164.598-2.197-.603-.141-1.569h-1.94l.216 2.867L12 17.484l3.995-1.137.905-9.923z"></path>
          </svg>

          <h3 className="text-green-color text-xl font-bold">CSS + Tailwind</h3>

          <p className="w-2/3 text-slate-600 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
            delectus magni ratione, quia dolor fugit.
          </p>
        </article>

        <article className="space-y-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="fill-yellow-400 w-20 mx-auto"
          >
            <path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042z"></path>
          </svg>

          <h3 className="text-green-color text-xl font-bold">JS + React</h3>

          <p className="w-2/3 text-slate-600 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
            delectus magni ratione, quia dolor fugit.
          </p>
        </article>
      </div>
    </section>
  );
});

export default Skills;
