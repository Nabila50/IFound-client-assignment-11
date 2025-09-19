import React from "react";
import { FaUsers } from "react-icons/fa";
import { SiOpenjsfoundation } from "react-icons/si";

const CompanyStatus = () => {
  return (
    <div className="my-14 bg-sky-50  rounded-2xl">
      <h1 className="py-5 text-4xl text-[#454C71] font-bold text-center ">Company Progress</h1>
      <div className="stats shadow-2xl shadow-emerald-200  gap-2 pb-10 px-5 ml-5">
        <div className="stat bg-[#c0faff] rounded-2xl border-sky-50">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block  h-12 w-12  stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              ></path>
            </svg>
          </div>
          <div className="stat-title text-[ #454C71] font-semibold">New Users</div>
          <div className="stat-value text-[#02C5BD]">100</div>
          <div className="stat-desc text-[ #454C71] font-semibold">↗︎ 120 (22%)</div>
        </div>

        <div className="stat bg-[#c0faff] rounded-2xl border-sky-50">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-12 w-12  stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>
          <div className="stat-title text-[ #454C71] font-semibold">New Registers</div>
          <div className="stat-value text-[#02C5BD]">103</div>
          <div className="stat-desc text-[ #454C71] font-semibold">↘︎ 90 (14%)</div>

           
        </div>
        <div className="stat bg-[#c0faff] rounded-2xl border-sky-50">
          <div className="stat-figure text-secondary">
           <FaUsers className="inline-block  h-12 w-12  stroke-current" />
          </div>
          <div className="stat-title text-[ #454C71] font-semibold">Total Loss Count</div>
          <div className="stat-value text-[#02C5BD]">421</div>
          <div className="stat-desc text-[ #454C71] font-semibold">application-100%</div>

           
        </div>
        <div className="stat bg-[#c0faff] rounded-2xl border-sky-50">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-12 w-12  stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>
          <div className="stat-title text-[ #454C71] font-semibold">Total Item found</div>
          <div className="stat-value text-[#02C5BD]">397</div>
          <div className="stat-desc text-[ #454C71] font-semibold">success rate - 94.29%</div>
        </div>
         <div className="stat bg-[#c0faff] rounded-2xl border-sky-50">
          <div className="stat-figure text-secondary">
            
            <SiOpenjsfoundation className="inline-block  h-12 w-12  stroke-current" />
          </div>
          <div className="stat-title text-[ #454C71] font-semibold">Pending Work</div>
          <div className="stat-value text-[#02C5BD]">24</div>
          <div className="stat-desc text-[ #454C71] font-semibold">pending work - 6.78%%</div>
        </div>
      </div>
    </div>
  );
};

export default CompanyStatus;
