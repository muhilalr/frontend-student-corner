import { Eye, EyeOff } from "lucide-react";
import { useState, forwardRef } from "react";

const Input = forwardRef(
  // ✅ Hapus value & onChange dari destructure, tampung di ...rest
  ({ type, error, ...rest }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";

    return (
      <div>
        <div className="relative">
          <input
            ref={ref} // ✅ wajib untuk RHF
            className={`border border-primary rounded-md w-full px-3 py-2 pr-10 text-slate-700 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder:opacity-50 ${
              error ? "border-red-500" : ""
            }`}
            type={isPassword ? (showPassword ? "text" : "password") : type}
            {...rest} // ✅ spread: name, placeholder, onChange, onBlur dari RHF
          />

          {isPassword && (
            <button
              type="button"
              className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                // Icon Eye
                <Eye size={20} />
              ) : (
                // Icon Eye Off
                <EyeOff size={20} />
              )}
            </button>
          )}
        </div>

        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>
    );
  },
);

Input.displayName = "Input"; // ✅ Best practice forwardRef

export default Input;
