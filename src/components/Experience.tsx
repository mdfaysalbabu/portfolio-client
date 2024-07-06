import React from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import Image from "next/image";

const Experience = () => {
  return (
    <div className="py-20 w-full ">
      <h1 className="text-center text-5xl font-bold text-white">
        My <span className="text-white">Professional Journey</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 px-4">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            borderRadius="2rem"
            style={{
              background:
                "linear-gradient(145deg, rgba(20, 20, 20, 0.85) 0%, rgba(30, 30, 30, 0.95) 100%)",
              borderRadius: `calc(2rem * 0.96)`,
              backdropFilter: "blur(15px)",
            }}
            className="flex-1 text-gray-200 border border-gray-700 shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-6 md:p-8 lg:p-10 gap-4">
              <Image
                src={card.thumbnail}
                alt={card.title}
                className="lg:w-32 md:w-24 w-20 rounded-full border-4 border-gray-800 shadow-lg"
                width={128}
                height={128}
              />
              <div className="lg:ml-5">
                <h1 className="text-start text-3xl md:text-4xl font-extrabold text-teal-400">
                  {card.title}
                </h1>
                <p className="text-start text-gray-400 mt-4 text-lg font-medium leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
