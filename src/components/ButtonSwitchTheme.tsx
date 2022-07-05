import React, { useState } from 'react';
import { IoMoon } from 'react-icons/io5';
import { FaRegSun } from 'react-icons/fa';

const ButtonSwitchTheme = () => {
  const [theme, setTheme] = useState();

  const handleClick = () => {
    alert('heheheh')
  };

  return (
    <button
      className="absolute top-4 right-4 rounded-full bg-white p-1 shadow"
      onClick={handleClick}
    >
      <IoMoon className="text-2xl text-slate-700" />
      <FaRegSun className="animate-spin text-2xl text-slate-700" />
    </button>
  );
};

export default ButtonSwitchTheme;
