import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAllCart } from "../store/favSlice";
import { useNavigate } from "react-router-dom";
import { toggle } from "../store/buttonSlice";
import { addbtn, removebtn } from "../store/cardBtnSlice";
import Weathercard from "./weathercard";

const FavCountry = () => {
  const cartData = useSelector((store) => store.fav.cartList);
  const [showButton, setShowButton] = useState(false);
  console.log(cartData);
  const dispatch = useDispatch();
  const handleCartButton = () => {
    dispatch(removeAllCart());
    dispatch(addbtn());
  };
  const navigation = useNavigate();
  const handleHomeBtn = () => {
    navigation("/");
    dispatch(toggle());
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="flex flex-col sm:flex-row justify-center items-center text-center mb-6">
        <h1 className="text-xl mr-5 mt-3 sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-0">
          Weather of Favourite Countries
        </h1>
        <div className="flex space-x-4">
          {cartData.length !== 0 && (
            <button
              className="bg-[#048b9c] text-white px-4 py-2 rounded-md font-bold w-full sm:w-auto"
              type="button"
              onClick={handleCartButton}
            >
              Clear All
            </button>
          )}

          <button
            className="bg-[#048b9c] text-white px-4 py-2 rounded-md font-bold w-full sm:w-auto"
            type="button"
            onClick={handleHomeBtn}
          >
            Home
          </button>
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
        {cartData.map((item, index) => (
          <div key={index} className="mt-5">
            <Weathercard tempInfo={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavCountry;
