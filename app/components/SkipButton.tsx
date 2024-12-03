import React from "react";
import Link from "next/link";
const SkipButton = () => {
  return (
    <div className="p-7">
      <div className=" flex justify-center mt-7 ">
        <Link
          href="FinalReview"
          className="bg-red-500 p-4 w-32 rounded-md text-center"
        >
          Skip
        </Link>
      </div>
    </div>
  );
};

export default SkipButton;
