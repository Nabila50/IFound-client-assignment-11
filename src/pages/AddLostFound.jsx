import React, { use } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const AddLostFound = () => {
  const { user } = use(AuthContext);

  const navigate = useNavigate();

  const handleAddLostForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedLostForm = Object.fromEntries(formData.entries());
    console.log(updatedLostForm);

    const applicationForms = {
      applicant: user.email,
      updatedLostForm,
    };

    axios
      .post("https://lost-found-server-six.vercel.app/applicationForms", applicationForms)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your application has been submitted",
            showConfirmButton: false,
            timer: 1500,
          });
          
          navigate('/manageMyItems')
        }
      })

      .catch((error) => {
        console.log(error);
      });

    axios
      .post("https://lost-found-server-six.vercel.app/lost", updatedLostForm)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your application has been submitted",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="my-15">
      <h1 className="text-3xl text-center mb-5 font-bold text-[#454C71]">
        Lost & Found Form
      </h1>

      <form onSubmit={handleAddLostForm}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <fieldset className="fieldset bg-emerald-50  border-success rounded-box border p-10">
            <label className="label ">Post Type</label>
            <select
              defaultValue="Post Type"
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
            />

            <label className="label">Description</label>
            <input
              type="text"
              name="description"
              className="input w-full"
              placeholder="Description"
            />

            <label className="label">Photo</label>
            <input
              type="text"
              name="photoUrl"
              className="input w-full"
              placeholder="Photo URL"
            />

            <label className="label">Location</label>
            <input
              type="text"
              name="location"
              className="input w-full"
              placeholder="location"
            />
          </fieldset>
          <fieldset className="fieldset bg-emerald-50  border-success rounded-box  border p-10">
            <label className="label">Category</label>
            <select
              defaultValue="Category"
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
            />

            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Name"
            />
            <label className="label">Email</label>
            <input
              type="text"
              name="email"
              className="input w-full"
              placeholder="Email"
              defaultValue={user?.email || ""}
              readOnly
            />
            <label className="label">Contact number</label>
            <input
              type="number"
              name="contact"
              className="input w-full"
              placeholder="Contact number"
            />
          </fieldset>
        </div>

        <div className="items-center justify-center text-center">
          <button type="submit" className=" btn  w-full bg-[#FF4245] font-semibold text-lg mt-8 ">
            Post Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddLostFound;
