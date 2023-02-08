import Link from "next/link";
import React from "react";
import { FaBasketballBall, FaFacebook, FaGithub, FaLinkedin, FaPlayCircle, FaTwitterSquare } from "react-icons/fa";

const HomeBanner = () => {
  return (
    <div className="bgimg">
      <div className="bg-black/75 min-h-[100vh]">
        <div className=" lg:w-4/5 lg:mx-auto flex lg:flex-row md:flex-row flex-col justify-between items-center pt-[80px]">
          <div
            className="lg:w-1/2 lg:px-4 lg:mx-0 md:w-1/2 md:px-4 md:mx-0 mx-6 lg:text-start md:text-start text-center"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
          >
            <h3 className="capitalize lg:text-start md:text-start text-center lg:font-extrabold font-bold text-transparent text-[24px] lg:text-4xl min-[1285px]:text-5xl bg-clip-text bg-gradient-to-r from-purple-400 via-sky-500 to-sky-500 ">
              Bringing Your Online <br className="min-[641px]:hidden block" />{" "}
              Vision to Life
            </h3>
            <div className="my-6 text-slate-400  ">
              &quot;Unleash Your Online Potential with Evotech Custom Solutions,{" "}
              <br className="lg:flex hidden" />
              Expert Team, Guaranteed Results..&quot;
            </div>
            <div>
              <a className="bg-primary p-2 rounded-md" href="#contact">
                Get Started
              </a>
            </div>

            <div className="my-12">
              <h4>Follow Us</h4>
              <ul className="flex lg:justify-start md:justify-start justify-center items-center mt-5 text-sky-500 ">
                <li className="pr-3">
                  <Link className="text-3xl" href={"/"}>
                    <FaFacebook></FaFacebook>
                  </Link>
                </li>
                <li className="pr-3">
                  <Link className="text-3xl" href={"/"}>
                    <FaLinkedin></FaLinkedin>
                  </Link>
                </li>
                <li className="pr-3">
                  <Link className="text-3xl" href={"/"}>
                    <FaGithub></FaGithub>
                  </Link>
                </li>
                <li className="pr-3">
                  <Link className="text-3xl" href={"/"}>
                    <FaTwitterSquare></FaTwitterSquare>
                  </Link>
                </li>
                <li className="pr-3">
                  <Link className="text-3xl" href={"/"}>
                    <FaBasketballBall></FaBasketballBall>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="lg:w-1/2 lg:px-4 md:w-1/2 md:px-4"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
          >
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
