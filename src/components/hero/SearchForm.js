import { React, useState } from "react";
import { BsGeoAlt, BsChevronDown, BsCalendar } from "react-icons/bs";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { FormInputStyle, FormWrapper, SearchButton } from "./HeroStyled";

const SearchForm = () => {
  const [inputPlaceholder, setInputPlaceHolder] = useState(true);

  const [openDate, setOpenDate] = useState(false);

  const placeHolderHandler = () => {
    setInputPlaceHolder(!inputPlaceholder);
    setOpenDate(!openDate);
  };
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
      <FormInputStyle className="relative">
        <div className="py-3">
          <small className="text-lg font-semibold pr-2">Guests</small>
          <span className=" bg-slate-600 px-2 rounded-full text-white">1</span>
        </div>
        <div className="py-4">
          <BsChevronDown size={22} />
        </div>

        <div className="hidden absolute top-[60px] w-full h-[30px] bg-slate-300 bprder rounded-sm"></div>
      </FormInputStyle>

      {/* Search Button */}
      <SearchButton>Search</SearchButton>
    </FormWrapper>
  );
};

export default SearchForm;
