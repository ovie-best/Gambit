'use client'
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function Tokenomics() {
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
        threshold: 0.1, // Trigger when 10% of the element is visible
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
      className="max-w-5xl mx-auto lg:flex justify-between lg:min-h-[400px] lg:mt-10 items-center md:px-20 lg:px-0 overflow-hidden"
      initial={{ opacity: 0, x: -100 }} // Start off-screen from the left
      animate={isInView ? { opacity: 1, x: 0 } : {}} // Animate to visible when in view
      transition={{ duration: 1 }}
    >
      <div className="lg:flex lg:flex-col lg:w-1/2 lg:gap-3 gap-10 font-raleway font-bold lg:px-20 px-10 py-10 lg:py-10">
        <h1 className="text-4xl pb-3">Balanced Tokenomics and Tokens Distribution</h1>
        <a
          href="#"
          className="py-3 lg:mt-0 px-6 rounded-md lg:rounded-full text-sm font-semibold bg-gray-100 w-1/4 hover:bg-[#D905E5] transition-colors delay-75 hover:text-white text-[#D905E5] font-raleway text-center"
        >
          Visit
        </a>
      </div>

      <div className="lg:w-1/2 lg:px-10 px-10 lg:flex lg:flex-col gap-3 font-bold font-raleway">
        <motion.p
          className="font-raleway relative"
          initial={{ opacity: 0, x: 100 }} // Start off-screen from the right
          animate={isInView ? { opacity: 1, x: 0 } : {}} // Animate when in view
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="absolute -left-6 top-0 text-[#D905E5] text-5xl font-bold">“</span>
          XaVinche enables users to control their digital identities and monetize content effortlessly. Leveraging the Solana blockchain, we offer a decentralized platform that rewards engagement and fosters genuine connections in social media.
        </motion.p>

        <motion.p
          className="relative"
          initial={{ opacity: 0, x: 100 }} // Start off-screen from the right
          animate={isInView ? { opacity: 1, x: 0 } : {}} // Animate when in view
          transition={{ duration: 1, delay: 0.4 }} // Longer delay for staggered effect
        >
          XaVinche enables users to control their digital identities and monetize content effortlessly. Leveraging the Solana blockchain, we offer a decentralized platform that rewards engagement and fosters genuine connections in social media.
          <span className="absolute right-0 bottom-0 text-[#D905E5] text-5xl font-bold">”</span>
        </motion.p>
      </div>
    </motion.div>
  );
}
