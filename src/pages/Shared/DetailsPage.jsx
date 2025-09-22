import React, { use, useEffect } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../AuthContext/AuthContext";

const DetailsPage = () => {

  const { user } = use(AuthContext);

  const {_id, postType, photoUrl, title, description, category, location, date }= useLoaderData();
   
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={photoUrl}
          className="max-w-sm rounded-lg shadow-2xl w-110 h-75 mr-5"
        />
        <div>
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-3">
           {description}
          </p>
          <p className="py-1"><span className="font-semibold">Post Type:</span>  {postType}  </p>
          <p className="py-1"><span className="font-semibold">Category:</span>  {category}  </p>
          <p className="py-1"><span className="font-semibold">Location:</span>  {location}  </p>
          <p className="py-1"><span className="font-semibold">Date:</span>  {date}  </p>        
             
 
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
