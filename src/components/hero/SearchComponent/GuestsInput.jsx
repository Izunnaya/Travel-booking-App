import React from "react";
import { BsDashLg, BsPlusLg } from "react-icons/bs";

const GuestsInput = () => {
  return (
    <div className="absolute top-[63px] w-full bg-stone-100 rounded-md left-0 p-5 cursor-default">
      <div className="flex justify-between items-center text-center mb-5  text-xl font-light">
        <div>
          <h4>Adults</h4>
        </div>

        <div className="cursor-pointer text-base flex justify-center items-center">
          <div className="rounded-full bg-slate-200 p-3">
            <BsDashLg />
          </div>

          <span className="cursor-default text-xl pt-1 mx-3">1</span>
          <div className="rounded-full bg-slate-200 p-3">
            <BsPlusLg />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center text-center my-3 pt-3  text-xl font-light">
        <div>
          <h4>Children</h4>
        </div>

        <div className="cursor-pointer text-base flex justify-center items-center">
          <div className="rounded-full bg-slate-200 p-3">
            <BsDashLg />
          </div>

          <span className="cursor-default text-xl pt-1 mx-3">1</span>
          <div className="rounded-full bg-slate-200 p-3">
            <BsPlusLg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestsInput;
