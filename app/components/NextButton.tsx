import React from "react";
import Link from "next/link";
const NextButton = () => {
  return (
    <div className="p-7">
      <div className=" flex justify-center mt-7  ">
        <Link
          href="rate2"
          className="bg-blue-500 p-4 w-32 rounded-md text-center"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default NextButton;
