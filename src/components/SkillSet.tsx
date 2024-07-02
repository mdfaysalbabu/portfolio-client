import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { SkillSetGrid, SkillSetGridItem } from "./ui/SkillSetGrid";

const SkillSet = () => {
    return (
     <section id="about">
      <SkillSetGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <SkillSetGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </SkillSetGrid>
    </section>
    );
};

export default SkillSet;