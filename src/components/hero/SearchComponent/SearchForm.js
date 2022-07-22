import { React, useState } from "react";
import {
  BsGeoAlt,
  BsChevronDown,
  BsCalendar,
  BsChevronUp,
} from "react-icons/bs";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { FormInputStyle, FormWrapper, SearchButton } from "../HeroStyled";
import GuestsInputDropdown from "./GuestsInputDropdown";

const SearchForm = () => {
  // state for controlling guest input
  const [openGuest, setOpenGuest] = useState(false);
  const [selectGuest, setSelectGuest] = useState({
    adults: 0,
    children: 0,
  });

  // This "guestHandler" is passed as a prop into the "GuestInput Component" and that's where the
  const guestHandler = (person, operator) => {
    setSelectGuest((prev) => {
      return {
        ...prev,
        [person]:
          operator === "i" ? selectGuest[person] + 1 : selectGuest[person] - 1,
      };
    });
  };
  // State for controlling use input and placeholder check.
  const [inputPlaceholder, setInputPlaceHolder] = useState(true);

  const [openDate, setOpenDate] = useState(false);

  const placeHolderHandler = () => {
    setInputPlaceHolder(!inputPlaceholder);
    setOpenDate(!openDate);
  };

  // State for displaying date library
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  return (
    <FormWrapper>
      {/* City Input */}
      <FormInputStyle>
        <input
          type="text"
          placeholder="Hotel, City..."
          className="bg-transparent w-full"
        />
        <div className="py-4">
          <BsGeoAlt size={24} />
        </div>
      </FormInputStyle>

      {/* Carlendar Input */}
      <FormInputStyle className="relative items-center font-semibold">
        <div onClick={placeHolderHandler}>
          {inputPlaceholder ? (
            <span className="flex">
              {`${format(date[0].startDate, "MM-dd-yyy")} > ${format(
                date[0].endDate,
                "MM-dd-yyy"
              )}`}
            </span>
          ) : (
            <input type="text" placeholder="When..." className="flex" />
          )}
        </div>
        <div className="py-4">
          <BsCalendar size={22} />
        </div>

        {/* Display Date */}
        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="absolute top-[60px]"
          />
        )}
      </FormInputStyle>

      {/* Guest Input */}
      <FormInputStyle className="relative transition-all ease-in duration-500">
        <div className="py-3" onClick={() => setOpenGuest(!openGuest)}>
          <small className="text-lg font-semibold pr-2">Guests</small>
          <span className=" bg-slate-600 px-2 rounded-full text-white">
            {selectGuest.adults + selectGuest.children}
          </span>
        </div>
        <div className="py-4 " onClick={() => setOpenGuest(!openGuest)}>
          {openGuest ? <BsChevronUp size={22} /> : <BsChevronDown size={22} />}
        </div>
        {openGuest && (
          <GuestsInputDropdown
            guestHandler={guestHandler}
            selectGuest={selectGuest}
          />
        )}
      </FormInputStyle>

      {/* Search Button */}
      <SearchButton>Search</SearchButton>
    </FormWrapper>
  );
};

export default SearchForm;
