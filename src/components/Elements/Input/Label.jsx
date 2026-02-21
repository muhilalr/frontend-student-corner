const Label = ({ htmlFor, children }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-gray-700 text-sm font-medium mb-2"
    >
      {children}
    </label>
  );
};

export default Label;
