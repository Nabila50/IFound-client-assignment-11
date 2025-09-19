import React from "react";
import faq from "../../src/assets/FAQ.json";
import Lottie from "lottie-react";

const Accordian = () => {
  return (
    <div className="mt-10 bg-blue-50 rounded-2xl py-15">
      <h1 className="text-4xl text-[#454C71] font-bold text-center pb-5">
        Frequent Ask Question
      </h1>
      <div className="flex">
        <div>
          <Lottie
            animationData={faq}
            loop={true}
            style={{ width: "390px" }}
          ></Lottie>
        </div>
         
           
          <div className="divider divider-horizontal"></div>
           
        
     
        <div className="mt-10 mx-15">
          <div className="collapse collapse-arrow bg-emerald-200 border border-base-300">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title font-semibold text-[#454C71]">
              How do I create an account?
            </div>
            <div className="collapse-content text-sm">
              Click the "Sign Up" button in the top right corner and follow the
              registration process.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-emerald-200 border border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold text-[#454C71]">
              I forgot my password. What should I do?
            </div>
            <div className="collapse-content text-sm">
              Click on "Forgot Password" on the login page and follow the
              instructions sent to your email.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-emerald-200 border border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold text-[#454C71]">
              How do I update my profile information?
            </div>
            <div className="collapse-content text-sm">
              Go to "My Account" settings and select "Edit Profile" to make
              changes.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-emerald-200 border border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold text-[#454C71]">
              Do I need my picture for registration
            </div>
            <div className="collapse-content text-sm">
              Yes, you need a picture for te registration
            </div>
          </div>
          <div className="collapse collapse-arrow bg-emerald-200 border border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold text-[#454C71]">
              Do I need my Passport?
            </div>
            <div className="collapse-content text-sm">
              during application you don't need any passport information but
              collecting time of products, you need to bring your passport with
              you
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
