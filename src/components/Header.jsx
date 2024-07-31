import React from "react";

// React-router-dom
import { useNavigate, Link } from "react-router-dom";

const Header = ({ scrollToAbout, scrollToContact }) => {

  // Navigate
  const navigate = useNavigate();


  return (
    <header>
      <nav className="flex h-20 items-center justify-between">
        <Link to="/" className="w-1/2 max-w-[300px]">
          {/* <img src="icons/logo.svg" className="block w-full" /> */}
          <h1 className="text-3xl md:text-4xl">Richard Pereira.</h1>
        </Link>

        <input type="checkbox" id="menu" className="peer/menu hidden" />

        <label
          htmlFor="menu"
          className="w-10 h-10 bg-open-menu bg-cover bg-center bg-green-color rounded-lg  cursor-pointer peer-checked/menu:bg-close-menu transition-all z-40 md:hidden"
        ></label>

        <ul className="fixed inset-0 bg-menu-color px-[5%] grid gap-6 auto-rows-max content-center justify-items-center clip-circle-0 peer-checked/menu:clip-circle-full transition-[clip-path] duration-500 md:clip-circle-full md:relative md:grid-flow-col md:p-0 md:bg-transparent">
          <li>
            <Link to={"./About"} onClick={scrollToAbout}>
              About Me
            </Link>
          </li>

          <li>
            <Link href="/Curriculum">Curriculum</Link>
          </li>

          <li>
            <a href="#">Portfolio</a>
          </li>

          <li>
            <a href="#" onClick={scrollToContact}>
              Contact Me
            </a>
          </li>
        </ul>
      </nav>

      <section className="pt-10 pb-16 md:flex justify-around items-center gap-8">
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
    </header>
  );
};

export default Header;
