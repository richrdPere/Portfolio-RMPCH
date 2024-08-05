import { useState} from "react";

// Components (Componentes)
import Modal from "../Modal/Modal";
import CertificateImage from "./CertificateImage";

const Certificate = () => {
  // Modal
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section>
      <article className="certificates__certificate" onClick={handleOpenModal}>
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
    </section>
  );
};

export default Certificate;
