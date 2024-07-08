//  https://api.openweathermap.org/data/2.5/weather?q=Chandigarh&appid=35293679f91112d1de5fb644869c868c

import React, { useEffect, useState } from "react";

import "../style.css";
import ShimmerUi from "../utils/ShimmerUi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../store/buttonSlice";
import { addbtn, removebtn } from "../store/cardBtnSlice";
import { cityName } from "../store/citySlice";
import Weathercard from "./weathercard";

const Temperature = () => {
  const city = useSelector((store) => store.cityValue.city);

  const [searchValue, setSearchValue] = useState(city);
  const [tempInfo, setTempInfo] = useState({});
  console.log(tempInfo);
  const [shimmerShow, setshimmerShow] = useState(true);
  const navigate = useNavigate();
  const cartData = useSelector((store) => store.fav.cartList);

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=35293679f91112d1de5fb644869c868c`;

      const res = await fetch(url);
      const data = await res.json();
      //console.log(data);

      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };

      setTempInfo(myNewWeatherInfo);
      setshimmerShow(false);
      // dispatch(addbtn());
      cartData.map((item) => {
        if (item.name != city) {
          console.log(item.name);
          dispatch(addbtn());
        }
      });
    } catch (error) {
      navigate("/error");
    }
  };
  useEffect(() => {
    getWeatherInfo();
  }, []);

  const dispatch = useDispatch();

  const handleFavouriteList = () => {
    navigate("/favourite");
    dispatch(toggle());
  };
  const handleSearchInput = (e) => {
    setSearchValue(e.target.value);
  };
  dispatch(cityName(searchValue));

  if (shimmerShow === true) return <ShimmerUi />;
  return (
    <>
      <div className="wrap ml-auto mr-auto p-2 sm: lg:w-[600px]">
        <div className="search mt-5">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm border-1 border-[#048b9c] "
            value={searchValue}
            onChange={handleSearchInput}
          />
          <button
            className="searchButton w-[80px] rounded-r-md"
            type="button"
            onClick={getWeatherInfo}
          >
            Search
          </button>
          <button
            className="searchButton w-[200px] rounded-md ml-2 mt-[1px] font-bold"
            type="button"
            onClick={handleFavouriteList}
          >
            Favourite List {cartData.length}
          </button>
        </div>
      </div>

      {/* our temp card */}

      <Weathercard tempInfo={tempInfo} input={searchValue} />
    </>
  );
};

export default Temperature;
