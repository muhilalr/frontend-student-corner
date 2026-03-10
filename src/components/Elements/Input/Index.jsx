import { useState } from "react";

const Input = ({ name, type, placeholder, value, onChange, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div>
      <div className="relative">
        <input
          className={`border border-primary rounded-md w-full px-3 py-2 pr-10 text-slate-700 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder:opacity-50 ${error ? "border-red-500" : ""}`}
          type={isPassword ? (showPassword ? "text" : "password") : type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />

        {isPassword && (
          <button
            type="button"
            className={`absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 cursor-pointer`}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.269-2.943-9.543-7a10.05 10.05 0 013.29-4.568m3.522-1.77A9.956 9.956 0 0112 5c4.478 0 8.269 2.943 9.543 7a9.96 9.96 0 01-1.249 2.427M15 12a3 3 0 01-3 3m0 0a3 3 0 01-3-3m3 3L3 3l18 18"
                />
              </svg>
            )}
          </button>
        )}
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default Input;
