import React from 'react';
import RecentLost from './Home/RecentLost';

const LostAndFound = () => {
  return (
    <div>
      <h1 className="my-7 text-4xl text-center font-bold text-[#454C71]">
        Recently Lost & Found Products
      </h1>
      
      <RecentLost></RecentLost>
    </div>
  );
};

export default LostAndFound;