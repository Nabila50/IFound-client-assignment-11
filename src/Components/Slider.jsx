import React from "react";
import { motion } from "motion/react";

const Slider = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item relative w-full h-90">
          <div className="absolute"></div>

          <img
            src="https://i.ibb.co/HLYJRR9j/slider-1.webp"
            className="w-full"
          />
          <div className="absolute left-15 right-5 top-25">
            <h1 className="text-start text-6xl font-bold mb-3">IFound</h1>
            <p className="font-semibold">Where you can find your dreams</p>
          </div>
        </div>

         <div id="item2" className="carousel-item relative w-full h-90">
          <div className="absolute"></div>

          <img
            src="https://i.ibb.co/RGJPtpcw/bg-2.jpg"
            className="w-full"
          />
          <div className="absolute left-15 right-5 top-25">
            <h1 className="text-start text-6xl font-bold mb-3">Lost You Product?</h1>
            <p className="font-semibold text-lg">We are here to Help you!</p>
          </div>
        </div>

        <div id="item3" className="carousel-item relative w-full h-90">
          <div className="absolute"></div>

          <img
            src="https://i.ibb.co/bpysrfW/bg-3.webp"
            className="w-full"
          />
          <div className="absolute left-15 right-5 top-25">
            <h1 className="text-start text-6xl font-bold mb-3">Are You Read?</h1>
            <p className="font-semibold text-lg">To find your product</p>
          </div>
        </div>

        <div id="item4" className="carousel-item relative w-full h-90">
          <div className="absolute"></div>

          <img
            src="https://i.ibb.co/Vr7qv0y/bg-5.jpg"
            className="w-full"
          />
          <div className="absolute left-15 right-5 top-25">
            <h1 className="text-start text-6xl font-bold mb-3 text-white">Easy Access</h1>
            <p className="font-semibold text-lg text-white">To find your product</p>
          </div>
        </div>
 
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs hover:bg-emerald-400">
          1
        </a>
        <a href="#item2" className="btn btn-xs hover:bg-emerald-400">
          2
        </a>
        <a href="#item3" className="btn btn-xs hover:bg-emerald-400">
          3
        </a>
        <a href="#item4" className="btn btn-xs hover:bg-emerald-400">
          4
        </a>
      </div>
    </div>
   
  );
};

export default Slider;
