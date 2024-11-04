import React from "react";
import { images } from "./constants";
import left from "@/public/left.svg";
import right from "@/public/right.svg";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  activeImage: any;
  clickNext: any;
  clickPrev: any;
};

const Description = ({ activeImage, clickNext, clickPrev }: Props) => {
  return (
    <div className="grid place-items-start w-full bg-[rgb(4,7,29)] border border-white/[0.1] relative rounded-tr-2xl rounded-br-2xl md:rounded-tr-3xl md:rounded-br-3xl p-4 sm:p-6 md:p-8 lg:p-8 xl:p-2">
      {images.map((elem, idx) => (
        <div
          key={idx}
          className={`${
            idx === activeImage
              ? "block w-full h-full py-6 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 text-left"
              : "hidden"
          }`}
        >
          <motion.div
            initial={{
              opacity: idx === activeImage ? 0 : 0.5,
              scale: idx === activeImage ? 0.5 : 0.3,
            }}
            animate={{
              opacity: idx === activeImage ? 1 : 0.5,
              scale: idx === activeImage ? 1 : 0.3,
            }}
            transition={{
              ease: "linear",
              duration: 2,
              x: { duration: 1 },
            }}
            className="w-full"
          >
            <div className="py-2 text-lg md:text-xl font-extrabold text-[#8d2ac7]">
              {elem.title}
            </div>
            <div className="leading-relaxed font-medium text-xs md:text-sm lg:text-xs tracking-wide h-auto max-h-[12rem] md:max-h-[10rem] lg:max-h-[10rem] italic text-gray-300">
              {elem.desc}
            </div>
          </motion.div>
          <div className="absolute md:bottom-1 bottom-5 right-5 md:right-0 w-full flex justify-center items-center">
            <div
              className="absolute bottom-1 right-5 cursor-pointer"
              onClick={clickPrev}
            >
              <Image src={left} alt="" />
            </div>

            <div
              className="absolute bottom-1 right-1 cursor-pointer"
              onClick={clickNext}
            >
              <Image src={right} alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Description;
