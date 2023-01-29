import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import React from 'react';
import { BiRightArrow } from 'react-icons/bi';





const OurOffer = () => {


    return (
      <div className="lg:mx-0 mx-6 mb-[80px]">
        <div className="lg:w-1/2 text-center lg:mx-auto pb-12">
          <div>
            <h3 className="capitalize lg:text-start md:text-start text-center lg:font-extrabold font-bold text-transparent text-3xl lg:text-4xl min-[1285px]:text-6xl bg-clip-text bg-gradient-to-r from-purple-400 via-sky-500 to-sky-500 ">
              Watch our previous work! <br /> You could be Our next success
              Story
            </h3>
            <p className="text-slate-400 capitalize">
              join our (growing) list of clients who have seen results.
            </p>
          </div>
        </div>

        <div>
          <div>
            <Splide
              id="splide"
              hasTrack={false}
              aria-label="..."
              options={{
                perPage: 1,
                rewind: true,
                padding: "25rem",
                height: "30rem",
                width: "100%",
                gap: "3rem",
                breakpoints: {
                  1200: {
                    height: "30rem",
                    perPage: 1,
                    padding: "15rem",
                    gap: "1rem",
                  },
                  1024: {
                    height: "800",
                    width: "100%",
                    perPage: 1,
                    padding: 0,
                    gap: "1rem",
                  },
                  767: { height: "800", perPage: 1, padding: 0, gap: "1rem" },
                  575: { height: "100%", perPage: 1, padding: 0, gap: "1rem" },
                },
              }}
            >
              <SplideTrack>
                <SplideSlide>
                  <div className="h-full w-full">
                    <img
                      className="h-full w-full rounded-lg"
                      src="https://images.pexels.com/photos/5839461/pexels-photo-5839461.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      alt=""
                    />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="h-full w-full">
                    <img
                      className="h-full w-full rounded-lg"
                      src="https://images.pexels.com/photos/5839461/pexels-photo-5839461.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      alt=""
                    />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="h-full w-full">
                    <img
                      className="h-full w-full rounded-lg"
                      src="https://images.pexels.com/photos/5839461/pexels-photo-5839461.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      alt=""
                    />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="h-full w-full">
                    <img
                      className="h-full w-full rounded-lg"
                      src="https://images.pexels.com/photos/5839461/pexels-photo-5839461.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      alt=""
                    />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="h-full w-full">
                    <img
                      className="h-full w-full rounded-lg"
                      src="https://images.pexels.com/photos/5839461/pexels-photo-5839461.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      alt=""
                    />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="h-full w-full">
                    <img
                      className="h-full w-full rounded-lg"
                      src="https://images.pexels.com/photos/5839461/pexels-photo-5839461.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      alt=""
                    />
                  </div>
                </SplideSlide>
              </SplideTrack>

              <div className="splide__arrows splidearrowtwo">
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
      </div>
    );
};

export default OurOffer;