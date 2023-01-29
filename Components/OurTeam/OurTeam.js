import React, { useState, useMemo, useEffect } from 'react'
import ReactDOM from "react-dom/client";

const OurTeam = () => {
  const slides = [
    {
      image:
        "https://images.pexels.com/photos/3405456/pexels-photo-3405456.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Mustaqim Rohit",
      quote:
        "Full Stack Developer at www.evotech.live",
      stats: [
        {
          label: "Time",
          value: "~4 years",
        },
        {
          label: "",
          value: "",
        },
        {
          label: "Funds",
          value: "$2,201",
        },
        {
          label: "Outcome",
          value: "Found housing, employment",
        },
      ],
    },
    {
      image:
        "https://images.pexels.com/photos/3405456/pexels-photo-3405456.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Sayed Reyal",
      quote:
        "Full Stack Developer at www.evotech.live",
      stats: [
        {
          label: "Time",
          value: "~4 years",
        },
        {
          label: "",
          value: "",
        },
        {
          label: "Funds",
          value: "$2,201",
        },
        {
          label: "Outcome",
          value: "Found housing, employment",
        },
      ],
    },
    {
      image:
        "https://images.pexels.com/photos/3405456/pexels-photo-3405456.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Md Hasan",
      quote:
        "Full Stack Developer at www.evotech.live",
      stats: [
        {
          label: "Time",
          value: "~4 years",
        },
        {
          label: "",
          value: "",
        },
        {
          label: "Funds",
          value: "$2,201",
        },
        {
          label: "Outcome",
          value: "Found housing, employment",
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
      <img className="slide-image" src={slide.image} alt='' />
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
            {/* <div className="stat-label">{stat.label}</div>
            <div className="stat-value">{stat.value}</div> */}
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

useEffect(()=>{
  const root = ReactDOM.createRoot(document.getElementById("scondroot"));
  root.render(
    <React.StrictMode>
      <ScondApp />
    </React.StrictMode>
  );
},[])
  return (
    <div className="starthtml">
      <div className="scondhtml">
        <div className="scondbody">
          <div id="scondroot">sd</div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
