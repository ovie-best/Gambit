"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section>
      <div className="lg:max-w-5xl mx-auto lg:min-h-[300px] lg:mt-10 mt-14 md:px-24 lg:px-0 overflow-hidden ">
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Start slightly lower and transparent
          animate={{ opacity: 1, y: 0 }} // End at full opacity and original position
          transition={{ duration: 0.5 }} // Duration of the animation
        >
          <h1 className="lg:text-5xl text-3xl text-center lg:px-16 font-bold font-raleway px-2">
            <span className=" text-[2em] font-black text-[#00BF63]">
              Gambit Node
            </span>
            <br />
            <span className="uppercase font-light text-lg lg:tracking-[.75em] mt-10 tracking-[.25em] text-white">
              Play, Stake, Win!
            </span>
          </h1>
          <p className="text-center text-base text-stone-200 font-raleway lg:px-40 lg:pt-5 px-7">
            Unlock the future of gaming with Gambit Node, your premier Web3
            gaming platform! Dive into an immersive universe where blockchain
            technology meets gaming, empowering players with true ownership and
            unparalleled experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
