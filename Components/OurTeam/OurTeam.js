import React, { useState, useMemo, useEffect } from "react";
import ReactDOM from "react-dom/client";

const OurTeam = () => {
  const slides = [
    {
      image:
        "https://images.pexels.com/photos/3405456/pexels-photo-3405456.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Mustaqim Rohit",
      quote:
        "A full stack developer is the jack of all trades in the tech world, mastering the frontend and backend to build seamless, dynamic, and functional web applications. They possess the unique ability to bring ideas to life from start to finish.",
      stats: [
        {
          label: "",
          value: "",
        },
        {
          label: "",
          value: "",
        },
        {
          label: "Work with evotech",
          value: "3yr",
        },
        {
          label: "Role",
          value: "Full Stack Developer",
        },
      ],
    },
    {
      image:
        "https://images.pexels.com/photos/3405456/pexels-photo-3405456.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Sayed Reyal",
      quote:
        "A full stack developer is the jack of all trades in the tech world, mastering the frontend and backend to build seamless, dynamic, and functional web applications. They possess the unique ability to bring ideas to life from start to finish.",
      stats: [
        {
          label: "",
          value: "",
        },
        {
          label: "",
          value: "",
        },
        {
          label: "Work with evotech",
          value: "3yr",
        },
        {
          label: "Role",
          value: "Full Stack Developer",
        },
      ],
    },
    {
      image:
        "https://images.pexels.com/photos/3405456/pexels-photo-3405456.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Md Hasan",
      quote:
        "A full stack developer is the jack of all trades in the tech world, mastering the frontend and backend to build seamless, dynamic, and functional web applications. They possess the unique ability to bring ideas to life from start to finish.",
      stats: [
        {
          label: "",
          value: "",
        },
        {
          label: "",
          value: "",
        },
        {
          label: "Work with evotech",
          value: "3yr",
        },
        {
          label: "Role",
          value: "Full Stack Developer",
        },
      ],
    },
  ];

  function Slide({ slide, previous }) {
    return (
      <div
        className="slide"
        style={{
          "--stats": slide.stats.length,
        }}
        data-previous={previous || undefined}
      >
        <div className="slide-name">{slide.name}</div>
        <img className="slide-image" src={slide.image} alt="" />
        {slide.quote && <div className="slide-quote">{slide.quote}</div>}
        {slide.stats.map((stat, i) => {
          return (
            <div
              className="slide-stat"
              key={i}
              style={{
                "--i": i,
              }}
            >
              <div className="stat-label">{stat.label}</div>
              <div className="stat-value">{stat.value}</div>
            </div>
          );
        })}
      </div>
    );
  }

  function ScondApp() {
    const [slideIndex, setSlideIndex] = useState(0);
    const [prevSlideIndex, setPrevSlideIndex] = useState(null);
    const activeSlide = useMemo(() => slides[slideIndex], [slideIndex]);
    const prevSlide = useMemo(() => slides[prevSlideIndex], [prevSlideIndex]);

    function nextSlide() {
      setPrevSlideIndex(slideIndex);
      setSlideIndex((slideIndex + 1) % slides.length);
    }
    function prevSlideone() {
      setPrevSlideIndex(slideIndex);
      setSlideIndex(
        (slideIndex > 0 ? slideIndex - 1 : slides.length - 1) % slides.length
      );
    }

    return (
      <div className="app">
        <svg
          viewBox="0 0 100 100"
          className="dashes"
          fill="none"
          stroke="var(--color-purple)"
          strokeDasharray="2 4 4 3 2 3 8 2 3 5"
        >
          <circle r="45" cx="50" cy="50" />
        </svg>
        <Slide slide={activeSlide} key={slideIndex} />
        {prevSlide && (
          <Slide slide={prevSlide} key={prevSlideIndex + "prev"} previous />
        )}
        <button
          className="button -next"
          onClick={() => {
            nextSlide();
          }}
        >
          Next
        </button>
        <button
          className="button -prev"
          onClick={() => {
            prevSlideone();
          }}
        >
          prev
        </button>
      </div>
    );
  }

  useEffect(() => {
    const root = ReactDOM.createRoot(document.getElementById("scondroot"));
    root.render(
      <React.StrictMode>
        <ScondApp />
      </React.StrictMode>
    );
  }, []);
  return (
    <div>
      <div className="lg:w-1/2 md:w-2/3 md:mx-auto w-full lg:mx-auto  px-12 text-center my-6">
        <h3 className="capitalize text-center lg:font-extrabold font-bold text-transparent text-3xl lg:text-4xl min-[1285px]:text-6xl bg-clip-text bg-gradient-to-r from-purple-400 via-sky-500 to-sky-500 ">
          Meet Our Team
        </h3>
        <p >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
          nemo ex excepturi, possimus, expedita qui deserunt totam dolor dolores
          soluta
        </p>
      </div>
      <div className="starthtml">
        <div className="scondhtml">
          <div className="scondbody">
            <div id="scondroot">sd</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
