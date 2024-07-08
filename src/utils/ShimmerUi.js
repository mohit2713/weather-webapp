import React from "react";

const ShimmerUi = () => {
  return (
    <>
      <div className=" flex justify-center items-center">
        <div className="temperature shimmer h-10 w-6/12 mb-4 rounded "></div>
      </div>
      <div className="p-1 flex justify-center mb-5 items-center bg-gray-100 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-3xl">
        <div className="w-full bg-whit p-1 rounded-lg shadow-lg">
          <div className="weatherIcon shimmer h-40 w-40 mx-auto mb-6 mt-3 rounded-full"></div>

          <div className="weatherInfo mb-6 flex">
            <div className="temperature shimmer h-40 w-[500px] mb-4 rounded"></div>
            <div className="temperature shimmer h-40 w-[274px] ml-1 mb-4 rounded"></div>
          </div>

          {/* Weather information section */}

          <div className="extra-temp grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2 p-1">
            <div className="temp-info-minmax">
              <div className="two-sided-section flex items-center">
                <div className="shimmer h-8 w-6 sm:h-10 sm:w-10 rounded-full"></div>
                <div className="extra-info-leftside shimmer h-4 w-16 sm:h-6 sm:w-20  rounded"></div>
              </div>
              <div className="two-sided-section flex items-center">
                <div className="shimmer h-8 w-8 sm:h-10 sm:w-10 rounded-full"></div>
                <div className="extra-info-leftside shimmer h-4 w-16 sm:h-6 sm:w-20  rounded"></div>
              </div>
            </div>
            <div className="weather-extra-info">
              <div className="two-sided-section flex items-center">
                <div className="shimmer h-8 w-8 sm:h-10 sm:w-10 rounded-full"></div>
                <div className="extra-info-leftside shimmer h-4 w-16 sm:h-6 sm:w-20  rounded"></div>
              </div>
              <div className="two-sided-section flex items-center ">
                <div className="shimmer h-8 w-8 sm:h-10 sm:w-10 rounded-full"></div>
                <div className="extra-info-leftside shimmer h-4 w-16 sm:h-6 sm:w-20  rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShimmerUi;
