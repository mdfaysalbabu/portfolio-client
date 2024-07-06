import { gridItems } from "@/data";
import {  BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about" className="py-20  to-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center mb-12 animate-fade-in">About Me</h2>
        <BentoGrid className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {gridItems.map((item, i) => (
            <BentoGridItem
              id={item.id}
              key={i}
              title={item.title}
              description={item.description}
              className={`rounded-xl p-8 bg-gradient-to-br from-gray-800 to-gray-600 shadow-xl transition-transform transform hover:scale-110 hover:shadow-2xl hover:from-green-500 hover:to-blue-500 ${item.className}`}
              img={item.img} // Replace with Md Faysal Ahamed's image
              imgClassName={`rounded-xl w-full h-56 object-cover border-4 border-gray-900 shadow-md ${item.imgClassName}`}
              titleClassName={`text-4xl font-extrabold text-yellow-400 mb-6 ${item.titleClassName}`}
              spareImg={item.spareImg} // Optionally add a spare image
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default Grid;
