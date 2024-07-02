import MagicButton from "@/components/MagicButton";
import { PinContainer } from "@/components/ui/Pin";
import Link from "next/link";

import { FaLocationArrow } from "react-icons/fa6";

const ProjectDetails = async ({ params }: { params: { projectId: string } }) => {
    // console.log(params);
    const res = await fetch(`https://portfolio-backend-two-snowy.vercel.app/api/v1/projects/${params.projectId}`, {
        cache: "force-cache"
    });
    const project = await res.json();
    // console.log(project);
    return (
    <div className="pt-20 bg-[#000319]">
         <div className="min-h-screen flex justify-between items-center gap-10 max-w-5xl w-full mx-auto  ">
            <div
                className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            >
                <PinContainer
                    title="wandermate.com"
                    href={project?.data?.link}
                >
                    <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                        <div
                            className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                            style={{ backgroundColor: "#13162D" }}
                        >
                            <img src="/bg.png" alt="bgimg" />
                        </div>
                        <img
                            src={project?.data?.img}
                            alt="cover"
                            className="z-10 absolute bottom-0"
                        />
                    </div>

                    <h1 className="font-bold lg:text-2xl md:text-xl text-base ">
                        {project?.data?.heading}
                    </h1>

                    <p
                        className="lg:text-xl lg:font-normal font-light text-sm line-clamp-5"
                        style={{
                            color: "#BEC1DD",
                            margin: "1vh 0",
                        }}
                    >
                        {project?.data?.des}
                    </p>

                    <div className="flex items-center justify-between mt-7 mb-3">
                        <div className="flex items-center">
                            {project?.data?.iconLists.map((icon: string, index: number) => (

                                <div
                                    key={index}
                                    className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                    style={{
                                        transform: `translateX(-${5 * index + 2}px)`,
                                    }}
                                >
                                    <img src={icon} alt="icon5" className="p-2" />
                                </div>
                            ))}
                        </div>

                        <Link href={project?.data?.link}>
                            <div className="flex justify-center items-center">
                                <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                                    Check Live Site
                                </p>
                                <FaLocationArrow className="ms-3" color="#CBACF9" />
                            </div>
                        </Link>
                    </div>
                </PinContainer>
            </div>
            <div className="">

                <p className="text-2xl font-bold">{project?.data?.heading}</p>
                <div className="my-2">
                    <p className="font-bold text-xl">Technologies : </p>
                    <p>{project?.data?.techStack?.map((item: string, index: number) => <li key={index}>{item}</li>)}</p>
                </div>
                <div className="flex justify-center items-center gap-5">
                    <Link href={project?.data?.clientSiteCode}>
                        <MagicButton title="Client Site Code" icon={<FaLocationArrow />} position="right" />
                    </Link>
                    <Link href={project?.data?.backendSiteCode}>
                        <MagicButton title="Server Site Code" icon={<FaLocationArrow />} position="right" />
                    </Link>
                </div>
            </div>
        </div>
  
    </div>   
    );
};

export default ProjectDetails;