"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

export const HeroSection = () => (
  <section className="lg:py-16">
    <div className="grid grid-cols-1 sm:grid-cols-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-8 place-self-center text-center sm:text-left justify-self-start "
      >
        <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold ">
          <span className="text-transparent bg-clip-text bg-gradient-to-t from-primary-400 to-secondary-600">
            Hello I&apos;m{" "}
          </span>
          <br />
          <TypeAnimation
            sequence={[
              "Enmanuel",
              1000,
              "Web Developer",
              1000,
              "Mobile Developer",
              1000,
              "UI/UX Designer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-[#adb7be] text-base sm:text-lg mb-6 lg:text-xl text-justify mr-8 ml-8 m-auto ">
          I&apos;m a Full Stack Developer with a passion for creating beautiful
          and functional websites and applications. I have a strong background
          in web development and a deep understanding of the latest technologies
          and frameworks. I am always looking for new challenges and
          opportunities to grow and learn.
        </p>
        <div>
          <Link
            href="/contact"
            className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white "
          >
            Hire me
          </Link>
          <Link
            href="/"
            className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3 "
          >
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 m-auto ">
              Download CV
            </span>
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-4 place-self-center text-center sm:text-left justify-self-start "
      >
        <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative ">
          <img
            src="https://i.ibb.co/6W2L8pP/pexels-olia-danilevich-4974915.jpg"
            alt="hero image"
            height={300}
            width={300}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 border-spacing-16 rounded-full m-auto "
          />
        </div>
      </motion.div>
    </div>
  </section>
);
