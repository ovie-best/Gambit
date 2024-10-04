"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function SectionTwo() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is in view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={sectionRef}
      className="max-w-5xl mx-auto lg:min-h-[600px] lg:flex lg:flex-col relative overflow-hidden"
      initial={{ opacity: 0, x: 100 }} // Start off-screen (right side)
      animate={isInView ? { opacity: 1, x: 0 } : {}} // Slide in and fade in when in view
      transition={{ duration: 1 }}
    >
      {/* Gradient Background */}
      <h1 className="text-[2.5em] text-center mb-10 mt-[2.5em] font-bold text-[#00BF63]">
        Features
      </h1>
      <div className="absolute inset-0 bg-gradient-to-tr from-[#32172f] to-transparent via-transparent opacity-30"></div>

      <div className="lg:min-h-[400px] w-full lg:flex lg:p-20 p-10 transition-transform duration-300 ease-in-out hover:scale-105 border border-[#cccccc39] rounded-md relative z-10">
        <div className="lg:flex lg:flex-col gap-5 lg:w-1/2 justify-center">
          <h2 className="text-3xl text-[#00BF63]">Diverse Game Library</h2>
          <p className="text-gray-300 text-sm">
            Explore a wide range of games across various genres—from
            action-packed adventures to strategic simulations. There’s something
            for every gamer!
          </p>
        </div>
        <div className="lg:w-1/2">
          {/* Additional Content Here */}
          <img src="/images/3dconsole.png" alt="img" />
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-2 gap-3 lg:mt-3 relative z-10">
        <motion.div
          className="lg:min-h-[300px] min-h-auto lg:flex lg:flex-col gap-2 lg:px-20 px-10 py-10 justify-center transition-transform duration-300 ease-in-out hover:scale-105 lg:border border-[#cccccc39] rounded-md"
          initial={{ opacity: 0, x: 100 }} // Start off-screen from the right
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }} // Delay to stagger animation
        >
          <h2 className="text-2xl text-[#00BF63]">
            {" "}
            Seamless Wallet Integration
          </h2>

          <p className="text-gray-300 text-sm">
            Easily connect your crypto wallet to manage your assets and
            transactions securely. Enjoy a hassle-free gaming experience without
            compromising security.
          </p>
        </motion.div>

        <motion.div
          className="lg:min-h-[300px] transition-transform duration-300 ease-in-out hover:scale-105 lg:border border-[#cccccc39] rounded-md"
          initial={{ opacity: 0, x: 100 }} // Start off-screen from the right
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }} // Longer delay for stagger effect
        >
          <div className="lg:min-h-[300px] lg:flex lg:flex-col gap-2 lg:px-20 px-10 py-10 justify-center">
            <h2 className="text-2xl text-[#00BF63]">
              Regular Updates and Events
            </h2>

            <p className="text-gray-300 text-sm">
              Stay engaged with our platform through regular game updates,
              seasonal events, and tournaments that keep the excitement alive!
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
