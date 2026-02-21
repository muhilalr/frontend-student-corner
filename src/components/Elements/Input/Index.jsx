import Input from "./Input";
import Label from "./Label";

const InputForm = ({ name, label, type, placeholder }) => {
  return (
    <div className="mb-4">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} />
    </div>
  );
};

export default InputForm;
