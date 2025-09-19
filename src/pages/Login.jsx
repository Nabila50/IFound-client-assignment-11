import Lottie from "lottie-react";
import loginLottie from "../assets/loti.json";
import React, { use } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../AuthContext/AuthContext";
import Swal from "sweetalert2";
import SocialLogIn from "./Shared/SocialLogIn";

const Login = () => {
  const { signInUser } = use(AuthContext);
  const location = useLocation();
  // console.log('signin this page', location)

  const navigate = useNavigate();
  const from = location.state || '/';


  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    // SignIn User-----------------

    signInUser(email, password)
      .then((data) => {
        if (data) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "You LoggedIn Successfully",
            showConfirmButton: false,
            timer: 2500,
          });
        }

        navigate(from);

        console.log(data);
      })
      .catch((error) => {
        const errorCode = error.code;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Problem is: ${errorCode}`,
        });

        console.log(error)
      });
  };
  return (
    <div className="hero bg-sky-50 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie
            style={{ width: "400px" }}
            animationData={loginLottie}
            loop={true}
          ></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-4xl font-bold mb-3 text-center">LogIn Here!</h1>
            <form onSubmit={handleLogIn}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />

                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <div className="flex mt-3">
                  <p>Do you new here?</p>
                  <NavLink
                    to="/register"
                    className="link link-hover text-red-600 font-semibold mr-42"
                  >
                    {" "}
                    Registration
                  </NavLink>
                </div>
                <button className="btn  bg-[#FF4245] font-bold">LogIn</button>
               
              </fieldset>
            </form>
             <SocialLogIn from={from}></SocialLogIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
