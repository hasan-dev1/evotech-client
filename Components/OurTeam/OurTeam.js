import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import React from "react";
import { BiRightArrow } from "react-icons/bi";

const OurTeam = () => {
  return (
    <div className="py-12 lg:w-4/5 lg:mx-auto">
      <div className="w-2/3 lg:w-4/5 mx-auto lg:mx-auto text-center pb-[60px]">
        <h3 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400  to-blue-500">
          Meet Our teammate
        </h3>
        <p className="text-slate-400 mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          ducimus assumenda, tempora minus eum porro omnis deleniti
          magnam quidem totam.
        </p>
      </div>
      <div>
        <Splide
          hasTrack={false}
          aria-label="..."
          options={{
            rewind: true,
            gap: "1rem",
          }}
        >
          <SplideTrack>
            <SplideSlide>
              <div className="flex lg:flex-row md:flex-row flex-col lg:mx-0 mx-6 justify-between  items-start">
                <div className="lg:w-1/2 md:w-1/2 pr-2">
                  <img
                    className="w-full md:w-[80%] ml-auto h-[30rem] md:h-[25rem] lg:rounded  rounded-full"
                    src="https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                </div>
                <div className="lg:w-1/2 md:w-1/2">
                  <div className="lg:w-2/3 md:w-2/3 mx-auto lg:mt-0 md:mt-0 mt-6">
                    <h3 className="text-2xl italic mb-12">
                      &quot;Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Sed mollitia, enim omnis corporis placeat, animi
                      modi voluptatibus nostrum rerum, praesentium ex reiciendis
                      nemo tempore. Cum explicabo sit maiores sed ipsam dolor
                      error nisi nemo, voluptatibus unde, aliquam ducimus
                      dolores quam!&quot;
                    </h3>
                    <h4 className="text-xl font-bold">Rohit</h4>
                    <p className="text-slate-400">FullStack Developer</p>
                  </div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="flex lg:flex-row flex-col lg:mx-0 mx-6 justify-between  items-start">
                <div className="lg:w-1/2 pr-2">
                  <img
                    className="w-full md:w-[80%] ml-auto h-[30rem] md:h-[25rem] lg:rounded  rounded-full"
                    src="https://images.pexels.com/photos/4709287/pexels-photo-4709287.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                </div>
                <div className="lg:w-1/2 ">
                  <div className="lg:w-2/3 mx-auto lg:mt-0 md:mt-0 mt-6">
                    <h3 className="text-2xl italic mb-12">
                      &quot;Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Sed mollitia, enim omnis corporis placeat, animi
                      modi voluptatibus nostrum rerum, praesentium ex reiciendis
                      nemo tempore. Cum explicabo sit maiores sed ipsam dolor
                      error nisi nemo, voluptatibus unde, aliquam ducimus
                      dolores quam!&quot;
                    </h3>
                    <h4 className="text-xl font-bold">Reyal</h4>
                    <p className="text-slate-400">FullStack Developer</p>
                  </div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="flex lg:flex-row flex-col lg:mx-0 mx-6 justify-between  items-start">
                <div className="lg:w-1/2 pr-2">
                  <img
                    className="w-full md:w-[80%] ml-auto h-[30rem] md:h-[25rem] lg:rounded  rounded-full"
                    src="https://images.pexels.com/photos/340152/pexels-photo-340152.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                </div>
                <div className="lg:w-1/2 ">
                  <div className="lg:w-2/3 mx-auto lg:mt-0 md:mt-0 mt-6">
                    <h3 className="text-2xl italic mb-12">
                      &quot;Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Sed mollitia, enim omnis corporis placeat, animi
                      modi voluptatibus nostrum rerum, praesentium ex reiciendis
                      nemo tempore. Cum explicabo sit maiores sed ipsam dolor
                      error nisi nemo, voluptatibus unde, aliquam ducimus
                      dolores quam!&quot;
                    </h3>
                    <h4 className="text-xl font-bold">Hasan</h4>
                    <p className="text-slate-400">FullStack Developer</p>
                  </div>
                </div>
              </div>
            </SplideSlide>
          </SplideTrack>

          <div className="splide__arrows">
            <button className="splide__arrow splide__arrow--prev">
              <BiRightArrow></BiRightArrow>
            </button>
            <button className="splide__arrow splide__arrow--next">
              <BiRightArrow></BiRightArrow>
            </button>
          </div>
        </Splide>
      </div>
    </div>
  );
};

export default OurTeam;
