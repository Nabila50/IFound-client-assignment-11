import React, { use } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { Link, useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdateItems = () => {
  const {
    _id,
    postType,
    title,
    description,
    photoUrl,
    location,
    category,
    date,
    name,
    email,
    contact,
  } = useLoaderData();

  const navigate = useNavigate();
  const handleUpdateItems = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedItems = Object.fromEntries(formData.entries());
    console.log(updatedItems);


    // send updated Itmes data to the db
    fetch(`https://lost-found-server-six.vercel.app/lost/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedItems),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Item Updated Successfully",
            icon: "success",
            draggable: true,
            timer: 2000
          });

          navigate('/manageMyItems');
              
        }
      });
  };
  return (
    <div className="my-15">
      <h1 className="text-3xl text-center mb-5 font-bold text-[#454C71]">
        Update Items Form
      </h1>

      <form onSubmit={handleUpdateItems}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <fieldset className="fieldset bg-emerald-50  border-success rounded-box border p-10">
            <label className="label ">Post Type</label>
            <select
              defaultValue={postType}
              className="select select-success w-full"
              name="postType"
            >
              <option disabled={true}>Post Type</option>

              <option value="lost">Lost</option>
              <option value="found">Found</option>
            </select>

            <label className="label ">Title</label>
            <input
              type="text"
              name="title"
              className="input border border-success w-full"
              placeholder="Title"
              defaultValue={title}
            />

            <label className="label">Description</label>
            <input
              type="text"
              name="description"
              className="input w-full"
              placeholder="Description"
              defaultValue={description}
            />

            <label className="label">Photo</label>
            <input
              type="text"
              name="photoUrl"
              className="input w-full"
              placeholder="Photo URL"
              defaultValue={photoUrl}
            />

            <label className="label">Location</label>
            <input
              type="text"
              name="location"
              className="input w-full"
              placeholder="location"
              defaultValue={location}
            />
          </fieldset>
          <fieldset className="fieldset bg-emerald-50  border-success rounded-box  border p-10">
            <label className="label">Category</label>
            <select
              defaultValue={category}
              className="select select-success w-full"
              name="category"
            >
              <option disabled={true}>Category</option>
              <option name="pets">Pets</option>
              <option name="documents">Documents</option>
              <option name="gadgets">Gadgets</option>
            </select>

            <label className="label">Date</label>
            <input
              type="date"
              name="date"
              className="input border border-success py-3 rounded-md w-full"
              defaultValue={date}
            />

            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Name"
              defaultValue={name}
              readOnly
            />
            <label className="label">Email</label>
            <input
              type="text"
              name="email"
              className="input w-full"
              placeholder="Email"
              defaultValue={email}
              readOnly
            />
            <label className="label">Contact number</label>
            <input
              type="number"
              name="contact"
              className="input w-full"
              placeholder="Contact number"
              defaultValue={contact}
            />
          </fieldset>
        </div>

        <div className="items-center justify-center text-center">
          <button type="submit" className=" btn  w-full bg-[#FF4245] font-semibold text-lg mt-8 ">
            Update Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateItems;
