const Button = ({ type, classname, children }) => {
  return (
    <button
      className={`py-2.5 px-4 rounded-md ${classname} text-white`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
