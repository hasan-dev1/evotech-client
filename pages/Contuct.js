import React from 'react';
import { FaGlobeAmericas, FaMapMarkerAlt, FaPhoneAlt, FaTelegramPlane } from 'react-icons/fa';

const Contuct = () => {

    const handlecontuctform = (e)=>{
        e.preventDefault()
        const form = e.target;

        const username = form.username.value;
        const email = form.email.value;
        const subject = form.subject.value;
        const message = form.message.value;
        console.log({username,email,subject,message})
        form.reset()
    }
    return (
      <div
        id="contact"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        className="desktop:w-3/5 laptop:w-4/5 lg:mx-auto py-20 "
      >
        <div className="bgcontact rounded-md p-6 lg:mx-0 mx-6 ">
          <div className="flex lg:flex-row md:flex-row flex-col justify-center items-start ">
            <div className="lg:w-[400px] w-full lg:rounded-l pr-6">
              <h3 className="text-3xl pb-3 ">Let&quot;s get in touch</h3>
              <p className="lg:pt-6 md:pt-6">
                We&quot;re Open for any suggetions or just to have a chat
              </p>
              <ul>
                <li className="mt-4 flex justify-start items-start">
                  <div>
                    <FaMapMarkerAlt className="w-10 h-10 p-2 border m-2 rounded-full"></FaMapMarkerAlt>
                  </div>
                  <p className="pt-2">
                    Address: 114 DIT Road, Malibagh, Dhaka, 1217, Bangladesh
                  </p>
                </li>
                <li className="mt-4 flex justify-start items-center">
                  <div>
                    <FaPhoneAlt className="w-10 h-10 p-2 border m-2 rounded-full"></FaPhoneAlt>
                  </div>
                  <p>Phone: +880 15000000000</p>
                </li>
                <li className="mt-4 flex justify-start items-center">
                  <div>
                    <FaTelegramPlane className="w-10 h-10 p-2 border m-2 rounded-full"></FaTelegramPlane>
                  </div>
                  <p>Email: services.evotech@gmail.com</p>
                </li>
              </ul>
            </div>
            <div className=" lg:w-2/4 w-full  rounded-md px-3">
              <h3 className="text-3xl lg:pt-0 md:pt-0 pt-6 ">Send a message</h3>
              <div className="getintouchform">
                <form
                  className="lg:pt-6 md:pt-6"
                  onSubmit={handlecontuctform}
                >
                  <div className="pt-3">
                    <p className="mb-[2px]">Name</p>
                    <input
                      name="username"
                      type="text"
                      placeholder="Name"
                      className="input rounded-none w-full bg-slate-500 text-white"
                    />
                  </div>
                  <div className="pt-3">
                    <p className="mb-[2px]">Email</p>
                    <input
                      name="email"
                      type="email"
                      placeholder="Email"
                      className="input rounded-none w-full bg-slate-500 text-white"
                    />
                  </div>
                  <div className="pt-3">
                    <p className="mb-[2px]">Subject</p>
                    <input
                      name="subject"
                      type="text"
                      placeholder="Subject"
                      className="input rounded-none w-full bg-slate-500 text-white"
                    />
                  </div>
                  <div className="pt-3">
                    <p className="mb-[2px]">Message</p>
                    <textarea
                      name="message"
                      id="textaraeheight"
                      placeholder="Message"
                      className="input pt-2 focus:outline-none rounded-none w-full text-white bg-slate-500 "
                      cols="30"
                      rows="20"
                    ></textarea>
                  </div>
                  <button className="btn  px-6 text-white mt-6">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Contuct;