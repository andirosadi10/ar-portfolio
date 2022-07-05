import React from 'react';

interface MenuProps {
  data: {
    name: String;
    icon: Any;
  }
}

const ListMenu: React.FC<MenuProps> = ({ data }) => {
  const Icon = data.icon;
  return (
    <li className="mt-2 border-b-2 sm:p-2 p-1 hover:border-orange-700 hover:text-orange-700 jutify-center flex">
      <a href="#" className="btn-animate-hover ">
        <Icon className="text-3xl" />
        <span className="hidden sm:hidden md:block lg:block">{data.name}</span>
      </a>
    </li>
  );
};

export default ListMenu;
