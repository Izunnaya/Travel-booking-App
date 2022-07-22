import { React } from "react";
import { BsDashLg, BsPlusLg } from "react-icons/bs";

const GuestsInput = ({ guestHandler, selectGuest }) => {
  // The arguments passed in the "guestHandler" as values in the function are descrided as follows: "d: for decrease & i:Increase"

  return (
    <div className="absolute top-[63px] w-full bg-stone-100 rounded-md left-0 p-5 cursor-default">
      <div className="flex justify-between items-center text-center mb-5  text-xl font-light">
        <div>
          <h4>Adults</h4>
        </div>

        <div className="cursor-pointer text-base flex justify-center items-center">
          <button
            className="rounded-full bg-slate-200 p-3"
            onClick={() => guestHandler("adults", "d")}
            disabled={selectGuest.adults <= 1}
            type={"button"}
          >
            <BsDashLg />
          </button>

          <span className="cursor-default text-xl pt-1 mx-3">
            {selectGuest.adults}
          </span>
          <button
            className="rounded-full bg-slate-200 p-3"
            onClick={() => guestHandler("adults", "i")}
            type={"button"}
          >
            <BsPlusLg />
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center text-center my-3 pt-3  text-xl font-light">
        <div>
          <h4>Children</h4>
        </div>

        <div className="cursor-pointer text-base flex justify-center items-center">
          <button
            className="rounded-full bg-slate-200 p-3"
            onClick={() => guestHandler("children", "d")}
            disabled={selectGuest.children <= 0}
            type={"button"}
          >
            <BsDashLg />
          </button>

          <span className="cursor-default text-xl pt-1 mx-3">
            {selectGuest.children}
          </span>
          <button
            className="rounded-full bg-slate-200 p-3"
            onClick={() => guestHandler("children", "i")}
            type={"button"}
          >
            <BsPlusLg />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuestsInput;
