"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "./ui/Pin";
import { useGetAllProjectsQuery } from "@/redux/api/projects/projectsApi";
import { TProject } from "@/types";
import Link from "next/link";
import Image from "next/image";

const RecentProjects = () => {
  const { data: projects, isLoading } = useGetAllProjectsQuery({});

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="py-20" id="projects">
      <h1 className="heading text-center text-3xl md:text-5xl font-bold mb-10">
        A small selection of{" "}
        <span className="text-white">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects?.data?.map((item: TProject) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300"
            key={item._id}
          >
            <PinContainer title={item.title} href={item?.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image src="/bg.png" alt="bgimg" layout="fill" objectFit="cover" className="opacity-50" />
                </div>
                <Image
                  src={item.img}
                  alt="cover"
                  layout="fill"
                  objectFit="cover"
                  className="z-10 absolute bottom-0 transform hover:translate-y-2 transition-transform duration-300"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base text-white line-clamp-1">
                {item.title}
              </h1>

              <p className="lg:text-xl lg:font-normal font-light text-sm text-gray-300 line-clamp-2 mt-2">
                {item.des}
              </p>
              
              {item?._id && (
                <Link href={`/project-details/${item._id}`}>
                  <button className="btn  btn-outline btn-sm mt-4 bg-teal-700 hover:bg-purple-800 border-none text-white">
                    See Details
                  </button>
                </Link>
              )}
              
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image src={icon} alt="icon" width={32} height={32} className="p-2" />
                    </div>
                  ))}
                </div>

                <Link href={item.link}>
                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-white">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3 text-white" />
                  </div>
                </Link>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
