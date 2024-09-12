import React from "react";
import MonoLogo from "/mono.svg";

const Navbar = () => {
  return (
    <div>
      <nav class="flex items-center h-20">
        <div class="flex w-full max-w-7xl mx-auto items-center justify-between px-6 sm:px-12">
          <div class="flex items-center space-between">
            <div class="mr-8">
              <a href="/">
                <img src={MonoLogo} alt="" />
              </a>
            </div>

            <ul class="hidden ml-24 sm:flex space-x-4 sm:space-x-10">
              <li class="flex items-center">
                <a href="" class="hover:text-gray-600">
                  Why Mono
                </a>
                <span class="material-symbols-outlined">
                  keyboard_arrow_down
                </span>
              </li>
              <li class="flex items-center">
                <a href="" class="hover:text-gray-600">
                  Products
                </a>
                <span class="material-symbols-outlined">
                  keyboard_arrow_down
                </span>
              </li>
              <li class="flex items-center">
                <a href="" class="hover:text-gray-600">
                  Learn
                </a>
                <span class="material-symbols-outlined">
                  keyboard_arrow_down
                </span>
              </li>
              <li class="flex items-center">
                <a href="" class="hover:text-gray-600">
                  Developers
                </a>
                <span class="material-symbols-outlined">
                  keyboard_arrow_down
                </span>
              </li>
            </ul>
          </div>

          <div class="">
            <button class="bg-[#0055BA] text-white p-4 px-9 rounded-lg">
              <a href="/login"> Sign in</a>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
