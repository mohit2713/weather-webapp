import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, removeCart } from "../store/favSlice";
import { addbtn, removebtn } from "../store/cardBtnSlice";

const Weathercard = ({ tempInfo, input }) => {
  const [weatherState, setWeatherState] = useState("");
  const {
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,
  } = tempInfo;
  const cartData = useSelector((store) => store.fav.cartList);
  const showbutton = useSelector((store) => store.btn.buttonShow);
  const Handlebutton = useSelector((store) => store.cardbtn.handlebuttton);
  // console.log(Handlebutton);

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatherState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatherState("wi-fog");
          break;
        case "Clear":
          setWeatherState("wi-day-sunny");
          break;
        case "Smoke":
          setWeatherState("wi-day-cloudy-gusts");
          break;

        default:
          setWeatherState("wi-day-sunny");
          break;
      }
    }
  }, [weathermood]);

  // coverting the seconds into time

  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;

  const dispatch = useDispatch();
  const handleFavAdd = () => {
    if (Handlebutton === "Add") {
      dispatch(addCart(tempInfo));
      dispatch(removebtn());
    }
    if (Handlebutton === "Remove") {
      dispatch(removeCart());
      dispatch(addbtn());
    }
  };
  useEffect(() => {
    // console.log(cartData.length);
    if (cartData.length > 0) {
      cartData.map((item) => {
        if (item.name === input) {
          console.log("run");
          dispatch(removebtn());
        }
      });
    } else {
      dispatch(addbtn());
    }
  }, [tempInfo]);
  return (
    <>
      <article className="widget ml-auto mr-auto sm:w-3/12 md:w-8/12 lg:w-8/12 shadow-lg  ">
        <div className=" w-full text-end pt-2 pr-2 mt-2 mr-2">
          {showbutton && (
            <button
              className=" bg-[#048b9c] text-white w-[80px] h-[34.5px] rounded-md font-bold"
              type="button"
              onClick={handleFavAdd}
            >
              {Handlebutton}
            </button>
          )}
        </div>
        <div className="weatherIcon mb-4 ">
          <i className={`wi ${weatherState}`}></i>
        </div>

        <div className="weatherInfo mt-3 lg:flex flex-1 ml-auto mr-auto">
          <div className="temperature">
            <span>{temp}</span>
          </div>
          <div className="description p-2 ">
            <div className="weatherCondition">{weathermood}</div>
            <div className="place">
              {name},{country}
            </div>
          </div>
        </div>
        <div className="date mt-3"> {new Date().toLocaleString()} </div>
        {/* our 4column section */}
        <div className="extra-temp lg:grid">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {timeStr} <br /> Sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity}
                <br /> Humidity
              </p>
            </div>
          </div>
          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure} <br /> Pressure
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {speed} <br /> Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Weathercard;
