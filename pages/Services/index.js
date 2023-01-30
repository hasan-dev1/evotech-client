import React from "react";
import { BiBriefcase, BiCabinet, BiCartAlt, BiDonateHeart, BiMeteor, BiRocket } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";

const Services = () => {
  return (
    <div className="lg:py-[80px] lg:w-4/5 lg:mx-auto py-16 ">
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        className="lg:w-2/3 lg:mx-auto text-center mb-12 "
      >
        <h3 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-300 to-blue-400">
          Services
        </h3>
        <p className="text-xl md:w-2/3 mx-auto px-2 w-full lg:mx-auto lg:w-full text-slate-300">
          “A successful website does three things: It attracts the right kinds
          of visitors. Guides them to the main services or product you offer.
          Collect Contact details for future ongoing relation.”
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 mx-6 mt-4">
        <div
          data-aos="zoom-out-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="bg-slate-900 px-3 pb-6 pt-12 rounded-xl "
        >
          <div className="text-center flex flex-col justify-center items-center py-6">
            <div
              className="sidelink text-center flex flex-col justify-center items-center text-3xl"
              style={{
                boxShadow: `0px 0px 100px 20px purple, inset 0px 0px 40px 2px purple`,
              }}
            >
              <BiBriefcase className="-rotate-45 shadow-2xl shadow-purple-500"></BiBriefcase>
            </div>
            <h3 className="text-3xl my-3 ">Small Bussiness</h3>
            <p>
              &quot;Small businesses are the backbone of the economy, embodying
              the spirit of entrepreneurship and innovation.&quot;
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-out-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="bg-slate-900 px-3 pb-6 pt-12 rounded-xl "
        >
          <div className="text-center flex flex-col justify-center items-center py-6">
            <div
              className="sidelink text-center flex flex-col justify-center items-center text-3xl"
              style={{
                boxShadow: `0px 0px 100px 20px purple, inset 0px 0px 40px 2px purple`,
              }}
            >
              <BiCartAlt className="-rotate-45 shadow-2xl shadow-purple-500"></BiCartAlt>
            </div>
            <h3 className="text-3xl my-3 ">E-Commerce</h3>
            <p>
              &quot;E-commerce has revolutionized the way we shop, providing
              limitless access to goods and services, bridging the gap between
              merchants and customers, and shaping the future of business.&quot;
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-out-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="bg-slate-900 px-3 pb-6 pt-12 rounded-xl "
        >
          <div className="text-center flex flex-col justify-center items-center py-6">
            <div
              className="sidelink text-center flex flex-col justify-center items-center text-3xl"
              style={{
                boxShadow: `0px 0px 100px 20px purple, inset 0px 0px 40px 2px purple`,
              }}
            >
              <FaGraduationCap className="-rotate-45 shadow-2xl shadow-purple-500"></FaGraduationCap>
            </div>
            <h3 className="text-3xl my-3 ">Education</h3>
            <p>
              &quot;Educational websites are the gateway to knowledge,
              empowering learners with access to endless resources and
              opportunities, and paving the way for a brighter future.&quot;
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-out-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="bg-slate-900 px-3 pb-6 pt-12 rounded-xl "
        >
          <div className="text-center flex flex-col justify-center items-center py-6">
            <div
              className="sidelink text-center flex flex-col justify-center items-center text-3xl"
              style={{
                boxShadow: `0px 0px 100px 20px purple, inset 0px 0px 40px 2px purple`,
              }}
            >
              <BiRocket className="-rotate-45 shadow-2xl shadow-purple-500"></BiRocket>
            </div>
            <h3 className="text-3xl my-3 ">Startups</h3>
            <p>
              &quot;Startups are the birthplace of bold ideas and endless
              possibilities, pushing boundaries and shaping the future with
              their creativity, passion and drive.&quot;
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-out-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="bg-slate-900 px-3 pb-6 pt-12 rounded-xl "
        >
          <div className="text-center flex flex-col justify-center items-center py-6">
            <div
              className="sidelink text-center flex flex-col justify-center items-center text-3xl"
              style={{
                boxShadow: `0px 0px 100px 20px purple, inset 0px 0px 40px 2px purple`,
              }}
            >
              <BiCabinet className="-rotate-45 shadow-2xl shadow-purple-500"></BiCabinet>
            </div>
            <h3 className="text-3xl my-3 ">Enterprise</h3>
            <p>
              &quot;Enterprise is the foundation of progress, embodying
              innovation, determination, and the drive to succeed in the face of
              challenges, fueling economic growth and shaping the future.&quot;
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-out-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          className="bg-slate-900 px-3 pb-6 pt-12 rounded-xl "
        >
          <div className="text-center flex flex-col justify-center items-center py-6">
            <div
              className="sidelink text-center flex flex-col justify-center items-center text-3xl"
              style={{
                boxShadow: `0px 0px 100px 20px purple, inset 0px 0px 40px 2px purple`,
              }}
            >
              <BiDonateHeart className="-rotate-45 shadow-2xl shadow-purple-500"></BiDonateHeart>
            </div>
            <h3 className="text-3xl my-3 ">Non-Profits</h3>
            <p>
              &quot;Non-profit websites are the voice of purpose, spreading
              awareness and inspiring action for causes that matter, driving
              social change and making a positive impact.&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
