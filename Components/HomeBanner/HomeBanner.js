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
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <h3 className="capitalize lg:text-start md:text-start text-center lg:font-extrabold font-bold text-transparent text-3xl lg:text-4xl min-[1285px]:text-6xl bg-clip-text bg-gradient-to-r from-purple-400 via-sky-500 to-sky-500 ">
              Building Strong Websites for Growing Businesses
            </h3>
            <div className="my-6 text-slate-400  ">
              &quot;Experienced web development company offering custom
              solutions for businesses. Specializing in responsive design,
              e-commerce, and web application development. Delivering
              high-quality, scalable and user-friendly websites. Partner with us
              for your next project.&quot;
            </div>
            <button className="btn btn-sm btn-primary flex justify-start items-center capitalize">
              <FaPlayCircle className="mr-2"></FaPlayCircle>{" "}
              <span>Watch the Demo</span>
            </button>

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
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
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
