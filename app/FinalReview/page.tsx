"use client";
import React from "react";
import SubmitButton from "../components/SubmitButton";

const page = () => {
  return (
    <div>
      <div className="flex justify-center text-2xl p-8">
        Discuss your personal experience about this store. Whats great about
        this store. What could use improvement?
      </div>
      <div className="flex justify-center p-4">
        <form>
          <textarea
            className="bg-white w-80 rounded-lg shadow border h-72 text-black"
            placeholder="Write Area"
            name="pub"
            id="pub"
          ></textarea>
        </form>
      </div>
      <SubmitButton></SubmitButton>
    </div>
  );
};

export default page;
