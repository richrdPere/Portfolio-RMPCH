// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

// CSS
import '../../css/certificates.css'

// Components (Componentes)
import Modal from "../Modal/Modal";
import CertificateImage from "./CertificateImage";

// eslint-disable-next-line react/display-name
const Certificates = React.forwardRef((props, ref) => {
  // Modal
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section className="resume__certificates" ref={ref}>
      <section className="py-16 text-center">
        <header className="resume__subheader mt-5">
          <h2 className="resume_subtitle ">
            <span className="text-4xl mb-16 md:text-5xl">My <span className="text-green-color">Certificates</span></span>
          </h2>
        </header>

        <section className="mt-12 grid gap-8 max-w-md mx-auto md:grid-flow-col md:max-w-none auto-cols-fr ">
          {/* 1er Certificado */}
          <article
            className="certificates__certificate"
            onClick={handleOpenModal}
          >
            <div className="certificate__logo">
              <img
                className="certificate__image"
                src="img/certificado-1.png"
                alt="certificado 1"
              />
            </div>

            <div className="certificate__content">
              <h4 className="certificate__title text-left">
                <span className="subtitle__white">
                  Master en PHP, SQL, POO, MVC, Laravel, Symfony, Wordpress
                </span>
              </h4>
              <span className="certificate__id">Id Verificación: 7891</span>
              <span className="certificates__date">10 Junio 2024</span>
            </div>
          </article>

          {showModal && (
            <Modal>
              <CertificateImage onClose={handleCloseModal} />
            </Modal>
          )}

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
                <span className="subtitle__white">
                  Master en Pruebas Tecnicas: +70 Nuevos Ejercicios de Código
                </span>
              </h4>
              <span className="certificate__id">Id Verificación: 12235</span>
              <span className="certificates__date">10 Mayo 2025</span>
            </div>
          </article>
        </section>
      </section>
    </section>
  );
});

export default Certificates;
