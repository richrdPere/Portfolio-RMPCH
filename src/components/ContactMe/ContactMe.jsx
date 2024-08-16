import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

// Languaje
import { useTranslation } from "react-i18next";
import Links from "./Links";

const initialContactForm = {
  user_name: "",
  user_email: "",
  message: "",
};

// eslint-disable-next-line react/display-name
const ContactMe = React.forwardRef((props, ref) => {
  // Languajes
  const [t, i18n] = useTranslation("global");

  // Initial Contact - State
  const [contactMe, setContactMe] = useState(initialContactForm);
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const { user_name, user_email, message } = contactMe;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setContactMe({
      ...contactMe,
      [name]: value,
    });
  };

  // Validation Form
  const validateForm = () => {
    const newErrors = {};

    if (!user_name) {
      newErrors.user_name = t("contacts.alertName");
    }

    if (!user_email) {
      newErrors.user_email = t("contacts.alertEmail1");
    } else if (!/\S+@\S+\.\S+/.test(user_email)) {
      newErrors.user_email = t("contacts.alertEmail2");
    }

    if (!message) {
      newErrors.message = t("contacts.alertMessage");
    }

    return newErrors;
  };

  // Email
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Validator Error
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setShowAlert(true); // Muestra la alerta

      // Ocultar la alerta después de 2 segundos
      setTimeout(() => {
        setShowAlert(false);
      }, 2500);

      // Erroneo
      Swal.fire({
        icon: "error",
        title: "Uups...",
        text: t("contacts.sweetAlert1"),
        confirmButtonColor: "#27AE60",
        confirmButtonText: "OK",
      });
    } else {
      // Reiniciar Errores
      setErrors({});
      setShowAlert(false); // Asegura que la alerta no se muestre

      // Envio de Correo
      emailjs
        .sendForm("service_dkuu6t1", "template_amtu82m", form.current, {
          publicKey: "a0_FWsD6ngJufJBUi",
        })
        .then(
          () => {
            // Confirmación
            Swal.fire({
              icon: "success",
              title: t("contacts.titleSweetAlert2"),
              text: t("contacts.sweetAlert2"),
              confirmButtonColor: "#27AE60",
              confirmButtonText: "OK",
            });

            // Reiniciar el Form
            setContactMe(initialContactForm);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <section className="py-16 text-center" ref={ref}>
      {/* Colaboremos Contaçtame */}
      <header className="resume__subheader mt-5">
        <h2 className="resume_subtitle ">
          <span className="text-4xl mb-16 md:text-5xl">
            {t("contacts.titleContact2")} -{" "}
            <span className="text-green-color">
              {t("contacts.titleContact1")}
            </span>
          </span>
        </h2>
      </header>

      <form
        onSubmit={sendEmail}
        ref={form}
        className="flex flex-wrap justify-between gap-8 px-1 max-w-screen-lg mx-auto"
      >
        {/* Name */}
        <div className="bg-color-background border-b px-2 py-4 flex-grow basis-60 focus-input">
          <div className="relative bg-inherit ">
            <input
              type="text"
              id="user_name"
              name="user_name"
              className="peer bg-transparent h-10 w-full rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-transparent focus:ring-green-color focus:outline-none focus:border-rose-600"
              placeholder={`${t("contacts.nameContact")}`}
              value={user_name}
              onChange={onInputChange}
            />

            <label
              htmlFor="user_name"
              className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-green-color peer-focus:text-sm transition-all"
            >
              {t("contacts.nameContact")}
            </label>
          </div>

          {errors.user_name && (
            <label className={`mt-4 text-red-600 ${showAlert ? "" : "hidden"}`}>
              {errors.user_name}
            </label>
          )}
        </div>

        {/* Email */}
        <div className="bg-color-background border-b px-2 py-4 flex-grow basis-60 focus-input">
          <div className="relative bg-inherit ">
            <input
              type="text"
              id="user_email"
              name="user_email"
              className="peer bg-transparent h-10 w-full rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-transparent focus:ring-green-color focus:outline-none focus:border-rose-600 "
              placeholder={`${t("contacts.emailContact")}`}
              value={user_email}
              onChange={onInputChange}
            />
            <label
              htmlFor="user_email"
              className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-green-color peer-focus:text-sm transition-all"
            >
              {t("contacts.emailContact")}
            </label>
          </div>

          {errors.user_email && (
            <label className={`mt-4 text-red-600 ${showAlert ? "" : "hidden"}`}>
              {errors.user_email}
            </label>
          )}
        </div>

        {/* Message */}
        <div className="bg-color-background  border-b px-4 py-4 min-w-full max-w-full w-full min-h-[100px] max-h-60 flex-grow basis-60 focus-input">
          <div className="relative bg-inherit">
            <textarea
              id="message"
              name="message"
              placeholder={`${t("contacts.messageContact")}`}
              className="peer bg-transparent px-4 py-2 min-w-full max-w-full w-full min-h-[100px] max-h-60 rounded-lg text-gray-200 placeholder-transparent ring-2 ring-transparent focus:ring-green-color focus:outline-none focus:border-rose-600 focus-input"
              value={message}
              onChange={onInputChange}
            ></textarea>

            <label
              htmlFor="message"
              className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-green-color peer-focus:text-sm transition-all"
            >
              {t("contacts.messageContact")}
            </label>
          </div>

          {errors.message && (
            <p className={`mt-4 text-red-600 ${showAlert ? "" : "hidden"}`}>
              {errors.message}
            </p>
          )}
        </div>

        {/* Button - Contact Me */}
        <input
          type="submit"
          value={`${t("contacts.buttonMessage")}`}
          className="bg-green-color py-4 px-14 mx-auto cursor-pointer rounded-lg hover:bg-indigo-600"
        />
      </form>

      <div className="resume__subheader mt-10">
        <h3 className="resume_subtitle ">
          <span className="mt-12 text-4xl mb-16 text-center md:text-3xl">
            {t("contacts.subTitleContact1")}{" "}
            <span className="text-green-color">
              {t("contacts.subTitleContact2")}
            </span>
          </span>
        </h3>
      </div>

      {/* Links */}
      <Links/>
    </section>
  );
});

export default ContactMe;
