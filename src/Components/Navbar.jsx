import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../AuthContext/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          title: "Successfully SignedOut",
          icon: "success",
          draggable: true,
          timer: 2500,
        });
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

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/postPage">Post</NavLink>
      </li>
      <li>
        <NavLink to="/lostAndFound">Lost & Found</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-[#02C5BD] shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img className="w-15 h-15" src="logo.png" alt="" />
          IFound
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="dropdown dropdown-end">
              <img
                tabIndex={0}
                role="button"
                className="w-13 h-13"
                src="logo.png"
                alt=""
              />
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <NavLink to="/addLostFound">Add Lost & Found</NavLink>
                </li>
                <li>
                  <NavLink to="/allRecovered">All Recovered Items</NavLink>
                </li>
                <li>
                  <NavLink to="/manageMyItems">Manage My Items</NavLink>
                </li>
              </ul>
            </div>

            <NavLink
              onClick={handleSignOut}
              to="/login"
              className="btn m-1 bg-[#FF4245] border-none font-bold text-white"
            >
              {" "}
              LogOut{" "}
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/login" className="btn m-1 bg-[#FF4245] border-none font-bold text-white">
              LogIn
            </NavLink>
            <NavLink
              to="/register"
              className="btn m-1 border-none bg-[#FF4245] font-bold text-white"
            >
              Register
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
