import React, { use, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { Link, useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../AuthContext/AuthContext";
import Swal from "sweetalert2";
import axios from "axios";

const PostPage = () => {
  const { user } = use(AuthContext);

  const lostItems = useLoaderData();
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [recoveredDate, setRecoveredDate] = useState(new Date());
  const [recoveredLocation, setRecoveredLocation] = useState("");

  const openModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  // ---------------------------

  const handleSubmit = (e) => {
    e.preventDefault();

    const recoveryInfo = {
      itemId: selectedItem._id,
      recoveredDate: recoveredDate.toISOString(),
      recoveredLocation,
      recoveredBy: {
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
      },
    };
    console.log("Recovery Info Submitted:", recoveryInfo);

    axios
      .post("http://localhost:3000/recovered", recoveryInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your data is recovered",
            showConfirmButton: false,
            timer: 1500,
          });
 
        }
      })

      .catch((error) => {
        console.log(error);
      });

    setShowModal(false);
  };

 

  return (
    <div >
      <h1 className="text-3xl text-[#454C71] font-bold text-center mt-10 mb-7">Find Your Product</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mb-12">
        {lostItems.map((lostItem) => {
        return (
          <div className="card bg-emerald-50 w-90 shadow-sm">
          <figure>
            <img className="h-60 w-90" src={lostItem.photoUrl} alt="Shoes" />
          </figure>
          <div className="card-body"> 
            <h2 className="card-title">{lostItem.title}</h2>
            <p>{lostItem.description}</p>
            <div className="card-actions justify-end">
              <button
                onClick={() => openModal(lostItem)}
                className="btn bg-[#FF4245] font-bold text-white"
              >
                {lostItem.postType === "Lost" ? "Found This!" : "This is Mine!"}
              </button>
            </div>
          </div>

          
        </div>
        )
      }
       
      )}

      {/* Modal */}
      {showModal && selectedItem && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md w-full max-w-lg shadow-lg relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-xl font-bold"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold mb-4">Recovery Info</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-semibold mb-1">
                  Recovered Location
                </label>
                <input
                  type="text"
                  required
                  value={recoveredLocation}
                  onChange={(e) => setRecoveredLocation(e.target.value)}
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">
                  Recovered Date
                </label>
                <DatePicker
                  selected={recoveredDate}
                  onChange={(date) => setRecoveredDate(date)}
                  className="input input-bordered w-full"
                  dateFormat="yyyy-MM-dd"
                />
              </div>

              <div className="flex items-center space-x-4">
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p>
                    <strong>{user.displayName}</strong>
                  </p>
                  <p>{user.email}</p>
                </div>
              </div>

              <button
                type="submit"
                className="btn bg-[#FF4245] text-white font-bold rounded-2xl w-full"
              >
                Submit Recovery Info
              </button>
            </form>
          </div>
        </div>
      )}

      </div>
      
 
    </div>
  );
};

export default PostPage;
