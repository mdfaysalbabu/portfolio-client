"use client";

import React from "react";
import { FaEye } from "react-icons/fa";
import { companies } from "@/data";
import { useGetAllBlogsQuery } from "@/redux/api/blogs/blogsApi";
import MagicButton from "./MagicButton";
import Link from "next/link";

const Clients = () => {
  const { data: blogs, isLoading } = useGetAllBlogsQuery({});
  
  return (
    <section id="blogs" className="py-20  text-white">
      <h1 className="text-4xl font-extrabold text-center mb-12">
        Blogs
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="w-full h-auto md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-y-auto mb-5  shadow-lg text-gray-900">
          {isLoading ? (
            <p className="text-2xl">Loading...</p>
          ) : (
            <div className="w-full h-full flex flex-col space-y-8 p-6">
              {blogs?.data.map((blog:any, idx:any) => (
                <div
                  key={idx}
                  className="p-6 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-lg shadow-lg w-full"
                >
                  <blockquote className="text-sm md:text-base leading-relaxed font-light mb-4 mt-4">
                    {blog.quote}
                  </blockquote>
                  <div className="flex items-center mt-4">
                    {blog.file && (
                      <img
                        className="w-12 h-12 rounded-full mr-4"
                        src={blog.file}
                        alt="profile"
                      />
                    )}
                    <div>
                      <span className="block text-lg font-bold">{blog.authorName}</span>
                      <span className="block text-xs text-gray-200">{blog.title}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="flex justify-center mt-10">
            <Link href="/blogs">
              <MagicButton title="See More" icon={<FaEye />} position="right" />
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <div key={company.id} className="flex md:max-w-60 max-w-32 gap-2">
              <img src={company.img} alt={company.name} className="md:w-10 w-5" />
              <img
                src={company.nameImg}
                alt={company.name}
                width={company.id === 4 || company.id === 5 ? 100 : 150}
                className="md:w-24 w-20"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
