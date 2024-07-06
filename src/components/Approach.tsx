import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const Approach = () => {
  return (
    <section className="w-full py-20 ">
      <h1 className="heading text-center text-4xl md:text-5xl font-extrabold mb-10 text-white">
        My <span className="text-white">Approach</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-10">
        <Card
          title="Planning & Strategy"
          icon={<AceternityIcon order="Phase 1" />}
          des="We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements."
          colors={[[255, 255, 255], [240, 240, 255]]}
        />
        <Card
          title="Development & Progress Update"
          icon={<AceternityIcon order="Phase 2" />}
          des="Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way."
          colors={[[250, 250, 250], [235, 235, 255]]}
        />
        <Card
          title="Development & Launch"
          icon={<AceternityIcon order="Phase 3" />}
          des="This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up."
          colors={[[245, 245, 245], [225, 225, 250]]}
        />
      </div>
    </section>
  );
};

export default Approach;

const Card = ({ title, icon, des, colors }:any) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative max-w-sm w-full mx-auto p-6 rounded-3xl shadow-lg bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden transition-transform duration-500 transform hover:scale-105"
      style={{
        background: `linear-gradient(135deg, rgb(${colors[0].join(
          ", "
        )}), rgb(${colors[1].join(", ")}))`,
      }}
    >
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full w-full absolute inset-0"
            >
              <CanvasRevealEffect
                animationSpeed={5.1}
                containerClassName="bg-transparent rounded-3xl overflow-hidden"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="relative z-10 flex flex-col items-center">
        <div className="text-2xl font-bold text-gray-900 mb-4">{icon}</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-gray-700 text-center">{des}</p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }:any) => {
  return (
    <button className="relative inline-flex overflow-hidden rounded-full p-[1px]">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#B0E0E6_0%,#ADD8E6_50%,#B0E0E6_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-5 py-2 text-blue-500 backdrop-blur-3xl font-bold text-2xl">
        {order}
      </span>
    </button>
  );
};
