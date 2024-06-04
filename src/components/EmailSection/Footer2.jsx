"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { Github } from "../icons/Github";
import { Linkedin } from "../icons/Linkedin";

export const Footer2 = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_rarzfzs", "template_ym7hrtp", form.current, {
        publicKey: "eCTcniQWWBKlUx-W6",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <section
        id="contact"
        className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
      >
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
        <div className="z-10">
          <h5 className="text-xl font-bold text-white my-2">
            Let&apos;s Connect
          </h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md text-justify ">
            I&apos;m always looking for new opportunities to collaborate with
            other talented individuals. If you have a project that you think I
            would be a good fit for, or if you just want to say hi, please
            don&apos;t hesitate to reach out.
          </p>
          <div className="socials flex flex-row gap-2">
            <Link href="https://github.com/enmanuelrondon1">
              <Github />
            </Link>
            <Link href="linkedin.com">
              <Linkedin />
            </Link>
          </div>
        </div>

       
      <div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col text-white"
        >
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              name="user_name"
              className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              type="email"
              name="user_email"
              className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm sounded-lg block w-full p-2.5 "
              placeholder="enmanuel@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium "
            >
              Message
            </label>
            <textarea
              name="message"
              className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
              placeholder="Let's talk about.."
            />
          </div>

          <input
            type="submit"
            value="Send"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          />
        </form>
      </div>
      </section>

    </>
  );
};
