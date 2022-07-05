import React, { useState, useRef } from 'react';
import {
  IoPersonSharp,
  IoHome,
  IoBriefcaseSharp,
  IoChatbubblesSharp,
  IoMoon
} from 'react-icons/io5';
import ButtonSwitchTheme from './ButtonSwitchTheme';
import ListMenu from './ListMenu';

interface MenuState {
  name: String;
  icon: Any;
}

const Sidebar = () => {
  const [menu, setMenu] = useState<MenuState[]>([
    { name: 'Home', icon: IoHome },
    { name: 'About', icon: IoPersonSharp },
    { name: 'Portfolio', icon: IoBriefcaseSharp },
    { name: 'Contact', icon: IoChatbubblesSharp },
  ]);

  return (
    <div className="h-screen md:w-1/5 w-2/12 bg-white p-4 text-center dark:bg-slate-800 overflow-hidden">
      <div className="mt-8 mb-20">
        <span className="hidden text-2xl font-bold text-slate-700 dark:text-white sm:block">
          Andi Rosadi
        </span>
        <span className="block text-3xl font-bold text-slate-700 dark:text-white sm:hidden">
          AR
        </span>
      </div>
      <ul className="text-slate-700 dark:text-white sm:p-0 lg:p-8">
        {menu && menu.map((data, i) => <ListMenu data={data} key={i} />)}
      </ul>

      <ButtonSwitchTheme/>
    </div>
  );
};

export default Sidebar;
