"use client";
import React, { useState } from "react";

interface RateboxProps {
  title: string;
}
const ratebox: React.FC<RateboxProps> = ({ title }) => {
  const [userSelected, setUserSelected] = useState<string>("");

  const HandleClick = (selected: string) => {
    setUserSelected(selected);
    console.log(selected);
  };

  const getColor = (color: string) => {
    if (userSelected === color) {
      if (color === "Bad") {
        return "bg-red-500";
      } else if (color === "Ok") {
        return "bg-orange-500";
      } else if (color === "Good") {
        return "bg-yellow-500";
      } else if (color === "Great") {
        return "bg-green-300";
      } else if (color === "Awesome") {
        return "bg-green-600";
      }
    }
    return "bg-slate-200"; // Default background for unselected
  };
  return (
    <div className=" flex justify-center">
      <div className="shadow-xl mt-7  border-2 p-3 w-10/12 sm:w-8/12">
        <div className=" text-xl font-bold mt-2 sm:text-2xl">{title}</div>
        <div className="flex justify-center mt-4 mb-4 h-9 gap-1  ">
          <div
            className={` w-16  rounded-xl hover:bg-red-600 ${getColor("Bad")} `}
            onClick={() => HandleClick("Bad")}
          ></div>
          <div
            className={` w-16  rounded-xl hover:bg-orange-600 ${getColor(
              "Ok"
            )} `}
            onClick={() => HandleClick("Ok")}
          ></div>
          <div
            className={` w-16  rounded-xl hover:bg-yellow-600 ${getColor(
              "Good"
            )} `}
            onClick={() => HandleClick("Good")}
          ></div>
          <div
            className={` w-16  rounded-xl hover:bg-green-300 ${getColor(
              "Great"
            )} `}
            onClick={() => HandleClick("Great")}
          ></div>
          <div
            className={` w-16  rounded-xl hover:bg-green-600 ${getColor(
              "Awesome"
            )} `}
            onClick={() => HandleClick("Awesome")}
          ></div>
        </div>
        <div className="flex justify-between text-sm sm:mt-4 sm:mb-2 sm:text-lg">
          <div>1- Awful</div>
          <div>5-Awesome</div>
        </div>
      </div>
    </div>
  );
};

export default ratebox;
