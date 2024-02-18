import Image from "next/image";
import { Navbar } from "./components/navbar";
import hero from "./images/landing.png";
import largestBroker from "./images/largest-broker.svg";
import presslogo from "./images/press-logos.png";
import ecosystem from "./images/ecosystem.png"
import { MoveRight } from "lucide-react";
import EmiCalculator from "./calculator/page";
// const googlefont = Open_Sans
export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <EmiCalculator/>
      <div className="w-full my-14 -z-10  relative text-gray-600">
     
        <div className="w-[90%] mx-auto relative md:w-[1000px]">
 
         
          <h2 className="text-center text-5xl text-gray-700 my-12">
            Invest in everything
          </h2>
          <h3 className="p-2 text-center text-1.7xl">
            Online platform to invest in stocks, derivatives, mutual funds, and
            more
          </h3>
          <button className="bg-blue-500 text-white  rounded-sm  hover:bg-gray-800 px-10 py-3 relative left-[50%] translate-x-[-50%] my-5">
            Sign up now
          </button>
        </div>
      </div>
    </>
  );
}