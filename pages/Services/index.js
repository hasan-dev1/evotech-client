import React from "react";
import { BiBriefcase, BiBuildings, BiCabinet, BiCartAlt, BiDonateHeart, BiMeteor, BiMobileAlt, BiRocket, BiWorld } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";

const Services = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      className="lg:py-[80px] lg:w-4/5 lg:mx-auto py-16 "
    >
      <div className="lg:w-2/3 lg:mx-auto text-center mb-12 ">
        <h3 className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-300 to-blue-400">
          Services
        </h3>
        <p className="text-xl md:w-2/3 mx-auto px-2 w-full lg:mx-auto lg:w-full text-slate-300">
          “Expert Web Development Services for Your Business Success”
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 mx-6 mt-4 capitalize">
        <div className="bg-slate-900 px-3 pb-6 pt-12 rounded-xl ">
          <div className="text-center flex flex-col justify-center items-center py-6">
            <div
              className="sidelink text-center flex flex-col justify-center items-center text-2xl"
              style={{
                boxShadow: `0px 0px 100px 20px purple, inset 0px 0px 40px 2px purple`,
              }}
            >
              <BiWorld className="-rotate-45 shadow-2xl shadow-purple-500"></BiWorld>
            </div>
            <h3 className="text-2xl my-3 ">web development</h3>
            <p className="text-sm">
              &quot;High-quality, responsive websites using latest tech. Let us
              elevate your online presence. Get started today.&quot;
            </p>
          </div>
        </div>
        <div className="bg-slate-900 px-3 pb-6 pt-12 rounded-xl ">
          <div className="text-center flex flex-col justify-center items-center py-6">
            <div
              className="sidelink text-center flex flex-col justify-center items-center text-2xl"
              style={{
                boxShadow: `0px 0px 100px 20px purple, inset 0px 0px 40px 2px purple`,
              }}
            >
              <BiMobileAlt className="-rotate-45 shadow-2xl shadow-purple-500"></BiMobileAlt>
            </div>
            <h3 className="text-2xl my-3 ">mobile development</h3>
            <p className="text-sm">
              &quot;Specialists in custom mobile app development for business
              success. User-friendly, visually appealing & highly functional
              apps. Partner with us.&quot;
            </p>
          </div>
        </div>
        <div className="bg-slate-900 px-3 pb-6 pt-12 rounded-xl ">
          <div className="text-center flex flex-col justify-center items-center py-6">
            <div
              className="sidelink text-center flex flex-col justify-center items-center text-2xl"
              style={{
                boxShadow: `0px 0px 100px 20px purple, inset 0px 0px 40px 2px purple`,
              }}
            >
              <BiBuildings className="-rotate-45 shadow-2xl shadow-purple-500"></BiBuildings>
            </div>
            <h3 className="text-2xl my-3 ">graphics design</h3>
            <p className="text-sm">
              &quot;Elevating your digital presence through stunning graphic
              designs, crafted by our expert team using cutting-edge
              technology&quot;
            </p>
          </div>
        </div>
        <div className="bg-slate-900 px-3 pb-6 pt-12 rounded-xl ">
          <div className="text-center flex flex-col justify-center items-center py-6">
            <div
              className="sidelink text-center flex flex-col justify-center items-center text-2xl"
              style={{
                boxShadow: `0px 0px 100px 20px purple, inset 0px 0px 40px 2px purple`,
              }}
            >
            <BiCabinet className="-rotate-45 shadow-2xl shadow-purple-500"></BiCabinet>
            </div>
            <h3 className="text-2xl my-3 ">branding</h3>
            <p className="text-sm">
              &quot;Unleash your product&apos;s potential with our branding
              services. Create a unique brand identity that stands out.&quot;
            </p>
          </div>
        </div>
        <div className="bg-slate-900 px-3 pb-6 pt-12 rounded-xl ">
          <div className="text-center flex flex-col justify-center items-center py-6">
            <div
              className="sidelink text-center flex flex-col justify-center items-center text-2xl"
              style={{
                boxShadow: `0px 0px 100px 20px purple, inset 0px 0px 40px 2px purple`,
              }}
            >
              <BiRocket className="-rotate-45 shadow-2xl shadow-purple-500"></BiRocket>
            </div>
            <h3 className="text-2xl my-3 ">startup</h3>
            <p className="text-sm">
              &quot;Empower your startup with our expert services. From branding
              to website development, we help you succeed in today&apos;s
              market.&quot;
            </p>
          </div>
        </div>
        <div className="bg-slate-900 px-3 pb-6 pt-12 rounded-xl ">
          <div className="text-center flex flex-col justify-center items-center py-6">
            <div
              className="sidelink text-center flex flex-col justify-center items-center text-2xl"
              style={{
                boxShadow: `0px 0px 100px 20px purple, inset 0px 0px 40px 2px purple`,
              }}
            >
              <BiCartAlt className="-rotate-45 shadow-2xl shadow-purple-500"></BiCartAlt>
            </div>
            <h3 className="text-2xl my-3 ">ecommerce</h3>
            <p className="text-sm">
              &quot;Revolutionize your shopping with E-commerce. Bridging the
              gap between merchants & customers. Shape your business&apos;s
              future.&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
