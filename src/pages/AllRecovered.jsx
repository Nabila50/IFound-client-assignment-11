import { use, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";

const AllRecovered = () => {
  const { user } = use(AuthContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://lost-found-server-six.vercel.app/recoveredItems")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-center text-[#454C71]">
        All Recovered Items
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item) => (
          <div
            key={item._id}
            className="border border-emerald-600 rounded-xl bg-emerald-50 p-4 shadow hover:shadow-xl hover:shadow-emerald-600 transition"
          >
            <div className="hero-content flex-col lg:flex-row">
              <div>
                <h1 className="text-5xl font-bold">{item.title}</h1>
                <p className="py-3">{item.description}</p>
                <p className="py-1">
                  <span className="font-semibold">Post Type:</span>{" "}
                  {item.recoveredDate}{" "}
                </p>
                <p className="py-1">
                  <span className="font-semibold">Category:</span>{" "}
                  {item.recoveredLocation}{" "}
                </p>
                <p className="py-1">
                  <span className="font-semibold">Location:</span>{" "}
                  {item.recoveredBy.email}{" "}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllRecovered;
