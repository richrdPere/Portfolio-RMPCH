import React from "react";

// CSS
import "../css/portfolio.css";

// eslint-disable-next-line react/display-name
const Portfolio = React.forwardRef((props, ref) => {
  return (
    <section className="py-16 text-center" ref={ref}>
      <header className="resume__subheader mt-5">
          <h2 className="resume_subtitle ">
            <span className="text-4xl  mb-16 md:text-5xl">What i do - <span className="text-green-color">Portfolio</span></span>
          </h2>
        </header>

    
      {/* ANTERIOR */}
      {/* <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8 ">
        
        <article className="bg-card-color py-12 px-8 border-b-2 border-transparent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="icons w-24"
          >
            <circle cx="12" cy="11.245" r="1.785"></circle>
            <path d="m7.002 14.794-.395-.101c-2.934-.741-4.617-2.001-4.617-3.452 0-1.452 1.684-2.711 4.617-3.452l.395-.1.111.391a19.507 19.507 0 0 0 1.136 2.983l.085.178-.085.178c-.46.963-.841 1.961-1.136 2.985l-.111.39zm-.577-6.095c-2.229.628-3.598 1.586-3.598 2.542 0 .954 1.368 1.913 3.598 2.54.273-.868.603-1.717.985-2.54a20.356 20.356 0 0 1-.985-2.542zm10.572 6.095-.11-.392a19.628 19.628 0 0 0-1.137-2.984l-.085-.177.085-.179c.46-.961.839-1.96 1.137-2.984l.11-.39.395.1c2.935.741 4.617 2 4.617 3.453 0 1.452-1.683 2.711-4.617 3.452l-.395.101zm-.41-3.553c.4.866.733 1.718.987 2.54 2.23-.627 3.599-1.586 3.599-2.54 0-.956-1.368-1.913-3.599-2.542a20.683 20.683 0 0 1-.987 2.542z"></path>
            <path d="m6.419 8.695-.11-.39c-.826-2.908-.576-4.991.687-5.717 1.235-.715 3.222.13 5.303 2.265l.284.292-.284.291a19.718 19.718 0 0 0-2.02 2.474l-.113.162-.196.016a19.646 19.646 0 0 0-3.157.509l-.394.098zm1.582-5.529c-.224 0-.422.049-.589.145-.828.477-.974 2.138-.404 4.38.891-.197 1.79-.338 2.696-.417a21.058 21.058 0 0 1 1.713-2.123c-1.303-1.267-2.533-1.985-3.416-1.985zm7.997 16.984c-1.188 0-2.714-.896-4.298-2.522l-.283-.291.283-.29a19.827 19.827 0 0 0 2.021-2.477l.112-.16.194-.019a19.473 19.473 0 0 0 3.158-.507l.395-.1.111.391c.822 2.906.573 4.992-.688 5.718a1.978 1.978 0 0 1-1.005.257zm-3.415-2.82c1.302 1.267 2.533 1.986 3.415 1.986.225 0 .423-.05.589-.145.829-.478.976-2.142.404-4.384-.89.198-1.79.34-2.698.419a20.526 20.526 0 0 1-1.71 2.124z"></path>
            <path d="m17.58 8.695-.395-.099a19.477 19.477 0 0 0-3.158-.509l-.194-.017-.112-.162A19.551 19.551 0 0 0 11.7 5.434l-.283-.291.283-.29c2.08-2.134 4.066-2.979 5.303-2.265 1.262.727 1.513 2.81.688 5.717l-.111.39zm-3.287-1.421c.954.085 1.858.228 2.698.417.571-2.242.425-3.903-.404-4.381-.824-.477-2.375.253-4.004 1.841.616.67 1.188 1.378 1.71 2.123zM8.001 20.15a1.983 1.983 0 0 1-1.005-.257c-1.263-.726-1.513-2.811-.688-5.718l.108-.391.395.1c.964.243 2.026.414 3.158.507l.194.019.113.16c.604.878 1.28 1.707 2.02 2.477l.284.29-.284.291c-1.583 1.627-3.109 2.522-4.295 2.522zm-.993-5.362c-.57 2.242-.424 3.906.404 4.384.825.47 2.371-.255 4.005-1.842a21.17 21.17 0 0 1-1.713-2.123 20.692 20.692 0 0 1-2.696-.419z"></path>
            <path d="M12 15.313c-.687 0-1.392-.029-2.1-.088l-.196-.017-.113-.162a25.697 25.697 0 0 1-1.126-1.769 26.028 26.028 0 0 1-.971-1.859l-.084-.177.084-.179c.299-.632.622-1.252.971-1.858.347-.596.726-1.192 1.126-1.77l.113-.16.196-.018a25.148 25.148 0 0 1 4.198 0l.194.019.113.16a25.136 25.136 0 0 1 2.1 3.628l.083.179-.083.177a24.742 24.742 0 0 1-2.1 3.628l-.113.162-.194.017c-.706.057-1.412.087-2.098.087zm-1.834-.904c1.235.093 2.433.093 3.667 0a24.469 24.469 0 0 0 1.832-3.168 23.916 23.916 0 0 0-1.832-3.168 23.877 23.877 0 0 0-3.667 0 23.743 23.743 0 0 0-1.832 3.168 24.82 24.82 0 0 0 1.832 3.168z"></path>
          </svg>
          <h3 className="text-2xl text-gray-color font-medium">
            Software Development
          </h3>
        </article>

        
        <article className="bg-card-color py-12 px-8 border-b-2 border-transparent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="icons w-24"
          >
            <path d="M21.838 8.445c0-.001-.001-.001 0 0l-.003-.004-.001-.001v-.001a.809.809 0 0 0-.235-.228l-9.164-6.08a.834.834 0 0 0-.898 0L2.371 8.214A.786.786 0 0 0 2 8.897v6.16a.789.789 0 0 0 .131.448v.001l.002.002.01.015v.002h.001l.001.001.001.001c.063.088.14.16.226.215l9.165 6.082a.787.787 0 0 0 .448.139.784.784 0 0 0 .45-.139l9.165-6.082a.794.794 0 0 0 .371-.685v-6.16a.793.793 0 0 0-.133-.452zm-9.057-4.172 6.953 4.613-3.183 2.112-3.771-2.536V4.273zm-1.592 0v4.189l-3.771 2.536-3.181-2.111 6.952-4.614zm-7.595 6.098 2.395 1.59-2.395 1.611v-3.201zm7.595 9.311-6.96-4.617 3.195-2.15 3.765 2.498v4.269zm.795-5.653-3.128-2.078 3.128-2.105 3.131 2.105-3.131 2.078zm.797 5.653v-4.27l3.766-2.498 3.193 2.15-6.959 4.618zm7.597-6.11-2.396-1.611 2.396-1.59v3.201z"></path>
          </svg>

          <h3 className="text-2xl text-gray-color font-medium">
            Web Development
          </h3>
        </article>

        
        <article className="bg-card-color py-12 px-8 border-b-2 border-transparent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="icons w-24"
          >
            <path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"></path>
          </svg>

          <h3 className="text-2xl text-gray-color font-medium">Web Design</h3>
        </article>

        
        <article className="bg-card-color py-12 px-8 border-b-2 border-transparent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 50 50"
            className="icons w-24"
          >
            <path d="M 24.5 2 C 15.800781 2 14 6.492188 14 9.09375 L 14 14 L 24 14 L 24 15 L 9.09375 15 C 5.792969 15 2 17.601563 2 25 C 2 32.398438 5.792969 35 9.09375 35 L 15 35 L 15 29 C 15 26.800781 16.800781 25 19 25 L 31 25 C 32.699219 25 34 23.699219 34 22 L 34 9.09375 C 34 5.59375 30.699219 2 24.5 2 Z M 20 7 C 21.101563 7 22 7.898438 22 9 C 22 10.101563 21.101563 11 20 11 C 18.898438 11 18 10.101563 18 9 C 18 7.898438 18.898438 7 20 7 Z M 35 15 L 35 22 C 35 24.199219 33.199219 26 31 26 L 19 26 C 17.300781 26 16 27.300781 16 29 L 16 40.90625 C 16 44.40625 19.300781 48 25.5 48 C 34.199219 48 36 43.507813 36 40.90625 L 36 36 L 26 36 L 26 35 L 40.90625 35 C 44.207031 35 48 32.398438 48 25 C 48 17.601563 44.207031 15 40.90625 15 Z M 30 39 C 31.101563 39 32 39.898438 32 41 C 32 42.101563 31.101563 43 30 43 C 28.898438 43 28 42.101563 28 41 C 28 39.898438 28.898438 39 30 39 Z"></path>
          </svg>

          <h3 className="text-2xl text-gray-color font-medium">
            Python Developer
          </h3>
        </article>

        
        <article className="bg-card-color py-12 px-8 border-b-2 border-transparent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 50 50"
            className="icons w-24"
          >
            <path d="M 24.929688 2.0019531 C 24.819813 2.0024531 24.709016 2.0206406 24.603516 2.0566406 L 3.671875 9.3417969 C 3.227875 9.4957969 2.9498125 9.93925 3.0078125 10.40625 L 6.3164062 37.529297 C 6.3554062 37.850297 6.5450781 38.133109 6.8300781 38.287109 L 24.478516 47.878906 C 24.626516 47.959906 24.791078 48 24.955078 48 C 25.120078 48 25.286547 47.958953 25.435547 47.876953 L 43.173828 38.154297 C 43.455828 37.999297 43.647547 37.717438 43.685547 37.398438 L 46.992188 10.277344 C 47.050187 9.8083437 46.769312 9.3609844 46.320312 9.2089844 L 25.253906 2.0527344 C 25.148906 2.0177344 25.039562 2.0014531 24.929688 2.0019531 z M 25 7 L 38 35 L 33.5625 35 L 30.78125 29.007812 L 19.21875 29.007812 L 16.4375 35 L 12 35 L 25 7 z M 25 16.5 L 21.080078 25 L 28.919922 25 L 25 16.5 z"></path>
          </svg>

          <h3 className="text-2xl text-gray-color font-medium">Angular</h3>
        </article>

    
      </div> */}

      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8 ">
        {/* 1.- Proyecto */}
        <article className="bg-card-color py-12 px-8 border-b-2 border-transparent movingToTop">
          <figure>
            <div className="gallery__containerImagen">
              <a href="#" className="gallery__link">
                <img
                  className="gallery__image"
                  src="img/proyecto-1.jpg"
                  alt="1ra imagen de la galeria"
                />
              </a>
            </div>

            <figcaption className="gallery__title ">
              <span className="subtitle__color">Cards - Rick and Morty</span>
            </figcaption>

            <div className="grid grid-cols-2 gap-4 content-evenly">
              <div className="grid content-center">
                <a
                  href="#"
                  target="_blank"
                  className="p-2 text-center transition duration-150 rounded-lg bg-indigo-600 hover:bg-indigo-600/80"
                >
                  Github
                </a>
              </div>

              <div className="grid content-center">
                <a
                  href="#"
                  target="_blank"
                  className="p-2 text-center transition duration-150 rounded-lg bg-green-color hover:bg-green-color/80"
                >
                  Live demo
                </a>
              </div>
            </div>
          </figure>
        </article>

        {/* 2.- Proyecto */}
        <article className="bg-card-color py-12 px-8 border-b-2 border-transparent movingToTop">
          <figure className="">
            {/* Imagen */}
            <div className="gallery__containerImagen">
              <a href="#" className="gallery__link">
                <img
                  className="gallery__image"
                  src="img/proyecto-2.jpg"
                  alt="1ra imagen de la galeria"
                />
              </a>
            </div>
            {/* Titular */}
            <figcaption className="gallery__title ">
              <span className="subtitle__color">
                Campeones del Mundo - Venta de Productos
              </span>
            </figcaption>

            {/* Links */}
            <div className="grid grid-cols-2 gap-4 content-evenly">
              <div className="grid content-center">
                <a
                  href="#"
                  target="_blank"
                  className="p-2 text-center transition duration-150 rounded-lg bg-indigo-600 hover:bg-indigo-600/80"
                >
                  Github
                </a>
              </div>

              <div className="grid content-center">
                <a
                  href="#"
                  target="_blank"
                  className="p-2 text-center transition duration-150 rounded-lg bg-green-color hover:bg-green-color/80"
                >
                  Live demo
                </a>
              </div>
            </div>
          </figure>
        </article>

        {/* 3.- Proyecto */}
        <article className="bg-card-color py-12 px-8 border-b-2 border-transparent movingToTop">
          <figure className="">
            {/* Imagen */}
            <div className="gallery__containerImagen">
              <a href="#" className="gallery__link">
                <img
                  className="gallery__image"
                  src="img/proyecto-3.jpg"
                  alt="1ra imagen de la galeria"
                />
              </a>
            </div>
            {/* Titular */}
            <figcaption className="gallery__title ">
              <span className="subtitle__color">
                GuitarLa - Venta de Guitarras
              </span>
            </figcaption>
            {/* Links */}
            <div className="grid grid-cols-2 gap-4 content-evenly">
              <div className="grid content-center">
                <a
                  href="#"
                  target="_blank"
                  className="p-2 text-center transition duration-150 rounded-lg bg-indigo-600 hover:bg-indigo-600/80"
                >
                  Github
                </a>
              </div>

              <div className="grid content-center">
                <a
                  href="#"
                  target="_blank"
                  className="p-2 text-center transition duration-150 rounded-lg bg-green-color hover:bg-green-color/80"
                >
                  Live demo
                </a>
              </div>
            </div>
          </figure>
        </article>

        {/* 4.- Proyecto */}
        <article className="bg-card-color py-12 px-8 border-b-2 border-transparent movingToTop">
          <figure className="">
            {/* Imagen */}
            <div className="gallery__containerImagen">
              <a href="#" className="gallery__link">
                <img
                  className="gallery__image"
                  src="img/proyecto-4.jpg"
                  alt="1ra imagen de la galeria"
                />
              </a>
            </div>
            {/* Titular */}
            <figcaption className="gallery__title ">
              <span className="subtitle__color">BloqCafé - Cafeteria</span>
            </figcaption>
            {/* Links */}
            <div className="grid grid-cols-2 gap-4 content-evenly">
              <div className="grid content-center">
                <a
                  href="#"
                  target="_blank"
                  className="p-2 text-center transition duration-150 rounded-lg bg-indigo-600 hover:bg-indigo-600/80"
                >
                  Github
                </a>
              </div>

              <div className="grid content-center">
                <a
                  href="#"
                  target="_blank"
                  className="p-2 text-center transition duration-150 rounded-lg bg-green-color hover:bg-green-color/80"
                >
                  Live demo
                </a>
              </div>
            </div>
          </figure>
        </article>
      </div>
    </section>
  );
});

export default Portfolio;
