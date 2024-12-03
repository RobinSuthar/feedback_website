"use client";
import React from "react";

interface RateboxProps {
  title: string;
  selected: number;
  onRatingChange: (value: number) => void;
}

const Ratebox: React.FC<RateboxProps> = ({
  title,
  selected,
  onRatingChange,
}) => {
  const ratings = [1, 2, 3, 4, 5];

  const getColor = (value: number) => {
    if (selected === value) {
      if (value === 1) return "bg-red-500";
      if (value === 2) return "bg-orange-500";
      if (value === 3) return "bg-yellow-500";
      if (value === 4) return "bg-green-300";
      if (value === 5) return "bg-green-600";
    }
    return "bg-slate-200";
  };

  const handleClick = (rating: number) => {
    console.log(`User clicked on rating: ${rating} for ${title}`); // Log the click
    onRatingChange(rating);
  };

  return (
    <div className="flex justify-center">
      <div className="shadow-xl mt-7 border-2 p-3 w-10/12 sm:w-8/12">
        <div className="text-xl font-bold mt-2 sm:text-2xl">{title}</div>
        <div className="flex justify-center mt-4 mb-4 h-9 gap-1">
          {ratings.map((rating) => (
            <div
              key={rating}
              className={`w-16 rounded-xl hover:cursor-pointer ${getColor(
                rating
              )}`}
              onClick={() => handleClick(rating)}
            ></div>
          ))}
        </div>
        <div className="flex justify-between text-sm sm:mt-4 sm:mb-2 sm:text-lg">
          <div>1- Awful</div>
          <div>5- Awesome</div>
        </div>
      </div>
    </div>
  );
};

export default Ratebox;
