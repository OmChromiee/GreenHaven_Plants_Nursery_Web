import React from "react";
import leaves from "./images/plants-bg.jpg";
import { Button } from "./ui/button";

const Main = () => {
  return (
    <div
      className="w-screen h-screen flex flex-col justify-center items-center object-cover px-5 bg-cover relative"
      style={{ backgroundImage: `url(${leaves})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

      {/* Main Content Container */}
      <div className="z-10 flex flex-col items-center w-full px-4 py-8 text-center">

        {/* Company Name and Button Section */}
        
        <div className="mb-12">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white font-poppins tracking-wide shadow-lg mb-6">
            GreenHaven
          </h1>
          <a href="/shop">
            <Button className="rounded-lg shadow-lg w-64 sm:w-80 lg:w-96 bg-gradient-to-r from-green-400 to-blue-500 text-white transform hover:scale-105 transition duration-300 ease-in-out py-4 px-8 text-xl">
              Get Started
            </Button>
          </a>
        </div>

        {/* Company Information Section */}
        <div className="py-6 px-6 lg:w-3/4 text-white text-base sm:text-lg lg:text-xl rounded-lg border-slate-100 border backdrop-blur-lg bg-white bg-opacity-20">
          <h2 className="text-2xl font-semibold mb-6">Welcome to GreenHaven</h2>
          <p className="mb-4">
            At GreenHaven, we believe that every home deserves a touch of nature's beauty. We dedicate ourselves to curating the finest collection of houseplants to suit any space.
          </p>
          <p className="mb-4">
            Whether you're looking for a low-maintenance succulent to brighten up your office desk or a statement-making monstera to transform your living room, GreenHaven has something for every plant lover.
          </p>
          <p className="mb-4">
            Our plants are carefully selected for their health, vibrancy, and ease of care, ensuring they thrive in your home for years to come. We pride ourselves on providing not just plants, but also the guidance and support you need to cultivate your indoor oasis.
          </p>
          <p>
            With a commitment to sustainability and a passion for greenery, GreenHaven is your go-to destination for bringing the serenity of nature indoors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
