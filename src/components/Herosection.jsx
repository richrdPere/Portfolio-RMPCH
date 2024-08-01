import React from 'react'

const Herosection = () => {
  return (
    <section className="mt-20 pt-10 pb-16 md:flex justify-around items-center gap-8">
        <figure className="md:order-1">
          <img
            src="img/user_richard.png"
            className="w-[90%] aspect-square object-cover rounded-full max-w-sm mx-auto"
          />
        </figure>

        <article className="text-center mt-8 md:w-1/2 md:text-left">
          <h1 className="text-4xl md:text-5xl">Hi, I am Richard Pereira.</h1>
          <p className="text-gray-color text-xl mt-3 mb-6">
            Full Stack Developer.
          </p>

          <div
            className="grid 
                    grid-cols-[repeat(auto-fit,minmax(170px,1fr))] auto-rows-[60px] gap-8 max-w-lg mx-auto md:mx-0"
          >
            <a
              href="https://drive.google.com/uc?export=download&id=1tafJGBR1DVqqSqFOKX0eS6Ik36-BaGbI"
              className="bg-green-color flex items-center justify-center"
            >
              Download CV
            </a>

            <a
              href="#"
              className="flex items-center justify-center border-white border"
            >
              Learn More
            </a>
          </div>
        </article>
      </section>
  )
}

export default Herosection