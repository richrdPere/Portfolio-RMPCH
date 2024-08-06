// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

// CSS
import "../../css/certificates.css";

// Components (Componentes)
import Carrusel from "../Carrusel/Carrusel";
import Modal from "../Modal/Modal";
import CertificateImage from "./CertificateImage";

// Languaje
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/display-name
const Certificates = React.forwardRef((props, ref) => {
  // Props
  // eslint-disable-next-line react/prop-types
  const { certificates } = props;

  // Languajes
  const [t, i18n] = useTranslation("global");

  // Carrusel
  const carruselCertificates = [...certificates, ...certificates];

  // States
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Funciones
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCertificate(null);
  };

  const handleCardClick = (certificate) => {
    setSelectedCertificate(certificate);
    setShowModal(true);
  };

  return (
    <section className="resume__certificates" ref={ref}>
      <section className="py-16 text-center">
        <header className="resume__subheader mt-5">
          <h2 className="resume_subtitle ">
            <span className="text-4xl mb-16 md:text-5xl">
              {t("certificates.titleCertificates1")}{" "}
              <span className="text-green-color">
                {t("certificates.titleCertificates2")}{" "}
              </span>
            </span>
          </h2>
        </header>

        {/* Carrusel */}
        <div className="container my-5">
          <div className="overflow-hidden w-full">
            <div className="flex whitespace-nowrap animate-scroll">
              {carruselCertificates.map((certificate, index) => (
                <Carrusel
                  key={index}
                  array={certificate}
                  onClick={() => handleCardClick(certificate)}
                  isSelected={selectedCertificate === certificate}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <Modal>
            <CertificateImage
              onClose={handleCloseModal}
              image={selectedCertificate.image}
              title={selectedCertificate.title}
              category={selectedCertificate.category}
            />
          </Modal>
        )}
      </section>
    </section>
  );
});

export default Certificates;
