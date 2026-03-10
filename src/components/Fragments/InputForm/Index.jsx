import Input from "../../Elements/Input/Index";
import Label from "../../Elements/Label/Index";

const InputForm = ({
  name,
  label,
  type,
  placeholder,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="mb-4">
      <Label htmlFor={name}>{label}</Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        error={error}
      />
    </div>
  );
};

export default InputForm;
