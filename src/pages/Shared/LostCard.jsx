import React from "react";
import { Link, NavLink } from "react-router";

const LostCard = ({lostProduct}) => {

    const {_id, postType, photoUrl, title, description, category, location, date, contactInfo, name, user} = lostProduct;



  return (
    <div className="card bg-emerald-50 w-90 shadow-sm">
      <figure>
        <img className="h-60 w-90"
          src={photoUrl}
          alt="photo"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary pb-1">{postType}</div>
        </h2>
        <p>
          {description}
        </p>
        <div className="card-actions justify-end">
          <Link to={`/lost/${_id}`}><button className=" btn btn-accent border-2">View Details</button></Link>
           
        </div>
      </div>
    </div>
  );
};

export default LostCard;
