import React, { useEffect, useState } from "react";
import RecentLost from "./RecentLost";
import LostCard from "../Shared/LostCard";
import { Link } from "react-router";
import Accordian from "../../Components/Accordian";
import CompanyStatus from "../../Components/CompanyStatus";
import Slider from "../../Components/slider";

const Home = () => {
  const [lostProducts, setLostProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/lost")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setLostProducts(sorted.slice(0, 6));
      });
  }, []);

  
  return (
    <div>
      <div className="relative w-screen mx-[-70px]">
        <Slider></Slider>
      </div>
      
      <div className=" bg-base-300 my-10">
     
      <h1 className="my-9 text-4xl text-center font-bold text-[#454C71]">
        All Lost & Found Products
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
        {lostProducts.map((lostProduct) => (
          <LostCard key={lostProduct._id} lostProduct={lostProduct}></LostCard>
        ))}
      </div>
      
      <div className="flex justify-center mt-7">
        

        <Link to="/lostAndFound"><button className=" btn bg-[#FF4245] font-bold text-white rounded-lg py-5 border-2">See More</button></Link>
      </div>

      <Accordian></Accordian>
      <CompanyStatus></CompanyStatus>


    </div>

    </div>
    
  );
};

export default Home;
