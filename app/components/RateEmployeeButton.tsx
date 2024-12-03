import React from "react";
import Link from "next/link";
const RateEmployeeButton = () => {
  return (
    <div className="p-7">
      <div className=" flex justify-center mt-7  ">
        <Link
          href="EmployeeRate"
          className="bg-blue-500 p-4 w-32 rounded-md text-center"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default RateEmployeeButton;
