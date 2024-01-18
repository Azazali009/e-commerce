import React from "react";
import DealBanner from "./DealBanner";

const DayDealSection = () => {
  return (
    <section className="border-b px-2 py-12">
      <h1 className=" mb-8 text-center text-xs font-light capitalize sm:text-3xl ">
        Today&apos;s <span className=" ">offer</span>
      </h1>
      <DealBanner />
    </section>
  );
};

export default DayDealSection;
