import Lottie from "lottie-react";
import React, { use } from "react";

import registerLottie from "../assets/Login.json";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../AuthContext/AuthContext";
import Swal from "sweetalert2";
import SocialLogIn from "./Shared/SocialLogIn";

const Register = () => {
  const { createUser } = use(AuthContext);
   const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    console.log(name, email, password, photo);

    // password validation------------------
        const passwordReq =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
         if (!passwordReq.test(password)) {
          Swal.fire({
            icon: "error",
            title: "Password Invalid",
            text: "Password should be at least 8 characters long and include 1 uppercase, 1 lowercase, and 1 special character.",
          });
          return;
        }

    // create users.....................................
    createUser(email, password)
      .then((result) => {
        if(result){
           Swal.fire({
          position: "middle-center",
          icon: "success",
          title: "You are successfully Registered",
          showConfirmButton: false,
          timer: 2500,
        });
        navigate('/');
        }
       
      })
      .catch((error) => {
        const errorCode = error.code;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Problem is: ${errorCode}`,
        });
      });
  };
  return (
    <div className="hero bg-emerald-50 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie animationData={registerLottie} loop={true}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-4xl font-bold mb-3 text-center">
              Register now!
            </h1>
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label">Full Name</label>
                <input
                  type="name"
                  name="name"
                  className="input"
                  placeholder="Full Name"
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Photo</label>
                <input
                  type="text"
                  name="photo"
                  className="input"
                  placeholder="photo URL"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <div className="flex mt-3">
                  <p>Do you already have an account?</p>
                  <NavLink
                    to="/login"
                    className="link link-hover text-red-600 font-semibold mr-30"
                  >
                    {" "}
                    Login
                  </NavLink>
                </div>
                <button className="btn  bg-[#FF4245] font-bold">
                  Register
                </button>
              </fieldset>
            </form>
            <SocialLogIn></SocialLogIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
