import React, { useState, useMemo, useEffect } from "react";

const OurTeam = () => {
  return (
    <div
      className="desktop:w-4/5 desktop:mx-auto laptop:w-4/5 laptop:mx-auto tablet:w-4/5 tablet:mx-auto px-2"
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
    >
      <div className="flex flex-col justify-center items-center mb-12">
        <h3 className="capitalize lg:text-start md:text-start text-center lg:font-extrabold font-bold text-transparent text-[24px] lg:text-4xl min-[1285px]:text-5xl bg-clip-text bg-gradient-to-r from-purple-400 via-sky-500 to-sky-500">
          Meet Our Team
        </h3>
        <p className="text-slate-400">
          Get to know the dedicated individuals who make it happen.
        </p>
      </div>
      <div className="grid desktop:grid-cols-3 laptop:grid-cols-3 tablet:grid-cols-2 grid-cols-1 gap-6">
        <div className="p-3 rounded-md desktop:h-[500px] h-[400px] bgcontact text-slate-400 relative hoverimg">
          <img
            className="w-full h-full rounded-md  "
            src="https://images.pexels.com/photos/3585089/pexels-photo-3585089.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <div className=" nametext absolute bottom-0 left-0 ">
            <div className="p-4 bg-gradient-to-b from-transparent  via-slate-800 to-slate-800 m-3">
              <h3 className="text-2xl font-bold pt-4">Mustaqim Rohit</h3>
              <p className="text-xs leading-3 mb-2">FrontEnd Developer</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                temporibus reprehenderit et porro, dicta voluptates!
              </p>
            </div>
          </div>
        </div>
        <div className="p-3 rounded-md desktop:h-[500px] h-[400px] bgcontact text-slate-400 relative hoverimg ">
          <img
            className="w-full h-full rounded-md  "
            src="https://images.pexels.com/photos/3585089/pexels-photo-3585089.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <div className=" nametext absolute bottom-0 left-0 ">
            <div className="p-4 bg-gradient-to-b from-transparent  via-slate-800 to-slate-800 m-3">
              <h3 className="text-2xl font-bold pt-4">Md Sayed Reyal</h3>
              <p className="text-xs leading-3 mb-2">FrontEnd Developer</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                temporibus reprehenderit et porro, dicta voluptates!
              </p>
            </div>
          </div>
        </div>
        <div className="p-3 rounded-md desktop:h-[500px] h-[400px] bgcontact text-slate-400 relative hoverimg">
          <img
            className="w-full h-full rounded-md "
            src="https://images.pexels.com/photos/3585089/pexels-photo-3585089.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <div className=" nametext absolute bottom-0 left-0 ">
            <div className="p-4 bg-gradient-to-b from-transparent  via-slate-800 to-slate-800 m-3">
              <h3 className="text-2xl font-bold pt-4">Md hasan</h3>
              <p className="text-xs leading-3 mb-2">FrontEnd Developer</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                temporibus reprehenderit et porro, dicta voluptates!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
