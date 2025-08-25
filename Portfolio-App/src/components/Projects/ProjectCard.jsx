import React from "react";
import bannerImg from "../../assets/image.png";

export const Projectcard = ({ title, main }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col justify-between w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl h-[460px]">
      <div>
        <img className="p-4" src={bannerImg} alt="project screenshot" />
        <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
          {title}
        </h3>
        <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      </div>
      <div className="p-2 md:p-4 flex gap-2 md:gap-4">
        <button className="text-white py-2 px-3 text-sm md:text-lg font-semibold rounded-3xl bg-[#465687] hover:opacity-85 duration-300 hover:scale-105">
          Demo
        </button>
        <button className="text-white py-2 px-3 text-sm md:text-lg font-semibold rounded-3xl bg-[#465687] hover:opacity-85 duration-300 hover:scale-105">
          Source Code
        </button>
      </div>
    </div>
  );
};
