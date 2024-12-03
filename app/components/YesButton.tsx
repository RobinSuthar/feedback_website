import React from "react";
import Link from "next/link";

const YesButton = () => {
  return (
    <div className=" flex justify-center">
      <Link
        href="Employee/2"
        className="bg-blue-500 p-4 w-32 rounded-md text-center"
      >
        Submit FeedBack
      </Link>
    </div>
  );
};

export default YesButton;
