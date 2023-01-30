import React from "react";
import { FaCheck } from "react-icons/fa";

const HelpmeDecide = () => {
  return (
    <div className=" py-[80px] lg:w-4/5 lg:mx-auto md:w-4/5 md:mx-auto px-6 w-full flex lg:flex-row md:flex-row flex-col justify-between items-center mt-12">
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        className="lg:w-1/2 md:w-1/2 w-full text-slate-300 lg:pr-16"
      >
        <h3 className="text-xl border-b-2 border-purple-400 inline-block">
          Evotech- Welcome to evotech
        </h3>
        <h3 className="text-3xl my-5">
          Evotech Is Your Trusted <br className="lg:flex hidden" /> Source In IT
          Services And Support
        </h3>
        <p className="mb-5">
          Evotech is a privately owned IT Support and IT Services business
          formed in 2022.Today we&apos;re proud to boast a strong team of IT
          engineers who thrive on rolling up their sleeves and solving your IT
          problems and meeting your business needs.
        </p>

        <ul>
          <li className="flex justify-start items-start">
            {" "}
            <FaCheck className="mr-2 text-green-400"></FaCheck>
            <span>We are committed to providing quality IT Services</span>
          </li>
          <li className="flex justify-start items-start">
            {" "}
            <FaCheck className="mr-2 text-green-400"></FaCheck>
            <span>
              Our benefits are endless for local IT Companies & Startups
            </span>
          </li>
          <li className="flex justify-start items-start">
            {" "}
            <FaCheck className="mr-2 text-green-400"></FaCheck>
            <span>
              Really know the true needs and expectations of customers
            </span>
          </li>
          <li className="flex justify-start items-start">
            {" "}
            <FaCheck className="mr-2 text-green-400"></FaCheck>
            <span>Talented & experienced management solutions for IT</span>
          </li>
          <li className="flex justify-start items-start">
            {" "}
            <FaCheck className="mr-2 text-green-400"></FaCheck>
            <span>
              Processes of achieving the excellence and continue improvements
            </span>
          </li>
        </ul>
      </div>
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        className="lg:w-1/2 md:w-1/2 w-full  lg:mt-0 md:mt-0 mt-12"
      >
        <iframe
          className="w-[100%] rounded mr-4"
          height={400}
          src="https://www.youtube.com/embed/EIIkxSvNU_s"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default HelpmeDecide;
