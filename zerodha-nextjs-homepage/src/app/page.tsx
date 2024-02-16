import Image from "next/image";
import { Navbar } from "./components/navbar";
import hero from "./images/landing.png";
import largestBroker from "./images/largest-broker.svg";
import presslogo from "./images/press-logos.png";
import ecosystem from "./images/ecosystem.png"
import { MoveRight } from "lucide-react";
// const googlefont = Open_Sans
export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className="w-full my-14 -z-10  relative text-gray-600">
        <div className="w-[90%] mx-auto relative md:w-[1000px]">
          <Image
            src={hero}
            width={2362}
            height={994}
            alt="Landing Image Zerodha"
            className=""
          ></Image>
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
          <div className="grid md:grid-cols-2  my-12">
            <Image
              src={largestBroker}
              width={400}
              height={400}
              alt="Largest Broker"
            ></Image>
            <div>
              <h2 className="text-3xl bold  my-5">
                Largest stock broker in India
              </h2>
              <p>
                1+ Crore Zerodha clients contribute to over 15% of all retail
                order volumes in India daily by trading and investing in:
              </p>
              <div className="grid md:grid-cols-2 gap-3 my-4">
                <ul className=" mx-8 list-disc ">
                  <li>Futures and Options</li>
                  <li>Commodity derivatives</li>
                  <li>Currency derivatives</li>
                </ul>
                <ul className="mx-8 list-disc ">
                  <li>Stocks & IPOs</li>
                  <li>Direct mutual funds</li>
                  <li>Bonds and Govt. Securities</li>
                </ul>
              </div>
              <Image
                src={presslogo}
                width={710}
                height={40}
                alt="press"
              ></Image>
            </div>
          </div>
          <div className="w-full">
            <h2 className="text-3xl text-center">The Zerodha Universe</h2>
            <p className="text-xl text-center my-4">
              A whole ecosystem of modern investment apps tailored to specific
              needs, built from the ground up
            </p>
            <Image
            src={ecosystem}
            width={1512}
            height={982}
            alt="Zerodha Ecosystem"
            className=""
            >
            </Image>
            <div className="text-blue-500">
              <ul className="grid grid-cols-2 ">
                <li className="flex">Explore our product <MoveRight /> </li>
                <li className="flex mx-5">Try Kite demo <MoveRight /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}