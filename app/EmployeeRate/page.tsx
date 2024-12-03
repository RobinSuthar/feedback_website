import React from "react";
import Image from "next/image";
import img from "../images/pexels-chevanon-1108099.jpg";
import SkipButton from "../components/SkipButton";
import Link from "next/link";
import YesButton from "../components/YesButton";
const page = () => {
  return (
    <div>
      <div>
        <div className="flex justify-center text-4xl mt-9">Anonumus Review</div>
        <div className="flex justify-center text-sm sm:text-xl mt-2 ">
          Would you Like you Rate any one of our Employee.
        </div>
      </div>
      <div className=" flex justify-evenly h-24 mt-11">
        <div className="bg-blue-800 border-2 rounded-md">
          L
          <Link href="">
            <Image
              src={img} // Path to your image
              alt="Employee image" // Alt text for accessibility
              width={100} // Set the width
              height={100} // Set the height
            />
            <div className="text-center">Robin</div>
          </Link>
        </div>
        <div className="bg-blue-800 border-2 rounded-md">
          <Image
            src={img} // Path to your image
            alt="Employee image" // Alt text for accessibility
            width={100} // Set the width
            height={100} // Set the height
          />
          <div className="text-center">Jeswin</div>
        </div>
        <div className="bg-blue-800 border-2 rounded-md">
          <Image
            src={img} // Path to your image
            alt="Employee image" // Alt text for accessibility
            width={100} // Set the width
            height={100} // Set the height
          />
          <div className="text-center">Brad</div>
        </div>
      </div>
      <div className=" flex justify-evenly h-24 mt-11">
        <div className="bg-blue-800 border-2 rounded-md">
          <Image
            src={img} // Path to your image
            alt="Employee image" // Alt text for accessibility
            width={100} // Set the width
            height={100} // Set the height
          />
          <div className="text-center">Jose</div>
        </div>
        <div className="bg-blue-800 border-2 rounded-md">
          <Image
            src={img} // Path to your image
            alt="Employee image" // Alt text for accessibility
            width={100} // Set the width
            height={100} // Set the height
          />
          <div className="text-center">Jonathan</div>
        </div>
        <div className="bg-blue-800 border-2 rounded-md">
          <Image
            src={img} // Path to your image
            alt="Employee image" // Alt text for accessibility
            width={100} // Set the width
            height={100} // Set the height
          />
          <div className="text-center">Jordyn</div>
        </div>
      </div>
      <div className=" flex justify-evenly h-24 mt-11">
        <div className="bg-blue-800 border-2 rounded-md">
          <Image
            src={img} // Path to your image
            alt="Employee image" // Alt text for accessibility
            width={100} // Set the width
            height={100} // Set the height
          />
          <div className="text-center">Kat</div>
        </div>
        <div className="bg-blue-800 border-2 rounded-md">
          <Image
            src={img} // Path to your image
            alt="Employee image" // Alt text for accessibility
            width={100} // Set the width
            height={100} // Set the height
          />
          <div className="text-center">Calvin</div>
        </div>
      </div>
      <SkipButton />
      <YesButton></YesButton>
    </div>
  );
};

export default page;
