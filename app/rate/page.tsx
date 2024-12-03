"use client";
import React, { useState } from "react";
import Ratebox from "../components/Ratebox";
import NextButton from "../components/NextButton";

const Page = () => {
  const [ratings, setRatings] = useState({
    wineCollection: 0,
    beerCollection: 0,
    staffBehaviour: 0,
    productAvailability: 0,
  });

  const handleRatingChange = (key: string, value: number) => {
    console.log(`Updating rating for ${key}:`, value); // Log which rating is being updated
    setRatings((prev) => ({ ...prev, [key]: value }));
    console.log("Updated ratings:", { ...ratings, [key]: value }); // Log the updated state
  };

  return (
    <div>
      <Ratebox
        title="Wine Collection"
        selected={ratings.wineCollection}
        onRatingChange={(value) => handleRatingChange("wineCollection", value)}
      />
      <Ratebox
        title="Beer Collection"
        selected={ratings.beerCollection}
        onRatingChange={(value) => handleRatingChange("beerCollection", value)}
      />
      <Ratebox
        title="Staff Behaviour"
        selected={ratings.staffBehaviour}
        onRatingChange={(value) => handleRatingChange("staffBehaviour", value)}
      />
      <Ratebox
        title="Availability of Products"
        selected={ratings.productAvailability}
        onRatingChange={(value) =>
          handleRatingChange("productAvailability", value)
        }
      />
      <NextButton />
    </div>
  );
};

export default Page;
