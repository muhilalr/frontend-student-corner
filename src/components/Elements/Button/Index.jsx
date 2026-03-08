const Button = ({ type, classname, children, disabled }) => {
  return (
    <button
      className={`py-2.5 px-4 rounded-md ${classname} text-white hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
