import React from "react";
import mountainImg from "../../assets/mountain (2).jpg";
import { BackgrounOverLay } from "../hero/HeroStyled";

const MountainView = () => {
  return (
    <section>
      <div className="my-20 relative">
        <img
          src={mountainImg}
          alt="mountain-img"
          className="h-[450px] md:h-[550px] w-full object-cover rounded"
        />
        <BackgrounOverLay className="bg-gray-900/30" />
        <div className="mountain-text absolute left-0 top-3 md:top-10 mx-5 md:mx-11 px-1 md:px-4 my-20">
          <div className="text-start text-slate-100">
            <h3 className="font-extrabold text-xl md:text-2xl my-3 md:my-4">
              Adventure
            </h3>
            <h4 className="text-xl md:text-4xl font-bold ">
              Your Perfect <br />
              <span className="inline-block mt-2">Adventure Experience</span>
            </h4>
            <p className="text-base md:text-xl font-bold  my-3 md:my-4">
              Activities and accommodations
            </p>

            <button
              className="py-3 px-4 bg-red-500 rounded-md my-5 capitalize text-xl"
              type="button"
            >
              read more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MountainView;
