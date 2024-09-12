import React from "react";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />

      <main class="flex flex-col md:flex-row justify-center items-center py-10 sm:py-20 px-6 md:px-12">
        <div class="flex flex-col space-y-7 sm:space-y-4 md:max-w-lg lg:max-w-md md:w-1/2">
          <div class="max-w-2xl">
            <div class="sm:mb-8 sm:flex sm:justify-left">
              <div class="flex max-w-sm items-center rounded-full px-3 text-sm text-gray-600 bg-gray-200 hover:bg-gray-300 transition">
                <a
                  href="#"
                  class="font-semibold text-white rounded-full p-1 px-3 m-2 bg-[#0055BA]"
                >
                  <span class="">New</span>
                </a>
                NEW The Mono Widget 2.0 is Live!
                <span class="material-symbols-outlined"> arrow_forward </span>
              </div>
            </div>
          </div>
          <h1 class="text-3xl md:text-7xl sm:text:4xl font-semibold">
            Reliably access bank accounts
          </h1>
          <p class="text-base sm:text-lg text-gray-700">
            Mono helps businesses to access high-quality financial data and
            direct bank payments.
          </p>
          <div class="flex space-x-2 sm:space-x-4">
            <button class="flex items-center bg-[#0055BA] text-white px-4 py-3 text-sm sm:text-base rounded-lg hover:bg-gray-700">
              Get Started for free
              <span class="material-symbols-outlined"> arrow_forward </span>
            </button>
            <button class="flex items-center bg-gray-300 text-black px-4 py-3 text-sm sm:text-base rounded-lg hover:bg-gray-700">
              Contact Sales
              <span class="material-symbols-outlined"> arrow_forward </span>
            </button>
          </div>
        </div>
        <div class="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src="/image.png"
            alt=" Image"
            class="w-[70%] max-w-s md:max-w-full"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
