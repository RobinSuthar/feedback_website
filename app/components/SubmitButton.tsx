import React from "react";
import Link from "next/link";
const SubmitButton = () => {
  return (
    <div className="p-7">
      <div className=" flex justify-center mt-7  ">
        <Link
          href="Thankyou"
          className="bg-blue-500 p-4 w-32 rounded-md text-center"
        >
          Submit FeedBack
        </Link>
      </div>
    </div>
  );
};

export default SubmitButton;
