import React from "react";

const HomeBanner = () => {
  return (
    <div className="bgimg">
      <div className="bg-black/75 min-h-[100vh]">
        <div className=" lg:w-4/5 lg:mx-auto flex lg:flex-row flex-col justify-between items-center pt-[80px]">
          <div className="lg:w-1/2 lg:px-4 lg:mx-0 mx-6 lg:text-start text-center">
            <h3 className="text-white text-6xl">
              You Can't Afford to choose the Wrong web developer
            </h3>
            <div className="my-6 text-xl text-slate-400  ">
              At Evotech, we specializes in providing top-notch web development,
              graphics design, mobile app development and brand design services.
              Our team is composed of highly proficient professionals who
              possess extensive knowledge and experience in their respective
              fields. Our goal is to help businesses of all sizes achieve their
              digital goals by providing them with the
            </div>
            <button className="btn btn-sm btn-primary">Visit Github</button>
          </div>
          <div className="lg:w-1/2 lg:px-4">
            <img
              className="w-full h-full animateimg"
              src="https://i.ibb.co/Q93vyvH/3d-code-programming-syntax-symbol-premium-psd-transparent-background-106547-89-removebg-preview.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
