import React from "react";

const Skill = ({ skill, t }) => {
  // Props - Skill
  const { id, icon, title, technologies } = skill;

  return (
    <article className="bg-card-color space-y-4 py-6 px-4 border-b-2 border-transparent">
      {/* Icono */}
      {/* <img src={icon} className=" w-24 mx-auto" alt={`${title} icon`} /> */}
      <div
        className=" w-24 mx-auto"
        dangerouslySetInnerHTML={{ __html: icon }}
      />

      {/* Title */}
      <h3 className="text-white text-2xl font-bold">
        {t(`skills.article${id}`)}
      </h3>

      {id === 1 ? (
        <div className="flex flex-row items-center mb-2  space-y-2 md:flex-col">
          {technologies.map((tecno, index) => (
            <p
              key={index}
              className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-green-color mr-2"
            >
              #{t(`skills.article_hability${index + 1}`)}
            </p>
          ))}
        </div>
      ) : (
        <div className="flex flex-row items-center mb-2  space-y-2 md:flex-col">
          {technologies.map((tecno, index) => (
            <p
              key={index}
              className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-green-color mr-2"
            >
              #{tecno}
            </p>
          ))}
        </div>
      )}
    </article>
  );
};

export default Skill;
