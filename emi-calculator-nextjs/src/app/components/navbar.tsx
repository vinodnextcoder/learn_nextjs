"use client";
import Image from "next/image";
import logo from "../images/logo.svg";
import kitelogo from "../images/kite-logo.svg";
import consolelogo from "../images/console.svg";
import kiteconnectlogo from "../images/kite-connect.svg";
import coinlogo from "../images/coin.svg";
import varsitylogo from "../images/varsity.png";
import tradinglogo from "../images/tqna.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";
export function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const items = [
    {
      name: "kite",
      src: kitelogo,
    },
    {
      name: "Console",
      src: consolelogo,
    },
    {
      name: "Kite Connect",
      src: kiteconnectlogo,
    },
    {
      name: "Coin",
      src: coinlogo,
    },
    {
      name: "Varsity",
      src: varsitylogo,
    },
    {
      name: "Trading Q&A",
      src: tradinglogo,
    },
  ];
  return (
    <div className=" w-full border-solid border-b-2 border-y-0 border-t-0">
      <div className="w-full md:w-[1000px] relative left-[50%] translate-x-[-50%]">
        <div className="w-full h-16  flex items-center justify-between">
          <Image
            src={logo}
            width={609}
            height={80}
            alt="logo"
            className="w-32 mx-4"
          ></Image>
          <div className="mx-4 md:mx-20 flex">
            <ul className="list-none hidden md:flex md:text-gray-800 md:font-light md:text-sm md:mx-6">
              <li className="px-6">Signup</li>
              <li className="px-6">About</li>
              <li className="px-6">Products</li>
              <li className="px-6">Pricing</li>
              <li className="px-6">Support</li>
            </ul>
            <Menu
              className="w-6 h-6 text-gray-800"
              onClick={handleClick}
            ></Menu>
          </div>
        </div>
        {open && (
          <div
            className={
              "w-[95%] z-20 fixed top-[3rem] left-[50%] translate-x-[-50%] h-[550px] mx-auto bg-white grid grid-rows-3" +
              (open ? "block" : "hidden")
            }
          >
            <X className="absolute right-3" onClick={handleClick}></X>
            <div className="md:hidden border-solid border-b-2 border border-t-0 border-x-0">
              <ul className="list-none md:text-gray-800 font-light grid grid-cols-2 h-full  z-10">
                <li className="px-6 inline-block flex items-center">Signup</li>
                <li className="px-6 inline-block flex items-center">About</li>
                <li className="px-6 inline-block flex items-center">
                  Products
                </li>
                <li className="px-6 inline-block flex items-center">Pricing</li>
                <li className="px-6 inline-block flex items-center">Support</li>
              </ul>
            </div>
            <div className="border-solid border-b-2 border border-t-0 border-x-0">
              <ul className="list-none text-gray-800  grid grid-cols-2 h-full  z-10">
                {items.map((item: any , index: number) => (
                  <div className="flex"  key={index}>
                    <Image
                      src={item.src}
                      alt={item.name}
                      width={30}
                      height={30}
                      className="h-[30px] w-[30px] my-auto"
                    ></Image>
                    <li className="px-2 inline-block flex items-center ">
                      {item.name}
                    </li>
                  </div>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2">
              <div>
                <h3 className="font-bold text-gray-630 my-5">Utilities</h3>
                <ul className="list-none text-gray-600   h-full  z-10">
                  <li className="px-2  items-center ">Brokerage Calculator</li>
                  <li className="px-2  items-center ">Margin Calculator</li>
                  <li className="px-2  items-center ">Holiday Calender</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-630 my-5">Updates</h3>
                <ul className="list-none text-gray-600   h-full  z-10">
                  <li className="px-2  items-center ">Z-Connect blog</li>
                  <li className="px-2  items-center ">Pulse News</li>
                  <li className="px-2  items-center ">Ciculars / Bulletin</li>
                  <li className="px-2  items-center ">IPOs</li>
                </ul>
              </div>
            </div>
          </div>
        )}
        <div className="h-[100%-550px]" onClick={handleClick}></div>
      </div>
    </div>
  );
}