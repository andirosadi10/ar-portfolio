import React from 'react';
import Typed from 'react-typed';
import { IoMoon, IoSunnySharp } from 'react-icons/io5';

const Home = () => {
  return (
    <div className="flex flex-row md:flex-col-reverse md:justify-center md:items-center lg:flex-row w-5/6 bg-slate-100 p-4 text-center dark:bg-slate-900">
      <div className="flex w-full sm:w-2/3 flex-col items-center justify-center gap-4">
        <p className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white">
          Hallo, my name is Andi Rosadi
        </p>
        <Typed
          strings={[`I'm a Web Developer`]}
          typeSpeed={60}
          backSpeed={70}
          loop
          className="text-wrap text-4xl sm:text-5xl font-bold text-slate-800 dark:text-white"
        />
        <span className="font-normal dark:text-slate-400  text-slate-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis
          similique, reiciendis eveniet doloribus dolorem expedita in
          reprehenderit, quod quaerat corrupti quia nam, error omnis! Veritatis
          quia eum placeat aspernatur odio.
        </span>
        <button className="rounded-full bg-orange-700 p-2 px-4 font-semibold text-white hover:bg-orange-600">
          More About Me
        </button>
      </div>
      <div className="flex w-0 sm:w-1/3 flex-col items-center justify-center">
        <div className="border-t-4 border-red-700 p-8">
          <img src="http://placeimg.com/250/350" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
