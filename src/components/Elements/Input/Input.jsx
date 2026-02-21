const Input = ({ type, name, placeholder, children }) => {
  return (
    <input
      className="border border-[#043277] rounded-md w-full px-3 py-2 text-slate-700 focus:outline-none focus:border-[#043277] focus:ring-1 focus:ring-[#043277] placeholder:opacity-50"
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
    >
      {children}
    </input>
  );
};

export default Input;
