import React from "react";
import Ratebox from "../components/Ratebox";
import NextButton from "../components/NextButton";
const page = () => {
  return (
    <div>
      <Ratebox title="Wine Collection"></Ratebox>
      <Ratebox title="Beer Collection"></Ratebox>
      <Ratebox title="Staff Behaviour"></Ratebox>
      <Ratebox title="Avalabilty of Products"></Ratebox>
      <NextButton></NextButton>
    </div>
  );
};

export default page;
