import Image from "next/image";
import { Tab } from "react-tabs";

const SkillCard = ({title,iconUrl,isActive,onClick}:any) => {
    return (
     <Tab className='border-0 '>
           <button className={`skills-card btn btn-outline relative btn-primary h-[100px] w-[200px]  ${isActive ? "active" : ""}`}>
            <div className="absolute -left-[20px] -top-[15px]" >
                <Image className="bg-[#7c5fe6]  p-2 rounded-lg border border-gray-400" src={iconUrl} width={50} height={50} alt={title} />
            </div>
            {title}
            {/* <button className="btn btn-outline btn-primary">{title}</button> */}
        </button>
     </Tab>
    );
};

export default SkillCard;