const Carrusel = ({ array, onClick, isSelected }) => {
  const { id, title, category, institution, image, date } = array;

  return (
    <div onClick={onClick} className={`h-full w-[400px] m-2 flex-shrink-0 cursor-pointer ${isSelected ? 'hover:border-4 border-green-color' : ''}`}>
      <div className="rounded-3xl overflow-hidden mb-4 relative h-[250px]">
        <img src={`${image}`} alt={title} />
        <span className="absolute top-3 left-4 border border-black text-xs rounded-xl px-4 py-2 font-semibold capitalize bg-indigo-600">
          {category}
        </span>
      </div>
      <div className="px-4 flex gap-4">
        {/* <img
          src={
            institution === "Mary Smith"
              ? "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              : institution === "Jhon Doe"
              ? "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              : "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="Author"
          className="object-cover w-12 h-12 rounded-full"
        /> */}
        <div className="flex flex-col items-center gap-2 w-full">
          <h3 className="text-lg font-bold text-white leading-7 whitespace-normal">
            {title}
          </h3>
          <div className="flex gap-4">
            <p className="text-sm text-white font-semibold text-justify">
              {institution}
            </p>
            <p className="text-sm text-green-color font-normal">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrusel;
