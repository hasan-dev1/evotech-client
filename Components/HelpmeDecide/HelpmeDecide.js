import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const HelpmeDecide = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      className="desktop:w-4/5 desktop:mx-auto laptop:w-4/5 laptop:mx-auto tablet:w-4/5 tablet:mx-auto flex desktop:flex-row laptop:flex-row tablet:flex-row flex-col justify-between items-center pt-[80px] px-2"
    >
      <div className="desktop:w-1/2 laptop:w-1/2 tablet:w-1/2 w-full ">
        <h3 className="text-slate-400">why choose us</h3>
        <h3 className="text-2xl text-slate-300 mt-3">
          Outstanding <br /> Digital service time
        </h3>
        <p className="text-sm text-slate-300 mt-3">
          Choose us for your web development needs and experience the following
          benefits
        </p>

        <ul className="text-slate-300 mt-3">
          <li className="flex justify-start items-start my-2 text-sm">
            <span className="">
              {" "}
              <FaCheckCircle className="m-2 fill-[#7D6EEF] text-2xl"></FaCheckCircle>
            </span>
            <span>
              Our team of experienced web developers has a proven track record
              of delivering high-quality, innovative web solutions.
            </span>
          </li>
          <li className="flex justify-start items-start my-2 text-sm">
            <span className="">
              {" "}
              <FaCheckCircle className="m-2 fill-[#F58C01] text-2xl"></FaCheckCircle>
            </span>
            <span>
              Customized Solutions: We listen to your unique needs and provide
              customized web development solutions to meet your specific
              requirements.
            </span>
          </li>
          <li className="flex justify-start items-start my-2 text-sm">
            <span className="">
              {" "}
              <FaCheckCircle className="m-2 fill-[#41DC8B] text-2xl"></FaCheckCircle>
            </span>
            <span>
              Affordable Pricing: We offer competitive pricing without
              sacrificing quality, ensuring you receive the best value for your
              investment.
            </span>
          </li>
        </ul>
      </div>
      <div className="desktop:w-1/2 laptop:w-1/2 tablet:w-1/2 w-full">
        <img className="w-full h-full" src="uniclasshome.png" alt="" />
      </div>
    </div>
  );
};

export default HelpmeDecide;
