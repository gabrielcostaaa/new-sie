"use client";

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const PasswordToggle = ({ inputId }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

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
    className="absolute inset-y-0 right-2 flex items-center mt-6"
    >
      {passwordVisible ? (
        <EyeOff className="w-6 h-6 text-gray-500" />
      ) : (
        <Eye className="w-6 h-6 text-gray-500" />
      )}
    </button>
  );
};

export default PasswordToggle;
