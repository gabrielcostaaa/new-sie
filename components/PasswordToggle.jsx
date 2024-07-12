import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

const PasswordToggle = ({ inputId }) => {
  const [passwordVisible, setPasswordVisible] = useState(true);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
    const input = document.getElementById(inputId);
    if (input) {
      input.type = passwordVisible ? 'text' : 'password';
    }
  };

  return (
    <button
      type="button"
      onClick={togglePasswordVisibility}
      className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
    >
      {passwordVisible ? (
        <EyeOff className="mt-2 w-6 h-6 text-gray-200" />
      ) : (
        <Eye className="mt-2 w-6 h-6 text-gray-200" />
      )}
    </button>
  );
};

export default PasswordToggle;

