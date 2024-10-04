"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Community() {
  const [isInView, setIsInView] = useState(false);
  const handleScroll = () => {
    const section = document.getElementById("community-section");

    // Check if the section exists before trying to access its properties
    if (section) {
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (isVisible) {
        setIsInView(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        id="community-section"
        className="lg:min-h-[300px] w-full mx-auto lg:mt-10 overflow-hidden"
        initial={{ opacity: 0, x: -100 }} // start from left
        animate={isInView ? { opacity: 1, x: 0 } : {}} // ease in
        transition={{ duration: 1 }}
      >
        <h1 className="text-[2.3em] text-center mb-10 mt-[2.5em] text-[#00BF63] font-bold">
          Get Started Today!
        </h1>
        <div className="lg:py-20 py-10 lg:max-w-5xl mx-auto bg-[#0a2e1d] rounded-md flex flex-col gap-4">
          <div className="flex justify-center gap-2">
            <h3 className="text-xl font-raleway">
              Ready to redefine your gaming experience?
            </h3>
          </div>
          <div className="flex justify-center items-center lg:py-5 lg:px-10 md:px-20">
            <p className="text-white text-sm font-raleway px-10 text-center">
              Join the Revolution by signing up and start earning while you
              play!
            </p>
          </div>
          <div className="flex justify-center items-center">
            <a
              href="#"
              className="py-3 px-6 rounded-md bg-[#00BF63] text-sm font-raleway hover:bg-[#17472c] transition-all delay-75 text-black hover:text-white "
            >
              Sign Up
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
}
