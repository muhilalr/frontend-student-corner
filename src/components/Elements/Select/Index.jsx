import { forwardRef } from "react";
import Label from "../Label/Index";

const Select = forwardRef(({ label, options, error, ...rest }, ref) => {
  return (
    <div className="mb-4">
      <Label htmlFor={name}>{label}</Label>

      <select
        ref={ref}
        {...rest}
        className="w-full px-3 py-2 text-slate-700 border border-primary rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
      >
        <option value="">-- Pilih Jenis Kelamin --</option>

        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
});

Select.displayName = "Select";

export default Select;
