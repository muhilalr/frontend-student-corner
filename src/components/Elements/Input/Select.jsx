import Label from "./Label";

const Select = ({ label, name, options, value }) => {
  return (
    <div className="mb-4">
      <Label htmlFor={name}>{label}</Label>
      <select
        name={name}
        id={name}
        className="w-full px-3 py-2 text-slate-700 border border-[#043277] rounded-md focus:outline-none focus:ring-1 focus:ring-[#043277]"
      >
        <option value="" className="text-slate-700">
          -- Pilih Jenis Kelamin --
        </option>
        {options.map((option, index) => (
          <option
            key={index}
            value={option.value}
            selected={value === option.value}
            className="text-slate-700"
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
