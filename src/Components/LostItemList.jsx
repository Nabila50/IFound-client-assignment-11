import React, { use, useEffect, useState } from "react";
import { MdDelete, MdSecurityUpdateGood } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const LostItemList = ({ myProfilePromise, items, setItems }) => {
  const lostItems = use(myProfilePromise);
 
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // start deleting the API
        fetch(`http://localhost:3000/lost/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
             
              Swal.fire({
                title: "Deleted!",
                text: "Your Item has been deleted.",
                icon: "success",
              });

              // remove the items
              const remainingItems = items.filter(item => item._id !== _id);
              setItems(remainingItems);
            }
          });
      }
    });

    // remove the Itmes from the state
  };
  return (
    <div className="my-10">
      <div className="overflow-x-auto #F1FCFD">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL Number</th>
              <th>Image</th>
              <th>Title</th>
              <th>Post Type</th>
              <th>Category</th>
              <th>Location</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {lostItems.map((lostItem, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={lostItem.photoUrl} alt="" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{lostItem.title}</div>
                  </div>
                </td>
                 <td>
                  {lostItem.postType}
               
                </td>
                <td>
                  {lostItem.category}
               
                </td>
                <td>{lostItem.location}</td>
                <th>
                  <Link
                    to={`/updateItems/${lostItem._id}`}
                    className="btn btn-ghost"
                  >
                    <MdSecurityUpdateGood size={30} />
                  </Link>
                </th>
                <th>
                  <button
                    onClick={() => handleDelete(lostItem._id)}
                    className="btn btn-ghost"
                  >
                    <MdDelete size={30} />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LostItemList;
