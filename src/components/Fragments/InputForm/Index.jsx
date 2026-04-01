import { forwardRef } from "react";
import Input from "../../Elements/Input/Index";
import Label from "../../Elements/Label/Index";

const InputForm = forwardRef(
  // ✅ Hapus value & onChange dari props destructure
  // Biarkan ...rest menampung: name, onChange, onBlur, ref dari RHF
  ({ label, error, ...rest }, ref) => {
    return (
      <div className="mb-4">
        <Label htmlFor={rest.name}>{label}</Label>
        <Input
          ref={ref}
          error={error}
          {...rest} // ✅ spread semua props RHF (name, type, placeholder, onChange, onBlur)
        />
      </div>
    );
  },
);

InputForm.displayName = "InputForm"; // ✅ Best practice untuk forwardRef

export default InputForm;
