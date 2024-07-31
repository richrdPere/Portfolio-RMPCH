import React from "react";

const ContactMe = React.forwardRef((props, ref) => {
  return (
    <section className="py-16">
      <h2 className="text-4xl mb-16 text-center md:text-5xl">Get in Touch</h2>

      <form className="flex flex-wrap justify-between gap-8 px-1 max-w-screen-lg mx-auto" ref={ref}>
        <input
          type="text"
          placeholder="Name"
          className="border-b px-2 py-4 flex-grow basis-60  focus-input"
        />

        <input
          type="email"
          placeholder="Email"
          className="border-b px-2 py-4 flex-grow basis-60 focus-input"
        />

        <textarea
          placeholder="Message"
          className="border px-4 py-6 min-w-full max-w-full w-full min-h-[100px] max-h-60 focus-input"
        ></textarea>

        <input
          type="submit"
          value="Contact me"
          className="bg-green-color py-4 px-14 mx-auto cursor-pointer"
        />
      </form>
    </section>
  );
});

export default ContactMe;
