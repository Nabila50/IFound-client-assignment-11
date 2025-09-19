import React, { useEffect, useState } from "react";
import { use } from "react";
import LostCard from "../Shared/LostCard";

const RecentLost = () => {
  const [lostProducts, setLostProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/lost")
      .then((res) => res.json())
      .then((data) => {
        setLostProducts(data);
        setFilteredProducts(data); 
      });
  }, []);

  // -----------Handle search-----------------
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = lostProducts.filter((item) => {
      return (
        item.title.toLowerCase().includes(query) ||
        item.location.toLowerCase().includes(query)
      );
    });

    setFilteredProducts(filtered);
  };

  return (
    <div className=" pb-20">
      
      {/* Search Input */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search by title or location..."
          value={searchQuery}
          onChange={handleSearch}
          className="input input-bordered w-full max-w-md"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10 place-items-center">
        
        {filteredProducts.length > 0 ? (
          filteredProducts.map((lostProduct) => (
            
            <LostCard key={lostProduct._id} lostProduct={lostProduct} />
            
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 text-lg">
            No items match your search.
          </div>
        )}
      </div>
      
     
    </div>
  );
};

export default RecentLost;
