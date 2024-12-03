import React from "react";
import Ratebox from "../components/Ratebox";

import RateEmployeeButton from "../components/RateEmployeeButton";
const page = () => {
  return (
    <div>
      <Ratebox title="Promotions & Discounts"></Ratebox>
      <Ratebox title="Environment"></Ratebox>
      <Ratebox title="Online Orders"></Ratebox>
      <Ratebox title="Overall Experience"></Ratebox>
      <RateEmployeeButton></RateEmployeeButton>
    </div>
  );
};

export default page;
