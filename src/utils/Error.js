// src/ErrorPage.js

import React from "react";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mt-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mt-2">
          Sorry, the page you are looking for does not exist.
        </p>
        <button
          onClick={() => (window.location.href = "/")}
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default Error;
