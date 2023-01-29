import React from 'react';

const HelpmeDecide = () => {
    return (
      <div className="flex lg:flex-row flex-col justify-between items-center lg:w-4/5 lg:mx-auto py-[80px] mx-6">
        <div className="lg:w-1/2">
          <h2 className="capitalize text-start lg:font-extrabold font-bold text-transparent text-3xl lg:text-4xl min-[1285px]:text-6xl bg-clip-text bg-gradient-to-r from-purple-400 via-sky-500 to-sky-500  ">
            what if your decision didn&apos;t have to feel like a total leap of
            faith?
          </h2>
          <p className="capitalize text-slate-400 mt-3 text-xl">
            work with the team that cares about out
          </p>
          <p className="capitalize text-slate-400 my-2 text-xl">
            {" "}
            customers as much as our code.
          </p>
          <p className="capitalize text-sm block text-slate-400">
            (and we&quot;re perfectionist with our code.)
          </p>
          <button className="mt-12 btn btn-sm btn-outline btn-primary border-2">
            Get startted
          </button>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:ml-24 items-center">
          <img
            className="w-3/2 h-2/3"
            src="https://i.ibb.co/k0gS3xf/logo-1-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
    );
};

export default HelpmeDecide;